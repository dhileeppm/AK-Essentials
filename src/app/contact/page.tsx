import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <Section className="contact-page max-w-xl">
      <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
      <p className="text-muted-foreground mb-8">
        Get in touch for orders, bulk enquiries, or partnerships.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium block mb-2">
            Name
          </label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium block mb-2">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium block mb-2">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message..."
            rows={4}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          For fastest response, you can also message us directly on WhatsApp.
        </p>
        <div className="flex gap-3">
          <Button type="button" disabled>
            Send message
          </Button>
          <WhatsAppLink label="Chat on WhatsApp" variant="outline" />
        </div>
      </div>
    </Section>
  );
}
