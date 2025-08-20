import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPost = {
  id: "workflow-automation-guide",
  title: "The Complete Guide to Workflow Automation in 2024",
  excerpt:
    "Discover how to streamline your business processes and boost productivity with modern workflow automation tools and strategies.",
  category: "Best Practices",
  author: "Sarah Johnson",
  date: "2024-01-15",
  readTime: "8 min read",
  image: "/workflow-automation-guide-hero.png",
  content: `
    <p>In today's fast-paced business environment, workflow automation has become essential for companies looking to stay competitive and efficient. This comprehensive guide will walk you through everything you need to know about implementing workflow automation in your organization.</p>

    <h2>What is Workflow Automation?</h2>
    <p>Workflow automation is the process of using technology to streamline and automate repetitive business processes. By eliminating manual tasks and reducing human error, organizations can significantly improve efficiency and productivity.</p>

    <h2>Benefits of Workflow Automation</h2>
    <ul>
      <li><strong>Increased Efficiency:</strong> Automated workflows can complete tasks faster than manual processes</li>
      <li><strong>Reduced Errors:</strong> Automation eliminates human error in repetitive tasks</li>
      <li><strong>Cost Savings:</strong> Less time spent on manual tasks means lower operational costs</li>
      <li><strong>Better Compliance:</strong> Automated workflows ensure consistent adherence to policies</li>
      <li><strong>Improved Employee Satisfaction:</strong> Staff can focus on more strategic, creative work</li>
    </ul>

    <h2>Getting Started with Workflow Automation</h2>
    <p>The key to successful workflow automation is starting with the right processes. Look for tasks that are:</p>
    <ul>
      <li>Repetitive and rule-based</li>
      <li>Time-consuming</li>
      <li>Prone to human error</li>
      <li>Well-documented with clear steps</li>
    </ul>

    <h2>Best Practices for Implementation</h2>
    <p>When implementing workflow automation, consider these best practices:</p>
    <ol>
      <li><strong>Start Small:</strong> Begin with simple, low-risk processes</li>
      <li><strong>Map Your Processes:</strong> Document current workflows before automating</li>
      <li><strong>Choose the Right Tools:</strong> Select automation tools that integrate with your existing systems</li>
      <li><strong>Train Your Team:</strong> Ensure staff understand the new automated processes</li>
      <li><strong>Monitor and Optimize:</strong> Continuously review and improve your automated workflows</li>
    </ol>

    <h2>Common Workflow Automation Use Cases</h2>
    <p>Here are some popular areas where workflow automation can make a significant impact:</p>
    <ul>
      <li>Customer onboarding and support</li>
      <li>Invoice processing and approval</li>
      <li>Employee onboarding and HR processes</li>
      <li>Marketing campaign management</li>
      <li>Data entry and reporting</li>
      <li>Quality assurance and testing</li>
    </ul>

    <h2>Measuring Success</h2>
    <p>To ensure your workflow automation efforts are successful, track these key metrics:</p>
    <ul>
      <li>Time saved per process</li>
      <li>Error reduction rates</li>
      <li>Cost savings achieved</li>
      <li>Employee satisfaction scores</li>
      <li>Process completion times</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Workflow automation is no longer a luxury—it's a necessity for businesses that want to remain competitive. By following the strategies and best practices outlined in this guide, you can successfully implement automation in your organization and reap the benefits of increased efficiency, reduced costs, and improved employee satisfaction.</p>

    <p>Ready to get started with workflow automation? Our platform makes it easy to automate your business processes without any coding required. <a href="/trial">Start your free trial today</a> and see how automation can transform your business.</p>
  `,
}

const relatedPosts = [
  {
    id: "remote-team-collaboration",
    title: "Building High-Performance Remote Teams",
    image: "/remote-team-collaboration-guide.png",
  },
  {
    id: "saas-security-best-practices",
    title: "10 Essential Security Best Practices",
    image: "/saas-security-best-practices.png",
  },
  {
    id: "api-integration-tutorial",
    title: "How to Integrate Third-Party APIs",
    image: "/api-integration-tutorial.png",
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Article Header */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog">
              <Button
                variant="outline"
                className="mb-8 border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{blogPost.category}</Badge>
            <h1 className="font-heading font-black text-3xl md:text-5xl text-slate-800 mb-6">{blogPost.title}</h1>

            <div className="flex items-center text-slate-600 mb-8">
              <User className="h-4 w-4 mr-2" />
              <span className="mr-6">{blogPost.author}</span>
              <Calendar className="h-4 w-4 mr-2" />
              <span className="mr-6">{new Date(blogPost.date).toLocaleDateString()}</span>
              <Clock className="h-4 w-4 mr-2" />
              <span>{blogPost.readTime}</span>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-black text-2xl text-slate-800 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-4">{post.title}</h3>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
                      >
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and see how our platform can transform your business processes.
            </p>
            <Link href="/trial">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
