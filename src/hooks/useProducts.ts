import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { mockProducts } from '../data/mockProducts';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setTimeout(() => {
        setProducts(mockProducts);
        setLoading(false);
      }, 500); // Simulate API delay
    };
    fetch();
  }, []);

  return { products, loading };
};