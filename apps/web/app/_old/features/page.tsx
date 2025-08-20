import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Smartphone,
  Database,
  Globe,
  Workflow,
  Lock,
  Headphones,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const mainFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Experience blazing-fast load times and real-time data processing that scales with your business growth.",
    benefits: [
      "Sub-second response times",
      "Auto-scaling infrastructure",
      "Global CDN distribution",
      "99.9% uptime guarantee",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Protect your data with military-grade encryption and comprehensive security protocols.",
    benefits: [
      "End-to-end encryption",
      "SOC 2 Type II compliance",
      "Regular security audits",
      "Advanced threat detection",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Reporting",
    description:
      "Make data-driven decisions with comprehensive analytics and customizable reporting tools.",
    benefits: [
      "Real-time dashboards",
      "Custom report builder",
      "Predictive analytics",
      "Data export capabilities",
    ],
  },
  {
    icon: Users,
    title: "Team Collaboration Tools",
    description:
      "Empower your team with seamless collaboration features designed for modern workflows.",
    benefits: [
      "Real-time collaboration",
      "Role-based permissions",
      "Activity tracking",
      "Team communication hub",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Streamline your processes with powerful automation tools that eliminate repetitive tasks.",
    benefits: [
      "Visual workflow builder",
      "Trigger-based automation",
      "Integration with 500+ apps",
      "Custom scripting support",
    ],
  },
  {
    icon: Database,
    title: "Robust Data Management",
    description:
      "Organize, store, and access your data efficiently with our advanced data management system.",
    benefits: [
      "Unlimited data storage",
      "Advanced search capabilities",
      "Data backup & recovery",
      "API access",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Available in 25+ languages",
  },
  {
    icon: Lock,
    title: "Single Sign-On (SSO)",
    description: "Seamless integration with your existing systems",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance when you need it",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native iOS and Android apps",
  },
  {
    icon: Rocket,
    title: "Regular Updates",
    description: "New features and improvements every month",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Features
            </Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">
              Powerful Features for{" "}
              <span className="text-blue-600">Modern Businesses</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Discover cutting-edge tools designed to streamline your workflow
              and enhance productivity. Everything you need to transform your
              business operations.
            </p>
            <Link href="/trial">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {mainFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="font-heading font-bold text-2xl text-slate-800">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-slate-800 mb-4">
                And Much More
              </h2>
              <p className="text-xl text-slate-600">
                Additional features to enhance your experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust us to power their
              success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trial">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-slate-50"
                >
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
  );
}
