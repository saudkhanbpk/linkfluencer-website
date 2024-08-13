import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import RootLayout from './layout';
import './../styles/globals.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 401,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#00bfa5',
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </RootLayout>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;