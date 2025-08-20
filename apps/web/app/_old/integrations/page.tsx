import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink, Zap } from "lucide-react"
import Link from "next/link"

const integrationCategories = [
  "All",
  "Communication",
  "CRM & Sales",
  "Marketing",
  "Project Management",
  "Analytics",
  "E-commerce",
  "Development",
  "Finance",
]

const integrations = [
  // Communication
  {
    name: "Slack",
    category: "Communication",
    description: "Send notifications and updates directly to your Slack channels",
    logo: "/slack-logo.png",
    popular: true,
  },
  {
    name: "Microsoft Teams",
    category: "Communication",
    description: "Collaborate seamlessly with your Microsoft Teams workspace",
    logo: "/teams-logo.png",
    popular: false,
  },
  {
    name: "Discord",
    category: "Communication",
    description: "Connect your Discord server for team notifications",
    logo: "/discord-logo.png",
    popular: false,
  },
  {
    name: "Zoom",
    category: "Communication",
    description: "Schedule and manage meetings directly from your workflows",
    logo: "/zoom-logo.png",
    popular: false,
  },

  // CRM & Sales
  {
    name: "Salesforce",
    category: "CRM & Sales",
    description: "Sync customer data and automate your sales processes",
    logo: "/salesforce-logo.png",
    popular: true,
  },
  {
    name: "HubSpot",
    category: "CRM & Sales",
    description: "Integrate with HubSpot CRM for seamless lead management",
    logo: "/hubspot-logo.png",
    popular: true,
  },
  {
    name: "Pipedrive",
    category: "CRM & Sales",
    description: "Automate your sales pipeline with Pipedrive integration",
    logo: "/pipedrive-logo.png",
    popular: false,
  },

  // Marketing
  {
    name: "Mailchimp",
    category: "Marketing",
    description: "Sync contacts and automate email marketing campaigns",
    logo: "/mailchimp-logo.png",
    popular: true,
  },
  {
    name: "Constant Contact",
    category: "Marketing",
    description: "Manage email lists and campaigns with Constant Contact",
    logo: "/constant-contact-logo.png",
    popular: false,
  },
  {
    name: "Facebook Ads",
    category: "Marketing",
    description: "Track and optimize your Facebook advertising campaigns",
    logo: "/facebook-ads-logo.png",
    popular: false,
  },

  // Project Management
  {
    name: "Asana",
    category: "Project Management",
    description: "Create tasks and manage projects directly from your workflows",
    logo: "/asana-logo.png",
    popular: true,
  },
  {
    name: "Trello",
    category: "Project Management",
    description: "Automate card creation and board management in Trello",
    logo: "/trello-logo.png",
    popular: false,
  },
  {
    name: "Monday.com",
    category: "Project Management",
    description: "Sync data and automate workflows with Monday.com",
    logo: "/monday-logo.png",
    popular: false,
  },

  // Analytics
  {
    name: "Google Analytics",
    category: "Analytics",
    description: "Track website performance and user behavior automatically",
    logo: "/google-analytics-logo.png",
    popular: true,
  },
  {
    name: "Mixpanel",
    category: "Analytics",
    description: "Analyze user events and product analytics with Mixpanel",
    logo: "/mixpanel-logo.png",
    popular: false,
  },

  // E-commerce
  {
    name: "Shopify",
    category: "E-commerce",
    description: "Sync orders, customers, and inventory with your Shopify store",
    logo: "/shopify-logo.png",
    popular: true,
  },
  {
    name: "WooCommerce",
    category: "E-commerce",
    description: "Integrate with WooCommerce for order and customer management",
    logo: "/woocommerce-logo.png",
    popular: false,
  },
  {
    name: "Stripe",
    category: "E-commerce",
    description: "Process payments and manage subscriptions with Stripe",
    logo: "/stripe-logo.png",
    popular: true,
  },

  // Development
  {
    name: "GitHub",
    category: "Development",
    description: "Automate code deployments and issue tracking",
    logo: "/github-logo.png",
    popular: true,
  },
  {
    name: "GitLab",
    category: "Development",
    description: "Integrate with GitLab for CI/CD and project management",
    logo: "/gitlab-logo.png",
    popular: false,
  },
  {
    name: "Jira",
    category: "Development",
    description: "Sync issues and automate project tracking with Jira",
    logo: "/jira-logo.png",
    popular: false,
  },

  // Finance
  {
    name: "QuickBooks",
    category: "Finance",
    description: "Sync financial data and automate accounting processes",
    logo: "/quickbooks-logo.png",
    popular: false,
  },
  {
    name: "Xero",
    category: "Finance",
    description: "Integrate with Xero for seamless financial management",
    logo: "/xero-logo.png",
    popular: false,
  },
]

const stats = [
  { number: "500+", label: "Integrations Available" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "< 5 min", label: "Setup Time" },
  { number: "24/7", label: "Support" },
]

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Integrations</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">
              Connect with <span className="text-blue-600">500+ Apps</span> You Already Use
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Seamlessly integrate SaaSify with your favorite tools and services. Build powerful workflows that connect
              your entire tech stack.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input placeholder="Search integrations..." className="pl-10 bg-white border-slate-200" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading font-black text-2xl md:text-3xl text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {integrationCategories.map((category, index) => (
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

        {/* Popular Integrations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Popular Integrations</h2>
              <p className="text-xl text-slate-600">The most-used integrations by our customers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {integrations
                .filter((integration) => integration.popular)
                .map((integration, index) => (
                  <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                          <img
                            src={integration.logo || "/placeholder.svg"}
                            alt={`${integration.name} logo`}
                            className="w-8 h-8"
                          />
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Popular</Badge>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{integration.name}</h3>
                      <p className="text-slate-600 text-sm mb-4">{integration.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent group-hover:border-blue-600 group-hover:text-blue-600"
                      >
                        Connect
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Integrations */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">All Integrations</h2>
              <p className="text-xl text-slate-600">Browse our complete library of integrations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                        <img
                          src={integration.logo || "/placeholder.svg"}
                          alt={`${integration.name} logo`}
                          className="w-8 h-8"
                        />
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs">
                        {integration.category}
                      </Badge>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{integration.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{integration.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent group-hover:border-blue-600 group-hover:text-blue-600"
                    >
                      Connect
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Integration */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Don't See Your App?</h2>
            <p className="text-xl text-slate-600 mb-8">
              We're constantly adding new integrations. Request a custom integration or use our powerful API to build
              your own connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">Request Integration</Button>
              <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent">
                View API Docs
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Ready to Connect Your Apps?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and see how easy it is to integrate all your favorite tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trial">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
                  Start Free Trial
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
