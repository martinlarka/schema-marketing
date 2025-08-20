import { FragmentOf, graphql } from "@/lib/graphql";
import AccentText from "./accent-text/accent-text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function PageCaseStudiesSection({
  title,
  body,
  cases,
}: FragmentOf<typeof PageCaseStudiesSectionFragment>) {
  return (
    <section className="py-20 bg-slate-50">
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

        <div className="space-y-16">
          {cases?.map((study, index) => (
            <Card key={index} className="border-slate-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                    {study?.industry}
                  </Badge>
                  <h3 className="font-heading font-black text-2xl text-slate-800 mb-4">
                    {study?.company}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-800 mb-2">
                        Challenge
                      </h4>
                      <p className="text-slate-600">{study?.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-800 mb-2">
                        Solution
                      </h4>
                      <p className="text-slate-600">{study?.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-800 mb-2">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study?.results?.map((result, resultIndex) => (
                          <li
                            key={resultIndex}
                            className="flex items-center text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                            {result?.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:p-8">
                  <img
                    src={study?.image?.url || "/placeholder.svg"}
                    alt={`${study?.company} case study`}
                    className="w-full h-64 lg:h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PageCaseStudiesSectionFragment = graphql(/* GraphQL */ `
  fragment PageCaseStudiesSectionFragment on ComponentPageCaseStudiesSection
  @_unmask {
    title
    body
    cases {
      company
      industry
      challenge
      solution
      results {
        text
      }
      image {
        url
      }
    }
  }
`);
