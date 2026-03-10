export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  region: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
