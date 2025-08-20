import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Mail, Phone, Clock, Book, Users, Headphones, FileText, Video } from "lucide-react"
import Link from "next/link"

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    responseTime: "< 2 minutes",
    action: "Start Chat",
    link: "#",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    availability: "24/7",
    responseTime: "< 4 hours",
    action: "Send Email",
    link: "mailto:support@saasify.com",
    primary: false,
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    availability: "Mon-Fri, 9AM-6PM EST",
    responseTime: "Immediate",
    action: "Call Now",
    link: "tel:+1-555-123-4567",
    primary: false,
  },
]

const supportResources = [
  {
    icon: Book,
    title: "Knowledge Base",
    description: "Comprehensive guides and tutorials",
    articles: "200+ articles",
    link: "/docs",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    articles: "50+ videos",
    link: "/tutorials",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other users",
    articles: "1000+ discussions",
    link: "/community",
  },
  {
    icon: FileText,
    title: "API Documentation",
    description: "Technical documentation for developers",
    articles: "Complete API reference",
    link: "/api-docs",
  },
]

const supportStats = [
  { number: "< 2 min", label: "Average Response Time" },
  { number: "99.5%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Support Availability" },
  { number: "15+", label: "Languages Supported" },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Support</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">
              We're Here to <span className="text-blue-600">Help</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Get the support you need, when you need it. Our dedicated team is available 24/7 to ensure your success
              with SaaSify.
            </p>
          </div>
        </section>

        {/* Support Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {supportStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading font-black text-2xl md:text-3xl text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Get in Touch</h2>
              <p className="text-xl text-slate-600">Choose the support channel that works best for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <Card
                  key={index}
                  className={`border-2 ${
                    channel.primary ? "border-blue-600 shadow-lg" : "border-slate-200"
                  } hover:shadow-lg transition-shadow`}
                >
                  {channel.primary && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                      Recommended
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="font-heading font-bold text-xl text-slate-800">{channel.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4">{channel.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm text-slate-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {channel.availability}
                      </div>
                      <div className="text-sm font-medium text-blue-600">Response time: {channel.responseTime}</div>
                    </div>

                    <Link href={channel.link}>
                      <Button
                        className={`w-full ${
                          channel.primary ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-700"
                        }`}
                      >
                        {channel.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Send Us a Message</h2>
              <p className="text-xl text-slate-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <Card className="border-slate-200">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <Input placeholder="Enter your first name" className="border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" className="border-slate-200" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input type="email" placeholder="Enter your email" className="border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                      <Select>
                        <SelectTrigger className="border-slate-200">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Describe your question or issue in detail..."
                      rows={6}
                      className="border-slate-200"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Self-Service Resources */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                Self-Service Resources
              </h2>
              <p className="text-xl text-slate-600">Find answers and learn at your own pace</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportResources.map((resource, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{resource.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{resource.description}</p>
                    <p className="text-blue-600 font-medium text-sm mb-4">{resource.articles}</p>
                    <Link href={resource.link}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
                      >
                        Explore
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Support */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Headphones className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">Enterprise Support</h2>
            <p className="text-xl text-blue-100 mb-8">
              Need dedicated support for your organization? Our Enterprise plan includes priority support, dedicated
              account management, and custom SLAs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 bg-transparent"
                >
                  View Enterprise Plans
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
