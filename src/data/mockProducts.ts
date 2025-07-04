import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: 'product1',
    name: 'Hatchback',
    description: 'Compact, rear liftgate, versatile cargo',
    image: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0Y2hiYWNrfGVufDB8fDB8fHww',
    price: 35000,
    rating: 4.5,
    customer_views:50000,
  },
  {
    id: 'product2',
    name: 'Sedan',
    description: 'Four-door, separate trunk, classic car',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VkYW58ZW58MHx8MHx8fDA%3D',
    price: 42000,
    rating: 4.2,
    customer_views:655000,
  },
  {
    id: 'product3',
    name: 'SUV (Sport Utility Vehicle)',
    description: 'High ground clearance, all-terrain capability.',
    image: 'https://images.unsplash.com/photo-1615063029891-497bebd4f03c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3V2fGVufDB8fDB8fHww',
    price: 18000,
    rating: 4.0,
    customer_views:505250,
  },
  {
    id: 'product4',
    name: 'MUV (Multi Utility Vehicle) ',
    description: 'Multi-purpose, family-friendly, flexible seating.',
    image: 'https://images.unsplash.com/photo-1694059812161-a36a20c14c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1dnxlbnwwfHwwfHx8MA%3D%3D',
    price: 18000,
    rating: 4.0,
    customer_views:565500,
  },
];