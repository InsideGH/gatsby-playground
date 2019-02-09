import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>The SEO component uses 'Helmet' to set meta tags, title and keywords.</p>
    <p>
      Since this component is under src/pages, gastby creates a route for it.
      The default plugin 'gatsby-plugin-page-creator' helps with this.
    </p>
    <p>
      'gatsby-plugin-typography' is used to setup a consistent typography theme.
    </p>
    <div>
      <h1>H1 header.</h1>
      <h2>H2 header.</h2>
      <h3>H3 header.</h3>
      <h4>H4 header.</h4>
      <h5>H5 header.</h5>
      <h6>H6 header.</h6>
    </div>

    <h2>Gatsby image</h2>
    <p>
      Automatically serve optimized images with lazy loading and reduced file
      sizes. Uses the 'gatsby-transformer-sharp' and 'gatsby-plugin-sharp'.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div>
      <Link to="/page-2/">Page 2</Link>
    </div>
    <div>
      <Link to="/about/">About</Link>
    </div>
    <div>
      <Link to="/about-css-modules/">About with css-modules</Link>
    </div>
    <div>
      <Link to="/markdown-posts/">Markdown posts</Link>
    </div>
    <div>
      <Link to="/my-files/">Files in src directory</Link>
    </div>
    <div>
      <Link to="/all-pokemons/">Pokemons</Link>
    </div>
  </Layout>
)

export default IndexPage
