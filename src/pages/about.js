import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div style={{ color: `teal` }}>
    <h1>About Gatsby</h1>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>Such wow. Very React.</p>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
