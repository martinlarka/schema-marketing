import { FragmentOf, graphql } from "@/lib/graphql";
import AccentText from "./accent-text/accent-text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function PageTestimonialsSection({
  title,
  body,
  testimonials,
}: FragmentOf<typeof PageTestimonialsSectionFragment>) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <Card key={index} className="border-slate-200 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial?.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-blue-600 mb-4" />

                {testimonial?.body ? (
                  <div className="text-slate-600 mb-6 flex-1">
                    <BlocksRenderer content={testimonial?.body} />
                  </div>
                ) : null}

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="font-heading font-black text-2xl text-blue-600 mb-1">
                    {testimonial?.result?.metric}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial?.result?.description}
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial?.image?.url || "/placeholder.svg"}
                    alt={testimonial?.name!}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-heading font-bold text-slate-800">
                      {testimonial?.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial?.role} at {testimonial?.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PageTestimonialsSectionFragment = graphql(/* GraphQL */ `
  fragment PageTestimonialsSectionFragment on ComponentPageTestimonialsSection
  @_unmask {
    title
    body
    testimonials {
      name
      role
      company
      body
      rating
      image {
        url
      }
      result {
        metric
        description
      }
    }
  }
`);
