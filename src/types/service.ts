export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  price?: number;
  priceNote?: string;
  currency: string;
  image: string;
  category: string;
  available: boolean;
}
