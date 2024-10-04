import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import RootLayout from './layout';
import './../styles/globals.css';
import { useRouter } from 'next/router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserProvider } from '@/context/userContext';
import { SessionProvider } from "next-auth/react";

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

  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
   <UserProvider>
     <RootLayout>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={pageProps.session}>
       <div className=''>
       <Component {...pageProps} />
       </div>
        </SessionProvider>
      </ThemeProvider>
    </RootLayout>
   </UserProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;