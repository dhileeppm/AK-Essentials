import Link from "next/link";
import { products } from "@/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/layout/Section";

export default function ProductsPage() {
  return (
    <Section className="services-grid">
      <h1 className="text-2xl font-semibold mb-2">Products</h1>
      <p className="text-muted-foreground mb-8">
        Local products available in your region.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col">
            <div className="aspect-square bg-muted" />
            <CardHeader>
              <CardTitle className="line-clamp-1">{product.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center mt-auto">
              {/* <span className="font-medium">
                ₹{product.price.toLocaleString()}
              </span> */}
              <Button asChild size="xs" className="w-[100%]">
                <Link href={`/products/${product.slug}`}>View details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
