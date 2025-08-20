"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "./button";

export default function Categories({
  categories,
}: {
  categories: (
    | { name: string | null; slug: string | null }
    | null
    | undefined
  )[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <section className="py-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {[{ name: "All", slug: null }, ...categories].map(
            (category, index) => {
              return (
                <Link
                  key={index}
                  href={`${pathname}${category?.slug ? `?tag=${category?.slug}` : ""}`}
                  scroll={false}
                >
                  <Button
                    variant={
                      searchParams.get("tag") === category?.slug
                        ? "default"
                        : "outline"
                    }
                    className={
                      searchParams.get("tag") === category?.slug
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50 bg-transparent"
                    }
                  >
                    {category?.name}
                  </Button>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
