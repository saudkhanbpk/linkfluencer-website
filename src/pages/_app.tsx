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
  // const router = useRouter();
  // useEffect(()=>{
  //   const rememberMe = localStorage.getItem('linkfluencer-remember-me')
  //   if(rememberMe !== 'true'){
  //     // router.push('/signin');
  //   }
  // },[])
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('token');
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  // if (token) {
  //   axios.post('/api/verify-token', { token })
  //     .then(response => {
  //       if (response.data.isValid) {
  //         setIsAuthenticated(true);
  //       } else {
  //         localStorage.removeItem('token');
  //         router.push('/signin');
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       localStorage.removeItem('token');
  //       router.push('/signin');
  //     });
  // }

  // if (!isAuthenticated) {
  //   return null; // or a loading indicator
  // }
  return (
   <UserProvider>
     <RootLayout>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
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