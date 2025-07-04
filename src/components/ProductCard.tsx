import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/product';
import { JSX } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps):JSX.Element => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/products/${product.id}`)}>
        <CardMedia component="img" height="240" image={product.image} alt={product.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            ₹{product.price} | ⭐ {product.rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            👁️ {product.customer_views.toLocaleString()} views
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;