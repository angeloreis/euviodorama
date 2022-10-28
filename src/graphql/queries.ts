import { gql } from 'graphql-request'

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      slug
      title
      heading
      imageFeature {
        url
      }
      body {
        html
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    posts(where: {slug: $slug}) {
      title
      body {
        html
      }
      slug
      publishedAt
      createdBy {
       name
      }
    }
  }
`



