import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-8 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">AK Essentials</p>
            <p className="text-sm text-muted-foreground">
              Local products for your region.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-primary hover:text-primary/90"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Need help?</p>
            <WhatsAppLink />
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AK Essentials. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
