"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Section } from "@/components/layout/Section";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalAmount } =
    useCartStore();

  if (items.length === 0) {
    return (
      <Section className="cart-empty-page text-center">
        <h1 className="text-2xl font-semibold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">
          Add some local products from our store.
        </p>
        <Button asChild>
          <Link href="/products">Browse products</Link>
        </Button>
      </Section>
    );
  }

  return (
    <Section className="cart-page max-w-4xl">
      <h1 className="text-2xl font-semibold mb-6">Cart ({totalItems()} items)</h1>
      <ul className="space-y-4 mb-8">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-wrap items-center justify-between gap-4 border-b pb-4"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                ₹{item.price.toLocaleString()} × {item.quantity}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                −
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(item.id)}
                className="text-destructive"
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <p className="text-lg font-medium">
          Total: ₹{totalAmount().toLocaleString()}
        </p>
        <div className="flex gap-3">
          <Button asChild variant="outline">
            <Link href="/products">Continue shopping</Link>
          </Button>
          <WhatsAppLink
            message={`I'd like to order:\n${items.map((i) => `${i.name} x ${i.quantity} = ₹${i.price * i.quantity}`).join("\n")}\nTotal: ₹${totalAmount()}`}
            label="Order on WhatsApp"
          />
        </div>
      </div>
    </Section>
  );
}
