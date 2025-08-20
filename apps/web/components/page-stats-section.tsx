import { FragmentOf, graphql } from "@/lib/graphql";

export function PageStats({ stats }: FragmentOf<typeof PageStatsFragment>) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading font-black text-3xl md:text-4xl text-blue-600 mb-2">
                {stat?.value}
              </div>
              <div className="text-slate-600 font-medium">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PageStatsFragment = graphql(/* GraphQL */ `
  fragment PageStatsFragment on ComponentPageStatsSection @_unmask {
    stats {
      label
      value
    }
  }
`);
