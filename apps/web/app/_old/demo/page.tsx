import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Calendar, Users, CheckCircle, Video, Zap, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"

const demoHighlights = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "See how to automate your most time-consuming tasks in minutes",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Explore real-time insights and comprehensive reporting features",
  },
  {
    icon: Shield,
    title: "Security Features",
    description: "Learn about our enterprise-grade security and compliance tools",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Discover how teams work together seamlessly on our platform",
  },
]

const demoStats = [
  { number: "15 min", label: "Demo Duration" },
  { number: "1-on-1", label: "Personalized Session" },
  { number: "No Cost", label: "Completely Free" },
  { number: "Same Day", label: "Available Today" },
]

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Operations Director",
    company: "TechFlow Solutions",
    content: "The demo showed exactly how SaaSify could solve our workflow challenges. We signed up immediately after.",
    image: "/professional-woman-testimonial-headshot.png",
  },
  {
    name: "Robert Chen",
    role: "CEO",
    company: "GrowthLab Inc",
    content:
      "Best 15 minutes I've spent this year. The demo was comprehensive and our questions were answered perfectly.",
    image: "/ceo-testimonial-headshot.png",
  },
]

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Schedule Demo</Badge>
                <h1 className="font-heading font-black text-4xl md:text-5xl text-slate-800 mb-6">
                  See SaaSify in Action with a <span className="text-blue-600">Personalized Demo</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Get a tailored walkthrough of our platform with one of our product experts. See exactly how SaaSify
                  can transform your business operations.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {demoStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="font-heading font-black text-2xl text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Your Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Product Tour
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full w-16 h-16">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                  <img
                    src="/saasify-demo-preview.png"
                    alt="SaaSify Demo Preview"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-slate-800">Live Demo Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll See */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                What You'll See in Your Demo
              </h2>
              <p className="text-xl text-slate-600">
                Our product experts will walk you through the key features that matter most to your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demoHighlights.map((highlight, index) => (
                <Card key={index} className="border-slate-200 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{highlight.title}</h3>
                    <p className="text-slate-600 text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Scheduling Form */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                Schedule Your Personalized Demo
              </h2>
              <p className="text-xl text-slate-600">
                Fill out the form below and we'll contact you within 24 hours to schedule your demo
              </p>
            </div>

            <Card className="border-slate-200">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                      <Input placeholder="Enter your first name" className="border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                      <Input placeholder="Enter your last name" className="border-slate-200" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Work Email *</label>
                      <Input type="email" placeholder="Enter your work email" className="border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <Input placeholder="Enter your phone number" className="border-slate-200" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                      <Input placeholder="Enter your company name" className="border-slate-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Size</label>
                      <Select>
                        <SelectTrigger className="border-slate-200">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      What challenges are you looking to solve? *
                    </label>
                    <Textarea
                      placeholder="Tell us about your current workflow challenges and what you hope to achieve with SaaSify..."
                      rows={4}
                      className="border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Demo Time</label>
                    <Select>
                      <SelectTrigger className="border-slate-200">
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9AM - 12PM EST)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 5PM EST)</SelectItem>
                        <SelectItem value="evening">Evening (5PM - 7PM EST)</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule My Demo
                  </Button>

                  <p className="text-sm text-slate-500 text-center">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                What Our Demo Attendees Say
              </h2>
              <p className="text-xl text-slate-600">Hear from customers who scheduled a demo and loved what they saw</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-slate-200">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="h-4 w-4 text-green-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-heading font-bold text-slate-800">{testimonial.name}</div>
                        <div className="text-sm text-slate-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alternative CTA */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">Prefer to Try It Yourself?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and explore SaaSify at your own pace. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trial">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
                  Start Free Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Watch Product Tour
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
