import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Zap, Shield, Users, BarChart3, Clock, CreditCard, Smartphone } from "lucide-react"
import Link from "next/link"

const trialFeatures = [
  {
    icon: Zap,
    title: "Full Feature Access",
    description: "Access all premium features during your 14-day trial",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite up to 10 team members to collaborate",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get insights with our comprehensive reporting tools",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data is protected with bank-level security",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Access your workflows on iOS and Android",
  },
  {
    icon: CreditCard,
    title: "No Credit Card",
    description: "Start your trial without any payment information",
  },
]

const trialBenefits = [
  "14 days of full access to all features",
  "Unlimited workflows and automations",
  "Up to 10 team members included",
  "24/7 customer support",
  "Access to all integrations",
  "Mobile apps for iOS and Android",
  "No setup fees or hidden costs",
  "Cancel anytime, no questions asked",
]

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your account in less than 2 minutes",
  },
  {
    number: "2",
    title: "Set Up",
    description: "Follow our guided onboarding to configure your workspace",
  },
  {
    number: "3",
    title: "Explore",
    description: "Try all features and see how SaaSify transforms your workflow",
  },
]

const stats = [
  { number: "14 Days", label: "Free Trial" },
  { number: "No Setup", label: "Fees" },
  { number: "2 Minutes", label: "To Get Started" },
  { number: "24/7", label: "Support Included" },
]

export default function TrialPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Free Trial</Badge>
                <h1 className="font-heading font-black text-4xl md:text-5xl text-slate-800 mb-6">
                  Start Your <span className="text-blue-600">14-Day Free Trial</span> Today
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Experience the full power of SaaSify with no commitment. Get instant access to all features, invite
                  your team, and see how we can transform your business operations.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="font-heading font-black text-2xl text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-green-600 mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">No credit card required</span>
                </div>
              </div>

              {/* Trial Signup Form */}
              <Card className="border-slate-200 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="font-heading font-black text-2xl text-slate-800">
                    Start Your Free Trial
                  </CardTitle>
                  <p className="text-slate-600">Join thousands of businesses already using SaaSify</p>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Work Email *</label>
                      <Input type="email" placeholder="Enter your work email" className="border-slate-200" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                        <Input placeholder="First name" className="border-slate-200" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                        <Input placeholder="Last name" className="border-slate-200" />
                      </div>
                    </div>

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

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Password *</label>
                      <Input type="password" placeholder="Create a secure password" className="border-slate-200" />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      Start My Free Trial
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By signing up, you agree to our{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                Everything Included in Your Trial
              </h2>
              <p className="text-xl text-slate-600">
                Get full access to all premium features for 14 days, completely free
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trialFeatures.map((feature, index) => (
                <Card key={index} className="border-slate-200 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">How It Works</h2>
              <p className="text-xl text-slate-600">Get started in just 3 simple steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-black text-2xl text-white">{step.number}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trial Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                Why Start Your Free Trial?
              </h2>
              <p className="text-xl text-slate-600">See for yourself why thousands of businesses choose SaaSify</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trialBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
                    Do I need a credit card to start my trial?
                  </h3>
                  <p className="text-slate-600">
                    No! You can start your 14-day free trial without providing any payment information. We'll only ask
                    for billing details if you decide to continue after your trial ends.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
                    What happens when my trial ends?
                  </h3>
                  <p className="text-slate-600">
                    Your trial will automatically expire after 14 days. You can choose to upgrade to a paid plan to
                    continue using SaaSify, or your account will be paused until you're ready to subscribe.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">Can I cancel my trial anytime?</h3>
                  <p className="text-slate-600">
                    You can cancel your trial at any time with no questions asked. There are no cancellation fees or
                    penalties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Clock className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses that have already discovered the power of SaaSify. Start your free trial
              today.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
              Start Your Free Trial Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
