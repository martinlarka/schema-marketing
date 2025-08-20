import { FragmentOf, graphql } from "@/lib/graphql";
import AccentText from "./accent-text/accent-text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { Button } from "./ui/button";

export function PageCallToAction({
  title,
  body,
  links,
}: FragmentOf<typeof PageCallToActionFragment>) {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
          <AccentText text={title} addNewline />
        </h2>
        {body ? (
          <div className="text-xl text-blue-100 mb-8">
            <BlocksRenderer content={body} />
          </div>
        ) : null}

        {links?.length ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {links.map((l, i) => (
              <Link key={i} href={String(l?.href)}>
                {i === 0 ? (
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-slate-50"
                  >
                    {l?.title}
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:text-white hover:bg-blue-700 bg-transparent"
                  >
                    {l?.title}
                  </Button>
                )}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export const PageCallToActionFragment = graphql(/* GraphQL */ `
  fragment PageCallToActionFragment on ComponentPageCallToAction @_unmask {
    id
    title
    body

    links {
      title
      href
    }

    form {
      name
    }
  }
`);
