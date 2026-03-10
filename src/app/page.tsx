import Link from "next/link";
import { products } from "@/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Section } from "@/components/layout/Section";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <Section className="home-hero">
        <div className="container text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            AK Essentials
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Local products for your region. Fresh, authentic, and delivered with
            care.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
            <WhatsAppLink label="Order via WhatsApp" variant="outline" />
          </div>
        </div>
      </Section>

      <Section className="home-products">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square bg-muted" />
              <CardHeader>
                <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <span className="font-medium">
                  ₹{product.price.toLocaleString()}
                </span>
                <Button asChild size="sm">
                  <Link href={`/products/${product.slug}`}>View</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/products">View all products</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
