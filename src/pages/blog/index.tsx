import { Flex, Divider, Button, Wrap, WrapItem } from "@chakra-ui/react";
import client from "graphql/client";
import { GET_CATEGORIES, GET_POSTS } from "graphql/queries";
import { ItemPost } from "components/Post/Item";
import { CategoryProps, PostProps } from "types/api";
import Link from "next/link";

interface BlogProps {
  posts: PostProps[]
  categories: CategoryProps[]
}

export default function Blog({ posts, categories }: BlogProps) {
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
        {categories ? (
          <Flex py="1rem"
            maxWidth="980px"
            minWidth="319px">
            <Wrap spacing={3}>
              {
                categories.map((category) => {
                  return (
                    <WrapItem key={category.name}>
                      <Link href={`/blog/category/${category.slug}`}>
                        <Button
                          bg="orange.500"
                          minW="8rem"
                          maxW="15rem"
                          width="100%"
                          _hover={{
                            bg: "orange.600",
                            borderColor: "white"
                          }}
                          cursor="pointer"
                          border="1px"
                          borderColor="orange.600">
                          {category.name}
                        </Button>
                      </Link>
                    </WrapItem>
                  )
                })
              }
            </Wrap>
          </Flex>
        ) : null}

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
  const { categories } = await client.request(GET_CATEGORIES)

  return {
    props: {
      posts,
      categories
    }
  }
}
