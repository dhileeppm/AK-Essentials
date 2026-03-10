"use client";

import { useState } from "react";
import Link from "next/link";
import { CartButton } from "@/components/CartButton";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between max-w-6xl mx-auto px-1">
        <Link href="/" className="font-semibold text-lg">
          AK Essentials
        </Link>
        <div className="flex items-center gap-3">
          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-primary transition-colors hover:text-primary/90"
              >
                {label}
              </Link>
            ))}
            <Link href="/cart">
              <CartButton size="icon" />
            </Link>
            <WhatsAppLink />
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/cart">
              <CartButton size="icon" />
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="sr-only">Toggle navigation menu</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {isMenuOpen && (
        <div className="border-b bg-background md:hidden">
          <div className="container max-w-6xl mx-auto flex flex-col gap-2 py-3">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-primary transition-colors hover:text-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3">
              <WhatsAppLink />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
