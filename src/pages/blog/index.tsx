import { Flex, Divider } from "@chakra-ui/react";
import client from "graphql/client";
import { GET_POSTS } from "graphql/queries";
import { ItemPost } from "components/Post/Item";
interface Post {
  slug: string
  title: string
  imageFeature: {
    url: string
  }
  heading: string
}
interface BlogProps {
  posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Flex
      id="app-blog"
      maxWidth="980px"
      minWidth="319px"
      width="100%"
      height='calc(100vh - 5rem)'
      borderRadius="5px"
      margin="32px"
      color='white'>
      <Flex flexDir="column" width="100%" marginLeft="6px" marginTop="16px" marginBottom="16px" padding="16px">
        {posts && posts.map(({ slug, title, heading, imageFeature }, index) => (
          <>
            <ItemPost key={index} slug={slug} title={title} heading={heading} url={imageFeature.url} />
            <Divider variant="solid" marginY='16px' />
          </>
        ))}
      </Flex>
    </Flex>
  )
}

export async function getStaticProps() {
  const { posts } = await client.request(GET_POSTS)

  return {
    props: {
      posts
    }
  }
}
