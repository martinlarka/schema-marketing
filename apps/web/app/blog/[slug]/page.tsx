import { graphql, query } from "@/lib/graphql";
import { BlogPage } from "./blog-page";

export async function PageBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const {
    blogs: [blog],
  } = await query(GET_BLOG, { slug });

  return <BlogPage blog={blog} />;
}

export async function generateStaticParams() {
  const { blogs } = await query(GET_BLOGS_PARAMS);

  return blogs;
}

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const { id } = await params

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

const GET_BLOG = graphql(
  /* GraphQL */ `
    query Page($slug: String) {
      blogs(filters: { slug: { eq: $slug } }) {
        title
        description
        body
        tags {
          name
          slug
        }
        cover {
          url
        }
        slug
        publishedAt
      }
    }
  `,
  []
);

const GET_BLOGS_PARAMS = graphql(
  /* GraphQL */ `
    query Page {
      blogs {
        slug
      }
    }
  `,
  []
);
