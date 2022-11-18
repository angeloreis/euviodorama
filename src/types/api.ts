export type ItemCountPostProps = {
  slug: string
}

export type CategoryProps = {
  name: string
  slug: string
  posts: ItemCountPostProps[]
}

export type PostProps = {
  slug: string
  title: string
  imageFeature: {
    url: string
  }
  heading: string
}
