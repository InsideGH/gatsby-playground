import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PropTypes from 'prop-types'

const CodeSnippet = () => (
  <pre>
    <code>
      {`
// \`getPokemonData\` is a function that fetches our data
//  const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])
const allPokemon = ['pikachu', 'charizard', 'squirtle'].map(p => ({
name: p,
}))

// Create a page that lists all Pokémon.
createPage({
path: \`/all-pokemons\`,
component: require.resolve('./src/templates/all-pokemon.js'),
context: { allPokemon },
})

// Create a page for each Pokémon.
allPokemon.forEach(pokemon => {
createPage({
path: \`/pokemon/\${pokemon.name}/\`,
component: require.resolve('./src/templates/pokemon.js'),
context: { pokemon },
})
})
 
      `}
    </code>
  </pre>
)

export default function AllPokemons({ pageContext: { allPokemon } }) {
  return (
    <Layout>
      <SEO title="Pokemons" />
      <div>
        <h3>Example of Gatsby templates</h3>
        <p>
          Data to this component comes from {"'gatsby-node.js'"} which also
          mounts this component to the specific path.
        </p>
        <p>In gastby-node.js the pages are created with {"'createPage'"}.</p>
        {allPokemon.map((pokemon, index) => {
          return (
            <Link to={`/pokemon/${pokemon.name}`} key={index}>
              <h1>{pokemon.name}</h1>
            </Link>
          )
        })}
      </div>
      <CodeSnippet />
    </Layout>
  )
}

AllPokemons.propTypes = {
  pageContext: PropTypes.object.isRequired
}