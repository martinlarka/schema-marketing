import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

import { Navigation, NavigationPagesFragment } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { graphql, query } from "@/lib/graphql";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Transform Your Business | Innovative SaaS Solutions",
  description:
    "Discover cutting-edge tools designed to streamline your workflow and enhance productivity. Start your free trial today.",
  generator: "v0.app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pages } = await query(LAYOUT_QUERY, {});

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body className="font-sans">
        <div className="min-h-screen">
          <Navigation pages={pages} />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

const LAYOUT_QUERY = graphql(
  /* GraphQL */ `
    query LayoutQuery {
      pages(sort: ["createdAt:asc"]) {
        name
        slug
      }
    }
  `,
  []
);
