import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Legal</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">Terms of Service</h1>
            <p className="text-xl text-slate-600 mb-4">Last updated: January 15, 2024</p>
            <p className="text-lg text-slate-600">
              These terms govern your use of SaaSify and our services. Please read them carefully.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using SaaSify ("Service"), you agree to be bound by these Terms of Service ("Terms"). If
                you disagree with any part of these terms, you may not access the Service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                SaaSify is a workflow automation platform that helps businesses streamline their operations through
                integrations, automation, and collaboration tools.
              </p>

              <h2>3. User Accounts</h2>
              <p>To use our Service, you must:</p>
              <ul>
                <li>Create an account with accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h2>4. Acceptable Use</h2>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious code</li>
                <li>Interfere with the Service's operation</li>
                <li>Access other users' accounts without permission</li>
                <li>Use the Service for competitive analysis</li>
              </ul>

              <h2>5. Subscription and Payment</h2>
              <h3>Free Trial</h3>
              <p>We offer a 14-day free trial for new users. No payment information is required to start your trial.</p>

              <h3>Paid Subscriptions</h3>
              <ul>
                <li>Subscriptions are billed monthly or annually in advance</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We may change pricing with 30 days' notice</li>
                <li>You can cancel your subscription at any time</li>
              </ul>

              <h2>6. Data and Privacy</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                information. By using our Service, you consent to our data practices as described in our Privacy Policy.
              </p>

              <h2>7. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by SaaSify and are protected
                by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2>8. User Content</h2>
              <p>
                You retain ownership of content you submit to the Service. By submitting content, you grant us a
                worldwide, non-exclusive license to use, modify, and distribute your content as necessary to provide the
                Service.
              </p>

              <h2>9. Service Availability</h2>
              <p>
                We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. We may temporarily
                suspend the Service for maintenance or updates.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, SaaSify shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of the Service.
              </p>

              <h2>11. Indemnification</h2>
              <p>
                You agree to indemnify and hold SaaSify harmless from any claims, damages, or expenses arising from your
                use of the Service or violation of these Terms.
              </p>

              <h2>12. Termination</h2>
              <p>
                We may terminate or suspend your account immediately if you breach these Terms. Upon termination, your
                right to use the Service will cease immediately.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of significant changes via
                email or through the Service.
              </p>

              <h2>14. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of California, without regard to conflict of law
                principles.
              </p>

              <h2>15. Contact Information</h2>
              <p>
                If you have questions about these Terms, please contact us at:
                <br />
                Email: legal@saasify.com
                <br />
                Address: 123 Business Ave, Suite 100, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
