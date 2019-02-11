import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import axios from 'axios'

class ClientFetchingExample extends PureComponent {
  state = {
    loading: false,
    error: false,
    pupper: {
      img: '',
      breed: '',
    },
  }

  componentDidMount() {
    this.fetchRicksPupper()
  }

  fetchRicksPupper = () => {
    this.setState({ loading: true })
    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(pupper => {
        const {
          data: { message: img },
        } = pupper

        const breed = img.split('/')[4]

        this.setState({
          loading: false,
          pupper: {
            ...this.state.pupper,
            img,
            breed,
          },
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  render() {
    const {
      rickAndMorty: { character },
    } = this.props.data

    const { img, breed } = this.state.pupper

    return (
      <div>
        <h1>{character.name} With His Pupper</h1>
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
          {this.state.loading ? (
            <p>Please hold, pupper incoming!</p>
          ) : img && breed ? (
            <>
              <h2>{`${breed} pupper!`}</h2>
              <img src={img} alt={`cute random `} style={{ maxWidth: 300 }} />
            </>
          ) : (
            <p>Oh noes, error fetching pupper :(</p>
          )}
        </div>
      </div>
    )
  }
  static propTypes = {
    data: PropTypes.shape({
      rickAndMorty: PropTypes.shape({
        character: PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      }),
    }),
  }
}

export default ClientFetchingExample

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
