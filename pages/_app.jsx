import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  black: {
    500: "#000000",
  },
  slate: {
    900: "#0f172a",
    800: "#1e293b",
    500: "#334155",
  },
  primary: {
    500: "#3938B8",
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
