import {
  PageHeroSection,
  PageHeroFragment,
} from "@/components/page-hero-section";

import { query, graphql } from "@/lib/graphql";
import {
  PageItemSection,
  PageItemSectionFragment,
} from "@/components/page-item-section";
import {
  PagePillSection,
  PagePillSectionFragment,
} from "@/components/page-pill-section";
import {
  PageCallToAction,
  PageCallToActionFragment,
} from "@/components/page-call-to-action";
import { PagePricing, PagePricingFragment } from "@/components/page-pricing";
import {
  PageFaqCardSection,
  PageFaqCardSectionFragment,
} from "@/components/page-faq-card-section";
import { PageStats, PageStatsFragment } from "@/components/page-stats-section";
import {
  PageTestimonialsSection,
  PageTestimonialsSectionFragment,
} from "@/components/page-testimonials";
import { PageStory, PageStoryFragment } from "@/components/page-story-section";
import {
  PageCaseStudiesSection,
  PageCaseStudiesSectionFragment,
} from "@/components/page-case-studies-section";
import {
  PageBlogList,
  PageBlogListFragment,
} from "@/components/page-blog-list";
import {
  PageResourcesSection,
  PageResourcesSectionFragment,
} from "@/components/page-resources-section";
import { PageFaqList } from "@/components/page-faq-list";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const {
    pages: [page],
  } = await query(GET_PAGE, { slug });

  return (
    <>
      {page?.content?.map((c, i) => {
        switch (c?.__typename) {
          case "ComponentPageHero":
            return <PageHeroSection key={i} {...c} />;
          case "ComponentPageItemSection":
            return <PageItemSection key={i} {...c} />;
          case "ComponentPagePillSection":
            return <PagePillSection key={i} {...c} />;
          case "ComponentPageCallToAction":
            return <PageCallToAction key={i} {...c} />;
          case "ComponentPagePricing":
            return <PagePricing key={i} {...c} />;
          case "ComponentPageFaqCardSection":
            return <PageFaqCardSection key={i} {...c} />;
          case "ComponentPageStatsSection":
            return <PageStats key={i} {...c} />;
          case "ComponentPageStorySection":
            return <PageStory key={i} {...c} />;
          case "ComponentPageTestimonialsSection":
            return <PageTestimonialsSection key={i} {...c} />;
          case "ComponentPageCaseStudiesSection":
            return <PageCaseStudiesSection key={i} {...c} />;
          case "ComponentPageBlogList":
            return <PageBlogList key={i} {...c} />;
          case "ComponentPageResourcesSection":
            return <PageResourcesSection key={i} {...c} />;
          case "ComponentPageFaqList":
            return <PageFaqList key={i} />;
          default:
            return null;
        }
      })}
    </>
  );
}

export async function generateStaticParams() {
  const { pages } = await query(GET_PAGES_PARAMS);

  return pages;
}

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const { id } = await params

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

const GET_PAGE = graphql(
  `
    query Page($slug: String!) {
      pages(filters: { slug: { eq: $slug } }) {
        name
        slug
        content {
          __typename
          ...PageHeroFragment
          ...PageItemSectionFragment
          ...PagePillSectionFragment
          ...PageCallToActionFragment
          ...PagePricingFragment
          ...PageFaqCardSectionFragment
          ...PageStatsFragment
          ...PageStoryFragment
          ...PageTestimonialsSectionFragment
          ...PageCaseStudiesSectionFragment
          ...PageBlogListFragment
          ...PageResourcesSectionFragment
        }
      }
    }
  `,
  [
    PageStatsFragment,
    PageCallToActionFragment,
    PageHeroFragment,
    PageItemSectionFragment,
    PagePillSectionFragment,
    PagePricingFragment,
    PageFaqCardSectionFragment,
    PageStoryFragment,
    PageTestimonialsSectionFragment,
    PageCaseStudiesSectionFragment,
    PageBlogListFragment,
    PageResourcesSectionFragment,
  ]
);

const GET_PAGES_PARAMS = graphql(
  `
    query Page {
      pages {
        slug
      }
    }
  `,
  []
);
