import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>BlogPost</h1>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
