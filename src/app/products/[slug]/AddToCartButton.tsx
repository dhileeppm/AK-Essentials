"use client";

import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <Button onClick={() => addItem(product)}>Add to cart</Button>
  );
}
