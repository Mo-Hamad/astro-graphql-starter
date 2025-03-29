import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const fetchGraphQL = new ApolloClient({
    uri: import.meta.env.PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  export default fetchGraphQL;