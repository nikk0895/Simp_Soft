import React, { JSX, useState } from 'react';
import { Box, Typography, Button, ButtonGroup } from '@mui/material';
import { useProducts } from '../hooks/useProducts';

// 5 distinct colors for each star rating
function getColor(index: number) {
  switch (index) {
    case 0: return '#e53935'; // 1 star - Poor (Red)
    case 1: return '#fb8c00'; // 2 star - Average (Orange)
    case 2: return '#fdd835'; // 3 star - Good (Yellow)
    case 3: return '#43a047'; // 4 star - Very Good (Green)
    case 4: return '#1e88e5'; // 5 star - Excellent (Blue)
    default: return '#ccc';
  }
}

const renderBars = () => {
  const bars = [];
  for (let i = 0; i < 5; i++) {
    bars.push(
      <Box
        key={i}
        sx={{
          width: '20%',
          height: 20,
          backgroundColor: getColor(i),
          display: 'inline-block',
          borderRight: i < 4 ? '1px solid #fff' : 'none',
        }}
      />
    );
  }
  return bars;
};

const ratingLabels = ['Poor', 'Average', 'Good', 'Very Good', 'Excellent'];
const productTypes = ['Hatchback', 'Sedan', 'SUV (Sport Utility Vehicle)', 'MUV (Multi Utility Vehicle) '];

const Dashboard = (): JSX.Element => {
  const { products } = useProducts();
  const [selectedType, setSelectedType] = useState<string>(productTypes[0]);

  // Filter products by selected type
  const filteredProducts = products.filter(p => p.name === selectedType);

  // Calculate average rating from filtered products
  const avgRating =
    filteredProducts.length > 0
      ? filteredProducts.reduce((sum, p) => sum + p.rating, 0) / filteredProducts.length
      : 0;

  // Map average rating (1-5) to a 0-100% scale for the pointer
  const scaleValue = ((avgRating - 1) / 4) * 100; // 1 maps to 0%, 5 maps to 100%

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Quality Index Dashboard
      </Typography>
      <Box mt={2} mb={2}>
        <ButtonGroup variant="contained" color="primary">
          {productTypes.map(type => (
            <Button
              key={type}
              onClick={() => setSelectedType(type)}
              variant={selectedType === type ? 'contained' : 'outlined'}
            >
              {type.replace(' (Sport Utility Vehicle)', '').replace(' (Multi Utility Vehicle) ', ' MUV')}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box mt={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6">
            {selectedType} Rating
          </Typography>
          <Typography variant="h6">{avgRating > 0 ? avgRating.toFixed(2) : 'N/A'}</Typography>
        </Box>
        <Box position="relative" width="100%">
          <Box display="flex" width="100%">
            {renderBars()}
          </Box>
          <Box
            position="absolute"
            left={`calc(${scaleValue}% - 10px)`}
            top={-10}
            textAlign="center"
          >
            <Typography variant="body2">{avgRating > 0 ? avgRating.toFixed(2) : 'N/A'}</Typography>
            <Box
              sx={{
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid black',
                margin: 'auto',
              }}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          {ratingLabels.map(label => (
            <Typography key={label} variant="body2">{label}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;