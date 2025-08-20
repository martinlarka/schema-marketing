import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, Globe } from "lucide-react"
import Link from "next/link"

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "50M+", label: "Tasks Completed" },
  { number: "99.9%", label: "Uptime" },
  { number: "150+", label: "Countries Served" },
]

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make starts with our customers. Their success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that solve real problems.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product quality to customer service.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're building tools that empower businesses worldwide to achieve their full potential.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former VP of Engineering at TechCorp with 15+ years of experience building scalable platforms.",
    image: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer passionate about creating tools that make businesses more efficient.",
    image: "/professional-cto-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Product leader with a track record of launching successful B2B software solutions.",
    image: "/professional-woman-product-manager-headshot.png",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Full-stack engineer who loves building robust, scalable systems that users love.",
    image: "/placeholder-oxvhj.png",
  },
]

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded by two engineers who experienced firsthand the challenges of managing business workflows.",
  },
  {
    year: "2021",
    title: "First 1,000 Users",
    description: "Reached our first milestone with early adopters who helped shape our product vision.",
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $10M to accelerate product development and expand our team.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Launched in 25+ countries and reached 10,000+ active users worldwide.",
  },
  {
    year: "2024",
    title: "Enterprise Focus",
    description: "Introduced enterprise features and partnerships with Fortune 500 companies.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">About Us</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">
              We're Building the Future of <span className="text-blue-600">Business Operations</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Our mission is to empower businesses worldwide with innovative tools that streamline workflows, enhance
              productivity, and drive growth. We believe every business deserves access to enterprise-grade solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading font-black text-3xl md:text-4xl text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Our Story</h2>
              <p className="text-xl text-slate-600">How we started and where we're going</p>
            </div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-white">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Our Values</h2>
              <p className="text-xl text-slate-600">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-slate-200 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Meet Our Team</h2>
              <p className="text-xl text-slate-600">The passionate people behind our success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-slate-200 overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">Join Our Journey</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
                  View Open Positions
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 bg-transparent"
                >
                  Get in Touch
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
