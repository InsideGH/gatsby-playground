import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PropTypes from 'prop-types'

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="Page two" />
      <div style={{ color: `teal` }}>
        <h1>About</h1>
        <p>Site title : {data.site.siteMetadata.title}</p>
        <p>Data to this component is queried from the site.siteMetadata.</p>
        <p>
          Since this component is under src/pages, gastby creates a route for
          it.
        </p>
      </div>
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
