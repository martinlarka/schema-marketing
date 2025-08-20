import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { Button } from "@/components/ui/button";
import { FragmentOf, graphql } from "@/lib/graphql";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import AccentText from "./accent-text/accent-text";
import { Badge } from "./ui/badge";

export function PageHeroSection({
  title,
  body,
  links,
  badge,
}: FragmentOf<typeof PageHeroFragment>) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {badge ? (
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              {badge}
            </Badge>
          ) : null}
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-slate-800 mb-6">
            <AccentText text={title} addNewline />
          </h1>
          {body ? (
            <div className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              <BlocksRenderer content={body} />
            </div>
          ) : null}

          {links?.length ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {links.map((l, i) => (
                <Link key={i} href={String(l?.href)}>
                  {i === 0 ? (
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                    >
                      {l?.title}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4 bg-transparent"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      {l?.title}
                    </Button>
                  )}
                </Link>
              ))}
            </div>
          ) : null}

          {/* Trust indicators */}
          {/* <div className="text-center">
            <p className="text-sm text-slate-500 mb-4">
              Trusted by 10,000+ businesses worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-200 rounded-full opacity-20"></div>
      </div>
    </section>
  );
}

export const PageHeroFragment = graphql(/* GraphQL */ `
  fragment PageHeroFragment on ComponentPageHero @_unmask {
    id
    title
    body
    badge
    links {
      title
      href
    }
  }
`);
