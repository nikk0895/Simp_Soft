import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', qualityIndex: 60 },
  { name: 'Feb', qualityIndex: 72 },
  { name: 'Mar', qualityIndex: 80 },
  { name: 'Apr', qualityIndex: 68 },
  { name: 'May', qualityIndex: 90 },
  { name: 'Jun', qualityIndex: 75 },
];

// Use the latest value for the scale
const latestQualityIndex = data[data.length - 1].qualityIndex;

// Map the value (0-100) to a 0-10 scale for the bar
const scaleValue = (latestQualityIndex / 100) * 10;

const getColor = (index: number) => {
  if (index < 2) return '#e53935';
  if (index < 4) return '#fb8c00';
  if (index < 6) return '#fdd835';
  if (index < 8) return '#9ccc65';
  return '#43a047';
};

const renderBars = () => {
  const bars = [];
  for (let i = 0; i < 10; i++) {
    bars.push(
      <Box
        key={i}
        sx={{
          width: '10%',
          height: 20,
          backgroundColor: getColor(i),
          display: 'inline-block',
          borderRight: i < 9 ? '1px solid #fff' : 'none',
        }}
      />
    );
  }
  return bars;
};

const Dashboard: React.FC = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Quality Index Dashboard
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="qualityIndex" stroke="#1976d2" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {/* Quality Index Scale */}
      <Box mt={6}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6">Quality Index</Typography>
          <Typography variant="h6">{latestQualityIndex}</Typography>
        </Box>
        <Box position="relative" width="100%">
          <Box display="flex" width="100%">
            {renderBars()}
          </Box>
          <Box
            position="absolute"
            left={`calc(${scaleValue * 10}% - 10px)`}
            top={-10}
            textAlign="center"
          >
            <Typography variant="body2">{latestQualityIndex}</Typography>
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
          <Typography variant="body2">Poor</Typography>
          <Typography variant="body2">Good</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;