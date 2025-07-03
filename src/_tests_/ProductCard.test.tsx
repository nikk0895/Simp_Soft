import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

const product: Product = {
  id: 'product1',
  name: 'Electric Car',
  description: 'Eco-friendly electric vehicle.',
  image: 'https://via.placeholder.com/150',
  price: 35000,
  rating: 4.5,
  customer_views: 50000,
};

test('renders ProductCard with product info', () => {
  render(
    <BrowserRouter>
      <ProductCard product={product} />
    </BrowserRouter>
  );

  expect(screen.getByText('Electric Car')).toBeInTheDocument();
  expect(screen.getByText('Eco-friendly electric vehicle.')).toBeInTheDocument();
  expect(screen.getByText(/₹35000/i)).toBeInTheDocument();
  expect(screen.getByText(/⭐ 4.5/i)).toBeInTheDocument();
  expect(screen.getByText(/50,000 views/i)).toBeInTheDocument();
});