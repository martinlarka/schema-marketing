import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FragmentOf, graphql } from "@/lib/graphql";
import { Check, X } from "lucide-react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function PagePricing({ items }: FragmentOf<typeof PagePricingFragment>) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items?.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 ${
                plan?.isPopular
                  ? "border-blue-600 shadow-lg scale-105"
                  : "border-slate-200"
              }`}
            >
              {plan?.isPopular ? (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              ) : null}

              <CardHeader className="text-center pb-8">
                <CardTitle className="font-heading font-bold text-2xl text-slate-800 mb-2">
                  {plan?.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="font-heading font-black text-4xl text-slate-800">
                    {plan?.price?.split("\n")[0]}
                  </span>
                  <span className="text-slate-600 ml-1">
                    /{plan?.price?.split("\n")[1]}
                  </span>
                </div>
                <div className="text-slate-600">
                  {plan?.body ? <BlocksRenderer content={plan.body} /> : null}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan?.including?.split("\n").map((f, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />

                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                  {plan?.excluding?.split("\n").map((f) => (
                    <li key={-f} className="flex items-center">
                      <X className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />

                      <span className="text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan?.title === "Enterprise" ? "/contact" : "/trial"}
                >
                  <Button
                    className={`w-full ${
                      plan?.isPopular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-slate-800 hover:bg-slate-700"
                    }`}
                    size="lg"
                  >
                    {plan?.button}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PagePricingFragment = graphql(/* GraphQL */ `
  fragment PagePricingFragment on ComponentPagePricing @_unmask {
    items {
      title
      body
      price
      including
      excluding
      button
      isPopular
    }
  }
`);
