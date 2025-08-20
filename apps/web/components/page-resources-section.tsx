import { FragmentOf, graphql } from "@/lib/graphql";
import AccentText from "./accent-text/accent-text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function PageResourcesSection({
  title,
  body,
  resources,
}: FragmentOf<typeof PageResourcesSectionFragment>) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
            <AccentText text={title} addNewline />
          </h2>
          {body ? (
            <div className="text-xl text-slate-600">
              <BlocksRenderer content={body} />
            </div>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources?.map((resource, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square">
                <img
                  src={resource?.cover?.url || "/placeholder.svg"}
                  alt={resource?.title!}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <Badge className="mb-3 bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                  {resource?.type}
                </Badge>
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
                  {resource?.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {resource?.description}
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 mt-auto"
                  size="sm"
                >
                  Download Free
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PageResourcesSectionFragment = graphql(/* GraphQL */ `
  fragment PageResourcesSectionFragment on ComponentPageResourcesSection
  @_unmask {
    id
    title
    body
    resources {
      title
      description
      type
      file {
        url
      }
      cover {
        url
      }
    }
  }
`);
