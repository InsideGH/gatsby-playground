import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import axios from 'axios'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Example of using Apollo Query to fetch data and render component.
const AllCharacters = () => (
  <Query
    query={gql`
      {
        characters {
          results {
            id
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      return data.characters.results.map(({ id, name }) => (
        <div key={id}>
          <h6>{name}</h6>
        </div>
      ))
    }}
  </Query>
)

// Example React custom hook to fetch data.
function fetchPupper() {
  let isCancelled = false
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pupper, setPupper] = useState({
    img: '',
    breed: '',
  })

  const fetchPupper = async () => {
    setLoading(true)

    try {
      const {
        data: { message: img },
      } = await axios.get(`https://dog.ceo/api/breeds/image/random`)

      const breed = img.split('/')[4]
      if (!isCancelled) {
        setLoading(false)
        setPupper({
          img,
          breed,
        })
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error)
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    fetchPupper()
    return () => {
      isCancelled = true
    }
  }, [])

  return {
    loading,
    pupper,
    error,
  }
}

// The component.
export default function ClientFetchingExample({ data }) {
  // Data from gatsby graphql at build time
  const {
    rickAndMorty: { character },
  } = data

  // Data fetched dynamically using a custom React hook.
  const { loading, pupper, error } = fetchPupper()
  const { img, breed } = pupper

  return (
    <div>
      <h1>{character.name} with his Pupper</h1>
      <p>Rick & Morty API data loads at build time.</p>
      <p>
        Using the {"'gatsby-source-graphql'"} to fetch graphql from{' '}
        {'https://rickandmortyapi-gql.now.sh/'} at build time.
      </p>
      <div>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: 300 }}
        />
      </div>

      <h2>Image of {"Rick's"} pupper</h2>
      <p>This will come from a request on the client using {"'axios'"}</p>
      <div>
        {loading ? (
          <p>Please hold, pupper incoming!</p>
        ) : img && breed ? (
          <>
            <p>{`${breed} pupper!`}</p>
            <img src={img} alt={`cute random `} style={{ maxWidth: 300 }} />
          </>
        ) : (
          <React.Fragment>
            <p>Oh noes, error fetching pupper</p>
            <p>{error}</p>
          </React.Fragment>
        )}
      </div>
      <div>
        <h2>Request all characters using Apollo.</h2>
        <p>
          Dynamically requested using apollo-boost/ApolloProvider/react-apollo.
        </p>
        <AllCharacters />
      </div>
    </div>
  )
}

ClientFetchingExample.propTypes = {
  data: PropTypes.shape({
    rickAndMorty: PropTypes.shape({
      character: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }),
}

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`
