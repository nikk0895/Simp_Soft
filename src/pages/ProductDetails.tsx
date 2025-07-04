import React, { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Typography, Box, Paper } from '@mui/material';

const ProductDetails = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const { products } = useProducts();
  const product = products.find(p => p.id === productId);

  if (!product) return <Typography>Product not found</Typography>;

  // Example extra details for Hatchback (customize for each product as needed)
  const extraDetails: Record<string, React.ReactNode> = {
    Hatchback: (
      <>
        <Typography variant="h6" sx={{ mt: 3 }}>Overview</Typography>
        <Typography variant="body2" color="text.secondary">
          Compact, fuel-efficient, ideal for city driving. Dominate the entry-level market, though sales have recently seen a decline.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Price Range (Ex-showroom):</strong> Approx. ₹4.2 Lakh - ₹11.5 Lakh.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Top Models:</strong> Maruti Swift, Baleno, Tata Altroz, Tiago, Hyundai Grand i10 Nios.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Safety (Bharat NCAP):</strong> Maruti Dzire (5-star, though a sedan, it shares platform/safety tech with hatchbacks), Maruti Baleno (4-star).
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Sales Trend (June 2025):</strong> Small car segment facing a sharp decline, indicating affordability issues.
        </Typography>
      </>
    ),
    Sedan: (
      <>
        <Typography variant="h6" sx={{ mt: 3 }}>Overview</Typography>
        <Typography variant="body2" color="text.secondary">
          Offer more boot space and often better ride comfort than hatchbacks.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Price Range (Ex-showroom):</strong> Compact Sedans approx. ₹6.5 Lakh - ₹10.2 Lakh; Mid-size Sedans approx. ₹10.5 Lakh - ₹19.4 Lakh.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Top Models:</strong> Maruti Dzire, Hyundai Verna, Honda City, VW Virtus, Skoda Slavia.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Safety (Bharat NCAP):</strong> Maruti Dzire (5-star), VW Virtus (5-star), Skoda Slavia (5-star), Hyundai Verna (5-star).
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Sales Trend (June 2025):</strong> Maruti's mid-size sedan segment (Ciaz) saw positive growth, contrasting with overall market softness.
        </Typography>
      </>
    ),
    "SUV (Sport Utility Vehicle)": (
      <>
        <Typography variant="h6" sx={{ mt: 3 }}>Overview</Typography>
        <Typography variant="body2" color="text.secondary">
          High demand segment, offering commanding road presence, higher ground clearance, and often more features. Diverse range from compact to full-size.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Price Range (Ex-showroom):</strong> Compact SUVs approx. ₹6.1 Lakh - ₹21.5 Lakh; Larger SUVs can go much higher.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Top Models:</strong> Hyundai Creta, Kia Seltos, Mahindra XUV700, Scorpio N, Tata Nexon, Punch, Harrier.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Safety (Bharat NCAP):</strong> Many top performers with 5-star ratings (e.g., Tata Harrier EV, Nexon EV, Mahindra XUV 3XO, Scorpio N, XUV700, Skoda Kushaq, VW Taigun).
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Sales Trend (June 2025):</strong> SUV segment continues to be a bright spot, with Mahindra and Toyota showing growth, partly due to strong SUV sales.
        </Typography>
      </>
    ),
    "MUV (Multi Utility Vehicle) ": (
      <>
        <Typography variant="h6" sx={{ mt: 3 }}>Overview</Typography>
        <Typography variant="body2" color="text.secondary">
          Designed for passenger capacity, offering flexible seating and spacious interiors, popular for larger families or commercial use.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Price Range (Ex-showroom):</strong> Approx. ₹6.1 Lakh - ₹32.6 Lakh (ranging from compact to premium models).
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Top Models:</strong> Maruti Ertiga, XL6, Toyota Innova Crysta, Innova Hycross, Kia Carens, Renault Triber.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Safety (Bharat NCAP):</strong> Toyota Innova Hycross (5-star).
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Sales Trend (June 2025):</strong> Generally stable, with new launches and hybrid options like the Innova Hycross attracting interest.
        </Typography>
      </>
    ),
  };

  return (
    <Box p={3} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} alignItems="flex-start">
      <Box flexShrink={0}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: 400,
            height: 280,
            objectFit: 'cover',
            borderRadius: 12,
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}
        />
      </Box>
      <Paper elevation={2} sx={{ p: 3, flex: 1, minWidth: 280 }}>
        <Typography variant="h4" gutterBottom>{product.name}</Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {product.description}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Price:</strong> ₹{product.price}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Rating:</strong> ⭐ {product.rating}
        </Typography>
        {product.customer_views !== undefined && (
          <Typography variant="subtitle2" sx={{ mt: 1 }}>
            <strong>Customer Views:</strong> {product.customer_views.toLocaleString()}
          </Typography>
        )}
        {/* More product fields/info */}
        {extraDetails[product.name] && (
          <Box sx={{ mt: 3 }}>
            {extraDetails[product.name]}
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ProductDetails;