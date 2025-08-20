import { Card, CardContent } from "@/components/ui/card";
import { FragmentOf, graphql } from "@/lib/graphql";

import AccentText from "./accent-text/accent-text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { cn } from "@/lib/utils";
import icons from "./ui/icons";

export function PageItemSection({
  title,
  body,
  cards,
  size,
}: FragmentOf<typeof PageItemSectionFragment>) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-slate-800 mb-4">
            <AccentText text={title} addNewline />
          </h2>
          {body ? (
            <div className="text-xl text-slate-600 max-w-3xl mx-auto">
              <BlocksRenderer content={body} />
            </div>
          ) : null}
        </div>

        <div
          className={cn(
            "grid grid-cols-1",
            size === "sm" && "md:grid-cols-2 lg:grid-cols-4 gap-8",
            size === "md" && "md:grid-cols-2 lg:grid-cols-3 gap-8",
            size === "lg" && "lg:grid-cols-2 gap-12"
          )}
        >
          {cards?.map((c, index) => {
            const Icon = c?.icon && icons[c?.icon];
            return (
              <Card
                key={index}
                className={cn(
                  size === "sm" && "text-center",
                  "border-slate-200 hover:shadow-lg transition-shadow"
                )}
              >
                <CardContent className="p-6">
                  <div
                    className={cn(
                      size === "sm" && "mx-auto",
                      "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                    )}
                  >
                    {Icon ? <Icon className="h-6 w-6 text-blue-600" /> : null}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">
                    {c?.title}
                  </h3>
                  <div className="text-slate-600 blocks">
                    {c?.body ? <BlocksRenderer content={c.body} /> : null}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const PageItemSectionFragment = graphql(/* GraphQL */ `
  fragment PageItemSectionFragment on ComponentPageItemSection @_unmask {
    id
    title
    body
    size
    cards {
      title
      body
      icon
    }
  }
`);
