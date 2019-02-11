import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  fetch,
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
})
