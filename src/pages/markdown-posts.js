import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PropTypes from 'prop-types'

const CodeSnippet = () => (
  <pre>
    <code>
      {`
exports.onCreateNode = ({ node, getNode, actions }) => {
const { createNodeField } = actions
if (node.internal.type === \`MarkdownRemark\`) {
const slug = createFilePath({ node, getNode, basePath: \`pages\` })
createNodeField({
  node,
  name: \`slug\`,
  value: slug,
})
}
}

exports.createPages = async ({ graphql, actions }) => {
const { createPage } = actions
const result = await graphql(\`
{
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
\`)
result.data.allMarkdownRemark.edges.forEach(({ node }) => {
createPage({
  path: node.fields.slug,
  component: path.resolve(\`./src/templates/\${String(node.frontmatter.templateKey)}.js\`),
  context: {
    // Data passed to context is available
    // in page queries as GraphQL variables.
    slug: node.fields.slug,
  },
})
})
              
      `}
    </code>
  </pre>
)

export default function MarkdDownPosts({ data }) {
  return (
    <Layout>
      <SEO title="Markdown posts" />
      <h1>This page queries all markdowns files and renders them.</h1>

      <p>
        Since this component is under src/pages, gastby creates a route for it.
      </p>

      <p>
        Due to the {"'gatsby-transformer-remark'"} plugin, which transforms all
        markdown files so that they are query-able this component queries for
        markdown files and all the information in them.
      </p>

      <h2>Amazing Pandas Eating Things</h2>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug} key={node.id}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      ))}

      <CodeSnippet />
    </Layout>
  )
}

MarkdDownPosts.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
