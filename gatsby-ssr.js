/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './src/apollo/client'
import PropTypes from 'prop-types'

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <div style={{ padding: 0, margin: 0 }}>
      <p style={{ padding: 0, margin: 0, border: '5px solid #d61111' }}>
        This (ssr) is a root component and it is wrapped. Useful to supply
        providers such as redux etc. This one wrapps with ApolloProvider for
        client side dynamic fetching.
      </p>
      {element}
    </div>
  </ApolloProvider>
)
wrapRootElement.propTypes = {
  element: PropTypes.object.isRequired,
}