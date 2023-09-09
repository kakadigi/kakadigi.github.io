import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  black: {
    500: '#000000',
  },
  slate: {
    900: '#0f172a',
    800: '#1e293b',
    500: '#334155',
    300: '#cbd5e1',
    200: '#e2e8f0',
    100: '#f1f5f9',
  },
  primary: {
    500: '#0ea5e9',
    200: '#bae6fd',
    100: '#e0f2fe',
  },
  green: {
    200: '#bbf7d0',
  },
  emerald: {
    500: '#10b981',
    600: '#059669',
  },
  teal: {
    500: '#14b8a6',
  },
};

const theme = extendTheme({ colors });

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
