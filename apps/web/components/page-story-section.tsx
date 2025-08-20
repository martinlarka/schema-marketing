import { FragmentOf, graphql } from "@/lib/graphql";
import AccentText from "./accent-text/accent-text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export function PageStory({
  title,
  body,
  timeline,
}: FragmentOf<typeof PageStoryFragment>) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-slate-800 mb-4">
            <AccentText text={title} addNewline />
          </h2>
          {body ? (
            <div className="text-xl text-slate-600">
              <BlocksRenderer content={body} />
            </div>
          ) : null}
        </div>

        <div className="space-y-12">
          {timeline?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-white">
                    {item?.year}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">
                  {item?.title}
                </h3>
                {item?.body ? (
                  <div className="text-slate-600">
                    <BlocksRenderer content={item.body} />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PageStoryFragment = graphql(/* GraphQL */ `
  fragment PageStoryFragment on ComponentPageStorySection @_unmask {
    title
    body
    timeline {
      title
      body
      year
    }
  }
`);
