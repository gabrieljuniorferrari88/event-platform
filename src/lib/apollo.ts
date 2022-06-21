import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4odmlzg1wy601xmcyv6d51w/master',
  cache: new InMemoryCache(),
});
