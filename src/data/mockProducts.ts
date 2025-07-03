import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: 'product1',
    name: 'Electric Car',
    description: 'Eco-friendly electric vehicle.',
    image: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg',
    price: 35000,
    rating: 4.5,
    customer_views:50000,
  },
  {
    id: 'product2',
    name: 'Hybrid SUV',
    description: 'Spacious hybrid SUV.',
    image: 'https://images.pexels.com/photos/13733818/pexels-photo-13733818.jpeg',
    price: 42000,
    rating: 4.2,
    customer_views:655000,
  },
  {
    id: 'product3',
    name: 'Compact Car',
    description: 'Affordable compact city car.',
    image: 'https://images.pexels.com/photos/32821755/pexels-photo-32821755.jpeg',
    price: 18000,
    rating: 4.0,
    customer_views:505250,
  },
  {
    id: 'product4',
    name: 'Bikes',
    description: 'Affordable compact Bike.',
    image: 'https://images.pexels.com/photos/32821755/pexels-photo-32821755.jpeg',
    price: 18000,
    rating: 4.0,
    customer_views:565500,
  },
];