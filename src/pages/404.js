import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      Since this component is under src/pages, gastby creates a route for it.
    </p>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
