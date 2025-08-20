import { FragmentOf, graphql } from "@/lib/graphql";
import AccentText from "./accent-text/accent-text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { Card, CardContent } from "./ui/card";

export function PageFaqCardSection({
  title,
  body,
  faqs,
  tag,
}: FragmentOf<typeof PageFaqCardSectionFragment>) {
  const items = [...faqs, ...(tag?.faqs ?? [])].filter(
    (faq, index, array) =>
      array.findIndex((item) => item?.documentId === faq?.documentId) === index
  );
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-8">
          {items.map((faq, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
                  {faq?.question}
                </h3>
                <div className="text-slate-600 blocks">
                  {faq?.answer ? <BlocksRenderer content={faq.answer} /> : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PageFaqCardSectionFragment = graphql(/* GraphQL */ `
  fragment PageFaqCardSectionFragment on ComponentPageFaqCardSection @_unmask {
    id
    title
    body
    faqs {
      documentId
      question
      answer
    }
    tag {
      faqs {
        documentId
        question
        answer
      }
    }
  }
`);
