import { ApolloClient, InMemoryCache } from "@apollo/client";

// apollo client
const glclient = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default glclient;
