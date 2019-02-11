import React from 'react'

import styles from './about-css-modules.module.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PropTypes from 'prop-types'

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default function AboutCssModules() {
  return (
    <Layout>
      <SEO title="About with css-modules" />
      <h1>About CSS Modules</h1>
      <p>{"Example of imports css style sheet and uses 'className'"}</p>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Layout>
  )
}
