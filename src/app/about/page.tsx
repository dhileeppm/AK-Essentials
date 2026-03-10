import { Section } from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <Section className="about-page">
      <h1 className="text-2xl font-semibold mb-4">About Us</h1>
      <div className="prose prose-neutral dark:prose-invert text-muted-foreground space-y-4">
        <p>
          AK Essentials brings you the best local products from your region. We work
          directly with local producers and artisans to offer authentic, sustainable
          goods—from food and spices to handicrafts and home essentials.
        </p>
        <p>
          Our mission is to support local economies and make it easy for you to
          discover and order regional products. Every purchase helps sustain
          traditional practices and local livelihoods.
        </p>
        <p>
          Have questions or want to partner with us? Reach out via our{" "}
          <a href="/contact" className="text-foreground underline">
            Contact
          </a>{" "}
          page or WhatsApp.
        </p>
      </div>
    </Section>
  );
}
