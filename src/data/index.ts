import productsData from "./products.json";
import servicesData from "./services.json";
import type { Product } from "@/types/product";
import type { Service } from "@/types/service";

export const products: Product[] = productsData as Product[];
export const services: Service[] = servicesData as Service[];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(
    (s) => s.category.toLowerCase() === category.toLowerCase()
  );
}
