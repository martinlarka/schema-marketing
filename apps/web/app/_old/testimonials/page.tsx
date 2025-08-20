import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, TrendingUp, Users, Clock } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Operations Director",
    company: "TechFlow Solutions",
    image: "/professional-woman-testimonial-headshot.png",
    content:
      "SaaSify has completely transformed how we manage our operations. What used to take hours now takes minutes. Our team productivity has increased by 300% since implementation.",
    rating: 5,
    results: {
      metric: "300%",
      description: "increase in team productivity",
    },
  },
  {
    name: "Robert Chen",
    role: "CEO",
    company: "GrowthLab Inc",
    image: "/ceo-testimonial-headshot.png",
    content:
      "The automation features alone have saved us 20 hours per week. The ROI was evident within the first month. I can't imagine running our business without SaaSify now.",
    rating: 5,
    results: {
      metric: "20 hrs",
      description: "saved per week through automation",
    },
  },
  {
    name: "Sarah Thompson",
    role: "Project Manager",
    company: "Digital Dynamics",
    image: "/professional-woman-project-manager-testimonial-headshot.png",
    content:
      "The collaboration tools have revolutionized how our remote team works together. Communication is seamless, and project delivery times have improved by 40%.",
    rating: 5,
    results: {
      metric: "40%",
      description: "faster project delivery",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    company: "InnovateCorp",
    image: "/placeholder-30yhd.png",
    content:
      "The security features and compliance tools give us peace of mind. We've successfully passed all our audits since switching to SaaSify. The platform is enterprise-ready.",
    rating: 5,
    results: {
      metric: "100%",
      description: "audit success rate",
    },
  },
  {
    name: "Lisa Wang",
    role: "Marketing Director",
    company: "BrandBoost Agency",
    image: "/marketing-director-testimonial.png",
    content:
      "The analytics and reporting capabilities have given us insights we never had before. We've optimized our campaigns and increased client satisfaction by 60%.",
    rating: 5,
    results: {
      metric: "60%",
      description: "increase in client satisfaction",
    },
  },
  {
    name: "David Park",
    role: "Founder",
    company: "StartupLaunch",
    image: "/placeholder-ag5zx.png",
    content:
      "As a startup, we needed a solution that could scale with us. SaaSify has grown with our business from 5 to 50 employees without missing a beat.",
    rating: 5,
    results: {
      metric: "10x",
      description: "team growth supported seamlessly",
    },
  },
]

const caseStudies = [
  {
    company: "TechFlow Solutions",
    industry: "Technology Services",
    challenge: "Manual processes causing delays and errors in project delivery",
    solution: "Implemented workflow automation and team collaboration tools",
    results: [
      "300% increase in team productivity",
      "50% reduction in project delivery time",
      "90% decrease in manual errors",
    ],
    image: "/placeholder-ti6sz.png",
  },
  {
    company: "GrowthLab Inc",
    industry: "Marketing Agency",
    challenge: "Difficulty managing multiple client projects and deadlines",
    solution: "Deployed project management and client communication features",
    results: [
      "40% improvement in project delivery",
      "25% increase in client retention",
      "60% reduction in missed deadlines",
    ],
    image: "/marketing-team-collaboration.png",
  },
  {
    company: "InnovateCorp",
    industry: "Software Development",
    challenge: "Security compliance requirements for enterprise clients",
    solution: "Utilized enterprise security features and compliance tools",
    results: ["100% audit success rate", "50% faster compliance reporting", "30% increase in enterprise deals"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

const stats = [
  { icon: Users, number: "10,000+", label: "Satisfied Customers" },
  { icon: Star, number: "4.9/5", label: "Average Rating" },
  { icon: TrendingUp, number: "250%", label: "Average ROI" },
  { icon: Clock, number: "24/7", label: "Customer Support" },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Testimonials</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">
              Join Thousands of <span className="text-blue-600">Satisfied Customers</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              See how businesses like yours are transforming their operations and achieving remarkable results with our
              platform.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="font-heading font-black text-2xl md:text-3xl text-slate-800 mb-1">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-slate-600">Real stories from real businesses</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-slate-200 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <Quote className="h-8 w-8 text-blue-600 mb-4" />

                    <p className="text-slate-600 mb-6 flex-1">{testimonial.content}</p>

                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <div className="font-heading font-black text-2xl text-blue-600 mb-1">
                        {testimonial.results.metric}
                      </div>
                      <div className="text-sm text-slate-600">{testimonial.results.description}</div>
                    </div>

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

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Success Stories</h2>
              <p className="text-xl text-slate-600">Detailed case studies showing real business impact</p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{study.industry}</Badge>
                      <h3 className="font-heading font-black text-2xl text-slate-800 mb-4">{study.company}</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-heading font-bold text-lg text-slate-800 mb-2">Challenge</h4>
                          <p className="text-slate-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-heading font-bold text-lg text-slate-800 mb-2">Solution</h4>
                          <p className="text-slate-600">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-heading font-bold text-lg text-slate-800 mb-2">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-slate-600">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:p-8">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={`${study.company} case study`}
                        className="w-full h-64 lg:h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your transformation today and see why thousands of businesses trust us with their operations.
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
