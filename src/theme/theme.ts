import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(to right, #1976D2, #1567B9, #1259A0, #0F4B87, #0C3C6E, #092E55, #07213C)',
        },
      },
    },
  },
});

export default theme;
