import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388e3c', // Custom shade of green
    },
    secondary: {
      main: '#6abf69', // Another shade of green
    },
    // You can add additional color options here
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    // Other typography variants can be customized here
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for buttons
          textTransform: 'none', // Removes uppercase styling
        },
      },
    },
    // Other component overrides can be added here
  },
  spacing: 8, // Customizes the default spacing
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // You can add more theme customizations here
});

export default theme;
