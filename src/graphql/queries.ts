import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query getPosts {
    posts(
      orderBy: createdAt_DESC
      last: 10000
      where: { publishOnSite: true }
    ) {
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
`;

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    posts(where: { slug: $slug }, last: 10000) {
      title
      body {
        html
      }
      imageFeature {
        url
      }
      slug
      publishedAt
      createdBy {
        name
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories(stage: PUBLISHED) {
      name
      slug
      posts {
        slug
      }
    }
  }
`;

export const GET_CATEGORY_BY_SLUG = gql`
  query getCategoryBySlug($slugCategory: String!) {
    category(where: { slug: $slugCategory }) {
      name
      slug
    }
  }
`;

export const GET_POST_BY_CATEGORY = gql`
  query getPostByCategory($categorySlug: String!) {
    posts(where: { categories_some: { slug: $categorySlug } }) {
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
`;
