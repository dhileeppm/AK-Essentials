import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/data";
import { AddToCartButton } from "./AddToCartButton";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Section } from "@/components/layout/Section";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <Section className="product-details-page">
      <Link
        href="/products"
        className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
      >
        ← Back to products
      </Link>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square bg-muted rounded-lg" />
        <div>
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h1 className="text-2xl font-semibold mt-1">{product.name}</h1>
          <p className="text-3xl font-medium mt-2">
            ₹{product.price.toLocaleString()}
          </p>
          <p className="text-muted-foreground mt-4">{product.description}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <AddToCartButton product={product} />
            <WhatsAppLink
              message={`Hi, I'd like to order: ${product.name} (₹${product.price})`}
              label="Order on WhatsApp"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
