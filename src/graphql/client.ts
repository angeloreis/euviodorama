import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPQL_HOST || ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client


