export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  customer_views: number; // Changed from 'customer views' to 'customer_views' for consistency
}
