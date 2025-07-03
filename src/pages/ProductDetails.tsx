import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Typography, Box } from '@mui/material';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products } = useProducts();
  const product = products.find(p => p.id === productId);

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4">{product.name}</Typography>
      <img src={product.image} alt={product.name} width="300" height="200" style={{ borderRadius: 8, marginTop: 16 }} />
      <Typography variant="body1" mt={2}>{product.description}</Typography>
      <Typography variant="subtitle1" mt={1}>Price: ₹{product.price}</Typography>
      <Typography variant="subtitle2">Rating: ⭐ {product.rating}</Typography>
    </Box>
  );
};

export default ProductDetails;