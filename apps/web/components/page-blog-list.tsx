import { FragmentOf, graphql, query } from "@/lib/graphql";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Categories from "./ui/categories";
import { Suspense } from "react";

export async function PageBlogList({
  featured_post,
}: FragmentOf<typeof PageBlogListFragment>) {
  const { blogs } = await query(GET_BLOG_POSTS);
  const categories = blogs
    .flatMap((blog) => blog?.tags)
    .filter(
      (tag, index, array) =>
        array.findIndex((t) => t?.slug === tag?.slug) === index
    );
  return (
    <>
      <Suspense fallback={null}>
        <Categories categories={categories} />
      </Suspense>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-heading font-black text-2xl text-slate-800 mb-2">
              Featured Article
            </h2>
            <p className="text-slate-600">
              Our latest and most popular content
            </p>
          </div>

          <Card className="border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-square">
                <img
                  src={featured_post?.cover.url || "/placeholder.svg"}
                  alt={featured_post?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                {featured_post?.tags.map((t, i) => (
                  <Badge
                    key={i}
                    className="mb-4 mr-2 bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit"
                  >
                    {t?.name}
                  </Badge>
                ))}
                <h3 className="font-heading font-black text-2xl md:text-3xl text-slate-800 mb-4">
                  {featured_post?.title}
                </h3>
                {featured_post?.description ? (
                  <div className="text-slate-600 mb-6 text-lg">
                    <BlocksRenderer content={featured_post?.description} />
                  </div>
                ) : null}

                {/* <div className="flex items-center text-sm text-slate-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featured_post?.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">
                    {new Date(featured_post?.date).toLocaleDateString()}
                  </span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featured_post?.readTime}</span>
                </div> */}

                <Link href={`/blog/${featured_post?.slug}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
          {/* {featured_post
            .filter((post) => featured_post?.featured)
            .map((post) => (
            ))} */}
        </div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading font-black text-2xl text-slate-800 mb-2">
              Recent Articles
            </h2>
            <p className="text-slate-600">
              Latest insights and updates from our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs
              .filter((post) => featured_post?.slug !== post?.slug)
              .map((post, i) => (
                <Card
                  key={i}
                  className="border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video">
                    <img
                      src={post?.cover?.url || "/placeholder.svg"}
                      alt={post?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    {post?.tags.map((t) => (
                      <Badge
                        key={t?.slug}
                        className="mb-2 mr-2 bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit text-xs"
                      >
                        {t?.name}
                      </Badge>
                    ))}
                    <h3 className="font-heading font-bold text-lg text-slate-800 line-clamp-2">
                      {post?.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {post?.body ? (
                      <div className="text-slate-600 text-sm mb-4 line-clamp-3">
                        <BlocksRenderer content={post?.body} />
                      </div>
                    ) : null}

                    <div className="flex items-center text-xs text-slate-500 mb-4">
                      {/* <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post?.author}</span> */}
                      <Calendar className="h-3 w-3 mr-1" />
                      {post?.publishedAt ? (
                        <span className="mr-3">
                          {new Date(post?.publishedAt).toLocaleDateString()}
                        </span>
                      ) : null}
                      {/* <Clock className="h-3 w-3 mr-1" />
                      <span>{post?.readTime}</span> */}
                    </div>

                    <Link href={`/blog/${post?.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

const GET_BLOG_POSTS = graphql(
  /* GraphQL */ `
    query BlogListQuery {
      blogs {
        title
        description
        body
        cover {
          url
        }
        tags {
          name
          slug
        }
        slug
        publishedAt
      }
    }
  `,
  []
);

export const PageBlogListFragment = graphql(/* GraphQL */ `
  fragment PageBlogListFragment on ComponentPageBlogList @_unmask {
    featured_post {
      title
      description
      body
      tags {
        name
      }
      cover {
        url
      }
      slug
    }
  }
`);
