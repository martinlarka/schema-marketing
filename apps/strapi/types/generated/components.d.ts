import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Enumeration<
      [
        'ArrowLeft',
        'ArrowRight',
        'BarChart3',
        'Book',
        'Calendar',
        'Check',
        'CheckCircle',
        'CheckIcon',
        'ChevronDownIcon',
        'ChevronRight',
        'ChevronRightIcon',
        'ChevronUpIcon',
        'CircleIcon',
        'Clock',
        'CreditCard',
        'Database',
        'ExternalLink',
        'FileText',
        'Globe',
        'GripVerticalIcon',
        'Headphones',
        'HelpCircle',
        'Lightbulb',
        'Lock',
        'Mail',
        'Menu',
        'MessageCircle',
        'MinusIcon',
        'MoreHorizontal',
        'PanelLeftIcon',
        'Phone',
        'Play',
        'Quote',
        'Rocket',
        'Search',
        'SearchIcon',
        'Share2',
        'Shield',
        'Smartphone',
        'Star',
        'Target',
        'TrendingUp',
        'User',
        'Users',
        'Video',
        'Workflow',
        'XIcon',
        'Zap',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCaseResult extends Struct.ComponentSchema {
  collectionName: 'components_components_case_results';
  info: {
    displayName: 'Case Result';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ComponentsCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_components_case_studies';
  info: {
    displayName: 'Case Study';
  };
  attributes: {
    challenge: Schema.Attribute.Text;
    company: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    industry: Schema.Attribute.String;
    results: Schema.Attribute.Component<'components.case-result', true>;
    solution: Schema.Attribute.Text;
  };
}

export interface ComponentsFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_cards';
  info: {
    displayName: 'Faq Card';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface ComponentsForm extends Struct.ComponentSchema {
  collectionName: 'components_components_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsPill extends Struct.ComponentSchema {
  collectionName: 'components_components_pills';
  info: {
    displayName: 'Pill';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Enumeration<
      [
        'Zap',
        'Shield',
        'BarChart3',
        'Users',
        'Workflow',
        'Database',
        'Globe',
        'Lock',
        'Headphones',
        'Smartphone',
        'Rocket',
      ]
    >;
    title: Schema.Attribute.Text;
  };
}

export interface ComponentsPricingItem extends Struct.ComponentSchema {
  collectionName: 'components_components_pricing_items';
  info: {
    displayName: 'Pricing Item';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    button: Schema.Attribute.String;
    excluding: Schema.Attribute.Text;
    including: Schema.Attribute.Text;
    isPopular: Schema.Attribute.Boolean;
    price: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsResourcesItem extends Struct.ComponentSchema {
  collectionName: 'components_components_resources_items';
  info: {
    displayName: 'Resources Item';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    file: Schema.Attribute.Media<'files', true>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface ComponentsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_components_stat_items';
  info: {
    displayName: 'Stat Item';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'Zap',
        'Shield',
        'BarChart3',
        'Users',
        'Clock',
        'Lock',
        'Smartphone',
        'Workflow',
        'ArrowLeft',
        'ArrowRight',
        'Book',
        'Calendar',
        'Check',
        'CheckCircle',
        'CheckIcon',
        'ChevronDownIcon',
        'ChevronRight',
        'ChevronRightIcon',
        'ChevronUpIcon',
        'CircleIcon',
        'CreditCard',
        'Database',
        'ExternalLink',
        'FileText',
        'Globe',
        'GripVerticalIcon',
        'Headphones',
        'HelpCircle',
        'Lightbulb',
        'Mail',
        'Menu',
        'MessageCircle',
        'MinusIcon',
        'MoreHorizontal',
        'PanelLeftIcon',
        'Phone',
        'Play',
        'Quote',
        'Rocket',
        'Search',
        'SearchIcon',
        'Share2',
        'Star',
        'Target',
        'TrendingUp',
        'User',
        'Video',
        'X',
        'XIcon',
      ]
    >;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ComponentsStoryItem extends Struct.ComponentSchema {
  collectionName: 'components_components_story_items';
  info: {
    displayName: 'Story Item';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface ComponentsTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonial_items';
  info: {
    displayName: 'Testimonial Item';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    company: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
    result: Schema.Attribute.Component<'components.testimonial-result', false>;
    role: Schema.Attribute.String;
  };
}

export interface ComponentsTestimonialResult extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonial_results';
  info: {
    displayName: 'Testimonial Result';
  };
  attributes: {
    description: Schema.Attribute.Text;
    metric: Schema.Attribute.String;
  };
}

export interface PageBlogList extends Struct.ComponentSchema {
  collectionName: 'components_page_blog_lists';
  info: {
    displayName: 'Blog List';
  };
  attributes: {
    featured_post: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    tags: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'>;
  };
}

export interface PageCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_page_call_to_actions';
  info: {
    displayName: 'Call to action';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    form: Schema.Attribute.Component<'components.form', false>;
    links: Schema.Attribute.Component<'components.link', true>;
    title: Schema.Attribute.Text;
  };
}

export interface PageCaseStudiesSection extends Struct.ComponentSchema {
  collectionName: 'components_page_case_studies_sections';
  info: {
    displayName: 'Case Studies Section';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    cases: Schema.Attribute.Component<'components.case-study', true>;
    title: Schema.Attribute.Text;
  };
}

export interface PageFaqCardSection extends Struct.ComponentSchema {
  collectionName: 'components_page_faq_card_sections';
  info: {
    displayName: 'FAQ Card Section';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    tag: Schema.Attribute.Relation<'oneToOne', 'api::tag.tag'>;
    title: Schema.Attribute.Text;
  };
}

export interface PageFaqList extends Struct.ComponentSchema {
  collectionName: 'components_page_faq_lists';
  info: {
    displayName: 'FAQ List';
  };
  attributes: {
    tags: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'>;
  };
}

export interface PageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    body: Schema.Attribute.Blocks;
    links: Schema.Attribute.Component<'components.link', true>;
    title: Schema.Attribute.Text;
  };
}

export interface PageItemSection extends Struct.ComponentSchema {
  collectionName: 'components_page_item_sections';
  info: {
    displayName: 'Card Section';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    cards: Schema.Attribute.Component<'components.card', true>;
    size: Schema.Attribute.Enumeration<['sm', 'md', 'lg']>;
    title: Schema.Attribute.String;
  };
}

export interface PagePillSection extends Struct.ComponentSchema {
  collectionName: 'components_page_pill_sections';
  info: {
    displayName: 'Pill Section';
    icon: 'bell';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    pills: Schema.Attribute.Component<'components.pill', true>;
    title: Schema.Attribute.Text;
  };
}

export interface PagePricing extends Struct.ComponentSchema {
  collectionName: 'components_page_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.pricing-item', true>;
  };
}

export interface PageResourcesSection extends Struct.ComponentSchema {
  collectionName: 'components_page_resources_sections';
  info: {
    displayName: 'Resources Section';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    resources: Schema.Attribute.Component<'components.resources-item', true>;
    title: Schema.Attribute.Text;
  };
}

export interface PageStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_page_stats_sections';
  info: {
    displayName: 'Stats Section';
  };
  attributes: {
    stats: Schema.Attribute.Component<'components.stat-item', true>;
  };
}

export interface PageStorySection extends Struct.ComponentSchema {
  collectionName: 'components_page_story_sections';
  info: {
    displayName: 'Story Section';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    timeline: Schema.Attribute.Component<'components.story-item', true>;
    title: Schema.Attribute.Text;
  };
}

export interface PageSuccessStorySection extends Struct.ComponentSchema {
  collectionName: 'components_page_success_story_sections';
  info: {
    displayName: 'Success Story Section';
  };
  attributes: {};
}

export interface PageTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_page_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    testimonials: Schema.Attribute.Component<
      'components.testimonial-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.card': ComponentsCard;
      'components.case-result': ComponentsCaseResult;
      'components.case-study': ComponentsCaseStudy;
      'components.faq-card': ComponentsFaqCard;
      'components.form': ComponentsForm;
      'components.link': ComponentsLink;
      'components.pill': ComponentsPill;
      'components.pricing-item': ComponentsPricingItem;
      'components.resources-item': ComponentsResourcesItem;
      'components.stat-item': ComponentsStatItem;
      'components.story-item': ComponentsStoryItem;
      'components.testimonial-item': ComponentsTestimonialItem;
      'components.testimonial-result': ComponentsTestimonialResult;
      'page.blog-list': PageBlogList;
      'page.call-to-action': PageCallToAction;
      'page.case-studies-section': PageCaseStudiesSection;
      'page.faq-card-section': PageFaqCardSection;
      'page.faq-list': PageFaqList;
      'page.hero': PageHero;
      'page.item-section': PageItemSection;
      'page.pill-section': PagePillSection;
      'page.pricing': PagePricing;
      'page.resources-section': PageResourcesSection;
      'page.stats-section': PageStatsSection;
      'page.story-section': PageStorySection;
      'page.success-story-section': PageSuccessStorySection;
      'page.testimonials-section': PageTestimonialsSection;
    }
  }
}
