import React, { JSX } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

// Example quality index data
const qualityData = [
  { label: 'Poor', value: 30, color: '#e53935' },
  { label: 'Average', value: 60, color: '#fbc02d' },
  { label: 'Good', value: 80, color: '#43a047' },
  { label: 'Excellent', value: 95, color: '#1e88e5' },
];

// Find the highest value for scaling
const maxValue = Math.max(...qualityData.map(q => q.value));

const Home = (): JSX.Element => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Quality Index Scale
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {qualityData.map((q, idx) => (
          <Box key={q.label} display="flex" alignItems="center" gap={2}>
            <Box minWidth={80}>
              <Typography variant="body1">{q.label}</Typography>
            </Box>
            <Box flex={1}>
              <LinearProgress
                variant="determinate"
                value={(q.value / maxValue) * 100}
                sx={{
                  height: 16,
                  borderRadius: 8,
                  [`& .MuiLinearProgress-bar`]: {
                    backgroundColor: q.color,
                  },
                  backgroundColor: '#eee',
                }}
              />
            </Box>
            <Box minWidth={40}>
              <Typography variant="body2" color={q.color}>
                {q.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
