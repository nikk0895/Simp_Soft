import React from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

const Products: React.FC = () => {
  const { products, loading } = useProducts();

  if (loading) return <CircularProgress />;

  return (
    <div style={{ padding: 16 }}>
      <Typography variant="h4" gutterBottom>Products</Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {products.map(product => (
          <Box key={product.id} flex="1 1 300px" minWidth={275} maxWidth={400}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Products;