import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, services } from "@/data";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Section } from "@/components/layout/Section";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const priceDisplay =
    service.price != null ? (
      <>
        ₹{service.price.toLocaleString()}
        {service.priceNote && (
          <span className="text-lg font-normal text-muted-foreground">
            {" "}
            {service.priceNote}
          </span>
        )}
      </>
    ) : (
      <span className="text-muted-foreground">Contact for pricing</span>
    );

  return (
    <Section className="service-details-page">
      <Link
        href="/services"
        className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
      >
        ← Back to services
      </Link>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square bg-muted rounded-lg" />
        <div>
          <p className="text-sm text-muted-foreground">{service.category}</p>
          <h1 className="text-2xl font-semibold mt-1">{service.name}</h1>
          <p className="text-2xl font-medium mt-2">{priceDisplay}</p>
          <p className="text-muted-foreground mt-4">{service.description}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <WhatsAppLink
              message={`Hi, I'm interested in ${service.name}. Please share more details.`}
              label="Enquire on WhatsApp"
              variant="default"
            />
            <WhatsAppLink
              message={`Hi, I'd like to book: ${service.name}`}
              label="Book on WhatsApp"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
