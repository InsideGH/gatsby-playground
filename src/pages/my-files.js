import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PropTypes from 'prop-types'

export default function MyFiles({ data }) {
  return (
    <Layout>
      <SEO title="My files" />
      <div>
        <p>
          Thanks to the {"'gatsby-source-filesystem'"} {"it's"} possible to
          query the file system.
        </p>
        <h1>My {"Site's"} src folder files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

MyFiles.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
