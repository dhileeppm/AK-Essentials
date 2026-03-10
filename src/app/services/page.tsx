import Link from "next/link";
import { services } from "@/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/layout/Section";

export default function ServicesPage() {
  return (
    <Section className="services-grid">
      <h1 className="text-2xl font-semibold mb-2">Services</h1>
      <p className="text-muted-foreground mb-8">
        Healthcare, home care, travel, and more—all available in your region.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden flex flex-col">
            {/* TODO - Replace with Image */}
            <div className="aspect-square bg-muted" />
            <CardHeader>
              <CardTitle className="line-clamp-1 pb-1">{service.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center mt-auto">
              <span className="font-medium text-sm text-muted-foreground">
                Contact for pricing
              </span>
              <Button asChild size="sm">
                <Link href={`/services/${service.slug}`}>View details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
