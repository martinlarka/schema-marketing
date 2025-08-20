import { graphql, query } from "@/lib/graphql";

import { Button } from "./ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Categories from "./ui/categories";

export async function PageFaqList() {
  const { faqs } = await query(GET_FAQ_LIST);
  const categories = faqs
    .flatMap((faq) => faq?.tags)
    .filter(
      (tag, index, array) =>
        array.findIndex((t) => t?.slug === tag?.slug) === index
    );
  return (
    <>
      <Categories categories={categories} />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq?.documentId}
                value={String(faq?.documentId)}
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-slate-800 hover:no-underline">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{faq?.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pl-8 pr-8 pb-4">
                  {faq?.answer ? (
                    <BlocksRenderer content={faq?.answer} />
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            ))}
            <div className="h-2" />
          </Accordion>
        </div>
      </section>
    </>
  );
}

const GET_FAQ_LIST = graphql(
  /* GraphQL */ `
    query FaqListQuery {
      faqs {
        documentId
        question
        answer

        tags {
          name
          slug
        }
      }
    }
  `,
  []
);
