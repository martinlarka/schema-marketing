import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, MessageCircle, Book, Phone } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  "All",
  "Getting Started",
  "Billing & Pricing",
  "Technical Issues",
  "Account Management",
  "Integrations",
  "Security & Privacy",
]

const faqs = [
  {
    id: "getting-started-1",
    category: "Getting Started",
    question: "How do I get started with SaaSify?",
    answer:
      "Getting started is easy! Simply sign up for a free trial, complete the onboarding process, and you'll be ready to use all our features. Our setup wizard will guide you through connecting your first integrations and creating your first workflow in just a few minutes.",
  },
  {
    id: "getting-started-2",
    category: "Getting Started",
    question: "Do I need technical knowledge to use SaaSify?",
    answer:
      "Not at all! SaaSify is designed for users of all technical levels. Our drag-and-drop interface makes it easy to create workflows without any coding. However, if you do have technical expertise, you can also use our advanced features and API integrations.",
  },
  {
    id: "getting-started-3",
    category: "Getting Started",
    question: "How long does it take to see results?",
    answer:
      "Most customers see immediate benefits from day one. Simple workflows can be set up in minutes, while more complex automations might take a few hours to configure. On average, customers report significant productivity improvements within the first week of use.",
  },
  {
    id: "billing-1",
    category: "Billing & Pricing",
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately for upgrades, while downgrades take effect at the start of your next billing cycle. You'll be charged or credited proportionally for any plan changes.",
  },
  {
    id: "billing-2",
    category: "Billing & Pricing",
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with SaaSify within the first 30 days, contact our support team for a full refund. After 30 days, refunds are considered on a case-by-case basis.",
  },
  {
    id: "billing-3",
    category: "Billing & Pricing",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers. All payments are processed securely through our PCI-compliant payment processors.",
  },
  {
    id: "technical-1",
    category: "Technical Issues",
    question: "What should I do if I'm experiencing slow performance?",
    answer:
      "First, try refreshing your browser and clearing your cache. If the issue persists, check our status page for any ongoing issues. Most performance issues are resolved by switching to a supported browser (Chrome, Firefox, Safari, or Edge) and ensuring you have a stable internet connection.",
  },
  {
    id: "technical-2",
    category: "Technical Issues",
    question: "How do I troubleshoot integration issues?",
    answer:
      "Start by checking that your API credentials are correct and that the third-party service is operational. Our integration troubleshooting guide in the help center provides step-by-step solutions for common issues. If you're still having trouble, our support team can help diagnose the problem.",
  },
  {
    id: "account-1",
    category: "Account Management",
    question: "How do I add team members to my account?",
    answer:
      "Go to your account settings and click on 'Team Management.' From there, you can invite team members by email and assign them specific roles and permissions. Team members will receive an invitation email to join your workspace.",
  },
  {
    id: "account-2",
    category: "Account Management",
    question: "Can I export my data?",
    answer:
      "Yes, you can export your data at any time. Go to Settings > Data Export to download your workflows, data, and reports in various formats including CSV, JSON, and PDF. We believe in data portability and never lock you in.",
  },
  {
    id: "integrations-1",
    category: "Integrations",
    question: "Which third-party services do you integrate with?",
    answer:
      "We integrate with over 500 popular services including Google Workspace, Microsoft 365, Slack, Salesforce, HubSpot, Shopify, and many more. Check our integrations page for the complete list, and if you don't see what you need, let us know!",
  },
  {
    id: "integrations-2",
    category: "Integrations",
    question: "Can I request new integrations?",
    answer:
      "We're always adding new integrations based on customer feedback. Submit your integration requests through our feedback portal or contact support. We prioritize integrations based on demand and feasibility.",
  },
  {
    id: "security-1",
    category: "Security & Privacy",
    question: "How secure is my data?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, regular security audits, and follow industry best practices. Your data is encrypted both in transit and at rest, and we never share your information with third parties.",
  },
  {
    id: "security-2",
    category: "Security & Privacy",
    question: "Do you offer single sign-on (SSO)?",
    answer:
      "Yes, SSO is available on our Professional and Enterprise plans. We support SAML 2.0 and OAuth 2.0 protocols, and integrate with popular identity providers like Okta, Azure AD, and Google Workspace.",
  },
]

const helpResources = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides and tutorials",
    link: "/docs",
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Connect with other users and experts",
    link: "/community",
  },
  {
    icon: Phone,
    title: "Contact Support",
    description: "Get help from our support team",
    link: "/support",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">FAQ</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Find quick answers to common questions about SaaSify. Can't find what you're looking for? Our support team
              is here to help.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input placeholder="Search FAQs..." className="pl-10 bg-white border-slate-200" />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {faqCategories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-heading font-bold text-slate-800 hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pl-8 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Help Resources */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Need More Help?</h2>
              <p className="text-xl text-slate-600">Explore these additional resources for support and guidance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {helpResources.map((resource, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">{resource.title}</h3>
                    <p className="text-slate-600 mb-6">{resource.description}</p>
                    <Link href={resource.link}>
                      <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is available 24/7 to help you get the most out of SaaSify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
                  Contact Support
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
