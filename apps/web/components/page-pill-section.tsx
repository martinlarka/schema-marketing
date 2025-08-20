import { FragmentOf, graphql } from "@/lib/graphql";
import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Workflow,
  Database,
  Globe,
  Lock,
  Headphones,
  Smartphone,
  Rocket,
} from "lucide-react";
import AccentText from "./accent-text/accent-text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const icons = {
  Zap,
  Shield,
  BarChart3,
  Users,
  Workflow,
  Database,
  Globe,
  Lock,
  Headphones,
  Smartphone,
  Rocket,
};

export function PagePillSection({
  title,
  body,
  pills,
}: FragmentOf<typeof PagePillSectionFragment>) {
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
          {pills?.map((p, i) => {
            const Icon = p?.icon && icons[p?.icon];
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {Icon ? <Icon className="h-8 w-8 text-blue-600" /> : null}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
                  {p?.title}
                </h3>
                <div className="text-slate-600 blocks">
                  {p?.body ? <BlocksRenderer content={p.body} /> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const PagePillSectionFragment = graphql(/* GraphQL */ `
  fragment PagePillSectionFragment on ComponentPagePillSection @_unmask {
    id
    title
    body
    pills {
      title
      body
      icon
    }
  }
`);
