import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { AppBar, Container, Stack, Toolbar } from "@mui/material";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div>
        <AppBar position="fixed" elevation={0}>
          <Toolbar>
            <Container>
              <Stack
                direction="row"
                justifyContent="end"
                alignItems="center"
                spacing={3}
              ></Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
