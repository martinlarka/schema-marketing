import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = ["All", "Product Updates", "Best Practices", "Industry Insights", "Tutorials", "Company News"]

const blogPosts = [
  {
    id: "workflow-automation-guide",
    title: "The Complete Guide to Workflow Automation in 2024",
    excerpt:
      "Discover how to streamline your business processes and boost productivity with modern workflow automation tools and strategies.",
    category: "Best Practices",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/workflow-automation-guide-hero.png",
    featured: true,
  },
  {
    id: "saas-security-best-practices",
    title: "10 Essential Security Best Practices for SaaS Applications",
    excerpt:
      "Learn the critical security measures every SaaS business should implement to protect customer data and maintain trust.",
    category: "Industry Insights",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/saas-security-best-practices.png",
    featured: false,
  },
  {
    id: "product-update-january-2024",
    title: "Product Update: New Analytics Dashboard and Mobile App",
    excerpt:
      "Exciting new features including an enhanced analytics dashboard, mobile app improvements, and advanced reporting capabilities.",
    category: "Product Updates",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "/product-update-january-2024.png",
    featured: false,
  },
  {
    id: "remote-team-collaboration",
    title: "Building High-Performance Remote Teams: A Complete Guide",
    excerpt:
      "Essential strategies and tools for managing distributed teams effectively and maintaining productivity in remote work environments.",
    category: "Best Practices",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "10 min read",
    image: "/remote-team-collaboration-guide.png",
    featured: false,
  },
  {
    id: "api-integration-tutorial",
    title: "How to Integrate Third-Party APIs: Step-by-Step Tutorial",
    excerpt:
      "A comprehensive tutorial on integrating external APIs into your workflow, with practical examples and best practices.",
    category: "Tutorials",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "12 min read",
    image: "/api-integration-tutorial.png",
    featured: false,
  },
  {
    id: "company-milestone-10k-users",
    title: "Celebrating 10,000 Users: Our Journey and What's Next",
    excerpt:
      "Reflecting on our growth journey, celebrating our community, and sharing exciting plans for the future of our platform.",
    category: "Company News",
    author: "Sarah Johnson",
    date: "2024-01-03",
    readTime: "5 min read",
    image: "/company-milestone-10k-users.png",
    featured: false,
  },
]

const resources = [
  {
    title: "Workflow Optimization Checklist",
    description: "A comprehensive checklist to audit and optimize your business workflows",
    type: "PDF Guide",
    downloadUrl: "#",
    image: "/workflow-optimization-checklist.png",
  },
  {
    title: "SaaS Metrics Dashboard Template",
    description: "Track key performance indicators with our ready-to-use dashboard template",
    type: "Excel Template",
    downloadUrl: "#",
    image: "/saas-metrics-dashboard-template.png",
  },
  {
    title: "Remote Team Management Playbook",
    description: "Best practices and frameworks for managing distributed teams effectively",
    type: "PDF Guide",
    downloadUrl: "#",
    image: "/remote-team-management-playbook.png",
  },
  {
    title: "API Integration Starter Kit",
    description: "Code samples and documentation to help you integrate with popular APIs",
    type: "Code Package",
    downloadUrl: "#",
    image: "/api-integration-starter-kit.png",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Blog & Resources</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">
              Insights, Tips, and <span className="text-blue-600">Resources</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Stay updated with the latest industry insights, product updates, and best practices to help your business
              thrive.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10 bg-white border-slate-200" />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
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

        {/* Featured Article */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-heading font-black text-2xl text-slate-800 mb-2">Featured Article</h2>
              <p className="text-slate-600">Our latest and most popular content</p>
            </div>

            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Card key={post.id} className="border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-square">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit">{post.category}</Badge>
                      <h3 className="font-heading font-black text-2xl md:text-3xl text-slate-800 mb-4">{post.title}</h3>
                      <p className="text-slate-600 mb-6 text-lg">{post.excerpt}</p>

                      <div className="flex items-center text-sm text-slate-500 mb-6">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-heading font-black text-2xl text-slate-800 mb-2">Recent Articles</h2>
              <p className="text-slate-600">Latest insights and updates from our team</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Card key={post.id} className="border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit text-xs">
                        {post.category}
                      </Badge>
                      <h3 className="font-heading font-bold text-lg text-slate-800 line-clamp-2">{post.title}</h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center text-xs text-slate-500 mb-4">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
                        >
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">Free Resources</h2>
              <p className="text-xl text-slate-600">
                Download our free guides, templates, and tools to help your business succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-square">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                      {resource.type}
                    </Badge>
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{resource.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{resource.description}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights, tips, and resources delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1 bg-white border-white" />
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
