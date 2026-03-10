"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
const DEFAULT_MESSAGE = "Hi, I'm interested in your local products.";

function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || DEFAULT_MESSAGE);
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${text}`;
}

interface WhatsAppLinkProps {
  message?: string;
  label?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const iconColor: Record<NonNullable<WhatsAppLinkProps["variant"]>, string> = {
  default: "text-primary-foreground",
  outline: "text-primary",
  secondary: "text-secondary-foreground",
  ghost: "text-primary",
  link: "text-primary",
  destructive: "text-white",
};

export function WhatsAppLink({
  message,
  label = "Chat on WhatsApp",
  variant = "default",
  size = "default",
  className,
}: WhatsAppLinkProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
    >
      <MessageCircle className={cn("size-2", iconColor[variant])} />
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp"
      >
        {label}
      </a>
    </Button>
  );
}
