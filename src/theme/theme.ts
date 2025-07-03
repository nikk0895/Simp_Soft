// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#800000', // Blue
    },
    secondary: {
      main: '#f50057', // Pink
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
