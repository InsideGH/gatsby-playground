import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      The SEO component uses {"'Helmet'"} to set meta tags, title and keywords.
    </p>
    <p>
      Since this component is under src/pages, gastby creates a route for it.
      The default plugin {"'gatsby-plugin-page-creator'"} helps with this.
    </p>
    <p>
      {"'gatsby-plugin-typography'"} is used to setup a consistent typography
      theme.
    </p>
    <p>
      When scrolling this page down to the links at the bottom of this page{' '}
      {'<Link rel="prefech".../>'} are inserted in the {'<head>'}
    </p>
    <p>
      When the links at the end of this page are hovered, the javascript, css
      and json-data is fetched so that everything is ready (or partially) when
      clicking the link.
    </p>
    <p>
      The {'gatsby-browser.js'} has a lot of hooks available to be used. Check
      the console for logs.
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
      sizes. Uses the {"'gatsby-transformer-sharp' and 'gatsby-plugin-sharp'"}.
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
    <div>
      <Link to="/client-fetching/">Dynamic data fetching</Link>
    </div>
  </Layout>
)

export default IndexPage
