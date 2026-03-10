"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";

type CartButtonSize = "sm" | "icon";

interface CartButtonProps {
  size?: CartButtonSize;
}

export function CartButton({ size = "sm" }: CartButtonProps) {
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <Button variant="link" size={size} aria-label="Open cart">
      <span className="relative inline-flex">
        <ShoppingCart className="size-3" />
        {totalItems > 0 && (
          <span className="absolute -right-2 -top-2 flex h-3 min-w-[16px] items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold leading-none text-destructive-foreground border border-background text-white">
            {totalItems}
          </span>
        )}
      </span>
      {totalItems > 0 && (
        <span className="sr-only">
          Cart with {totalItems} item{totalItems > 1 ? "s" : ""}
        </span>
      )}
    </Button>
  );
}

