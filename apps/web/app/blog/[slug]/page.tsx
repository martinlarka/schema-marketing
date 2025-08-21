import { graphql, query } from "@/lib/graphql";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export async function PageBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const {
    blogs: [blog],
  } = await query(GET_BLOG, { slug });

  const { title, body, cover, publishedAt, tags } = blog || {};

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-x-2 mb-8">
            <Link href={`/blog`}>
              <Button
                variant="outline"
                className="border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            {tags?.map((t) => (
              <Badge
                key={t?.slug}
                className="bg-blue-100 text-blue-800 hover:bg-blue-100"
              >
                {t?.name}
              </Badge>
            ))}
          </div>
          <h1 className="font-heading font-black text-3xl md:text-5xl text-slate-800 mb-6">
            {title}
          </h1>

          <div className="flex items-center text-slate-600 mb-8">
            {/* <User className="h-4 w-4 mr-2" />
            <span className="mr-6">{blogPost.author}</span> */}
            <Calendar className="h-4 w-4 mr-2" />
            <span className="mr-6">
              {new Date(publishedAt!).toLocaleDateString()}
            </span>
            {/* <Clock className="h-4 w-4 mr-2" />
            <span>{blogPost.readTime}</span> */}
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={cover?.url || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
            <BlocksRenderer content={body!} />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-2xl text-slate-800 mb-8 text-center">
            Related Articles
          </h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-slate-800 mb-4">
                    {post.title}
                  </h3>
                  <Link href={`/blog/${post.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
                    >
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
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
  `
    query Page {
      blogs {
        slug
      }
    }
  `,
  []
);
