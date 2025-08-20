import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="font-heading font-black text-xl">SaaSify</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Transform your business with innovative solutions designed to streamline workflows and enhance
              productivity.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-slate-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-slate-300 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-slate-300 hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 SaaSify. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
