"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation({
  pages,
}: {
  pages: ({ name: string; slug: string | null } | null)[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className="font-heading font-black text-xl text-slate-800">
              SaaSify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((item) => (
              <Link
                key={item?.slug}
                href={item?.slug === "home" ? "/" : String(item?.slug)}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item?.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/demo">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Schedule Demo
              </Button>
            </Link>
            <Link href="/trial">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {pages.map((item) => (
                <Link
                  key={item?.slug}
                  href={item?.slug === "home" ? "/" : String(item?.slug)}
                  className="text-slate-600 hover:text-blue-600 font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item?.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-slate-200">
                <Link href="/demo">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Schedule Demo
                  </Button>
                </Link>
                <Link href="/trial">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
