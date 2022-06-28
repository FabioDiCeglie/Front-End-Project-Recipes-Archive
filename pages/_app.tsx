import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import NavigationBar from "../src/components/NavigationBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
      textTransform: "none",
      fontSize: 18,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <NavigationBar />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
