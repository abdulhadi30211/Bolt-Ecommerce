export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = 
  | 'all'
  | 'electronics'
  | 'clothing'
  | 'home'
  | 'beauty'
  | 'toys'
  | 'sports';