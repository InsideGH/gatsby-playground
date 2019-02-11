import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PropTypes from 'prop-types'

export default function Pokemon({ pageContext: { pokemon } }) {
  return (
    <Layout>
      <SEO title={pokemon.name} />
      <h1>Pokemon details : {pokemon.name}</h1>
      <p>
        Data to this component comes from {"'gatsby-node.js'"} which also mounts
        this component to the specific path.
      </p>
      <p>In gastby-node.js the pages are created with {"'createPage'"}.</p>
    </Layout>
  )
}

Pokemon.propTypes = {
  pageContext: PropTypes.object.isRequired,
}
