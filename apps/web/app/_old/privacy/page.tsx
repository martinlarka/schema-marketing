import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Legal</Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-800 mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-600 mb-4">Last updated: January 15, 2024</p>
            <p className="text-lg text-slate-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, use our services,
                or contact us for support.
              </p>

              <h3>Personal Information</h3>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Company information (company name, size, industry)</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3>Usage Information</h3>
              <ul>
                <li>How you interact with our services</li>
                <li>Features you use and frequency of use</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Log data (access times, pages viewed, errors encountered)</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who assist us in operating our business</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>

              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the
                purposes outlined in this policy, unless a longer retention period is required by law.
              </p>

              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>

              <h2>7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to collect and use personal information about you. You
                can control cookies through your browser settings.
              </p>

              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your information.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not knowingly collect personal information
                from children under 13.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at:
                <br />
                Email: privacy@saasify.com
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
