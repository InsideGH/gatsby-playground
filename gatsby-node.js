/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const id = node.id
    const component = path.resolve(`./src/templates/${String(node.frontmatter.templateKey)}.js`)
    createPage({
      path: node.fields.slug,
      component,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        id,
      },
    })
  })




  // `getPokemonData` is a function that fetches our data
  //  const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])
  const allPokemon = ['pikachu', 'charizard', 'squirtle'].map(p => ({
    name: p,
  }))

  // Create a page that lists all Pokémon.
  createPage({
    path: `/all-pokemons`,
    component: require.resolve('./src/templates/all-pokemon.js'),
    context: { allPokemon },
  })

  // Create a page for each Pokémon.
  allPokemon.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { pokemon },
    })
  })

}
