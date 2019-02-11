import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Page2() {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Page 2</h1>
      <p>Welcome</p>
      <p>
        Since this component is under src/pages, gastby creates a route for it.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
