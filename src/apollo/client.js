import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "/.netlify/functions/",
  cache: new InMemoryCache(),
})
