/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/global.css'
import React from 'react'
import PropTypes from 'prop-types'
import { client } from './src/apollo/client'
import { ApolloProvider } from 'react-apollo'

export const onClientEntry = () => {
  console.log("We've started!")
}

export const onInitialClientRender = () => {
  console.log('ReactDOM.render has executed')
}

export const onPrefetchPathname = pathInfo => {
  console.log('onPrefetchPathname', pathInfo)
}

export const onPostPrefetchPathname = prefetch => {
  console.log('onPostPrefetchPathname', prefetch)
}

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  console.log(
    'Started to change location from',
    prevLocation ? prevLocation.pathname : null,
    ' to ',
    location.pathname
  )
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
}

export const onRouteUpdateDelayed = () => {
  console.log(
    'We can show loading indicator now since the change takes longer than 1 sec.'
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: 0, margin: 0 }}>
        <p style={{ padding: 0, margin: 0, border: '5px solid #d61111' }}>
          This (bws) is a root component and it is wrapped. Useful to supply
          providers such as redux etc. This one wrapps with ApolloProvider for
          client side dynamic fetching.
        </p>
        {element}
      </div>
    </ApolloProvider>
  )
}

wrapRootElement.propTypes = {
  element: PropTypes.object.isRequired,
}
