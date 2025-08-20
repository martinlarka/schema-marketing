import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for individuals and small teams getting started",
    features: [
      { name: "Up to 5 team members", included: true },
      { name: "10GB storage", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Mobile apps", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Priority support", included: false },
      { name: "Custom integrations", included: false },
      { name: "SSO authentication", included: false },
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "per user/month",
    description: "Ideal for growing teams that need advanced features",
    features: [
      { name: "Up to 50 team members", included: true },
      { name: "100GB storage", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority email support", included: true },
      { name: "Mobile apps", included: true },
      { name: "Workflow automation", included: true },
      { name: "Custom integrations", included: true },
      { name: "SSO authentication", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations with specific requirements",
    features: [
      { name: "Unlimited team members", included: true },
      { name: "Unlimited storage", included: true },
      { name: "Advanced analytics", included: true },
      { name: "24/7 phone & email support", included: true },
      { name: "Mobile apps", included: true },
      { name: "Workflow automation", included: true },
      { name: "Custom integrations", included: true },
      { name: "SSO authentication", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for our Professional plan. No credit card required to get started.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, save 20% when you choose annual billing on any paid plan.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Pricing</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">
              Flexible Plans Tailored to <span className="text-blue-600">Your Needs</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Start with a free trial today. Flexible plans that grow with your business. No hidden fees, cancel
              anytime.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative border-2 ${
                    plan.popular ? "border-blue-600 shadow-lg scale-105" : "border-slate-200"
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="font-heading font-bold text-2xl text-slate-800 mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="font-heading font-black text-4xl text-slate-800">{plan.price}</span>
                      {plan.price !== "Custom" && plan.price !== "Free" && (
                        <span className="text-slate-600 ml-1">/{plan.period}</span>
                      )}
                      {plan.price === "Free" && <span className="text-slate-600 ml-1">{plan.period}</span>}
                      {plan.price === "Custom" && <span className="text-slate-600 ml-1">- {plan.period}</span>}
                    </div>
                    <p className="text-slate-600">{plan.description}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-slate-700" : "text-slate-400"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={plan.name === "Enterprise" ? "/contact" : "/trial"}>
                      <Button
                        className={`w-full ${
                          plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-700"
                        }`}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
              <p className="text-xl text-slate-600">Everything you need to know about our pricing</p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already transforming their operations with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trial">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 bg-transparent"
                >
                  Contact Sales
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
