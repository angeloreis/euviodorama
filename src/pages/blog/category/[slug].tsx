import { Flex, Divider, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from "@chakra-ui/react";
import client from "graphql/client";
import { GET_POST_BY_CATEGORY, GET_CATEGORY_BY_SLUG } from "graphql/queries";
import { ItemPost } from "components/Post/Item";
import { PostProps } from "types/api";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps } from "next";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

interface ICategoryProps {
  posts: PostProps[]
  name: string
}

export default function Category({ posts, name }: ICategoryProps) {
  const router = useRouter()
  const { slug } = router.query
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
        <Flex flexDir="row" align="center" justify="space-between" paddingY='16px' >
          <Breadcrumb fontWeight='medium' fontSize='sm'>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href={`/blog/category/${slug}`}>Categoria - {name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Link href="/blog">
            <Button bg="orange.600" leftIcon={<FaArrowCircleLeft />} _hover={{ bg: "orange.800" }}>Voltar</Button>
          </Link>
        </Flex>
        {posts && posts.length !== 0 ? posts.map(({ slug, title, heading, imageFeature }, index) => (
          <>
            <ItemPost key={index} slug={slug} title={title} heading={heading} url={imageFeature.url} />
            <Divider variant="solid" marginY='16px' />
          </>
        )) : (<Heading>Nenhum post relacionado a esta categoria...</Heading>)}
      </Flex>
    </Flex>
  )


}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { slug } = params as IParams

  if (!slug || typeof slug === null) {
    return {
      redirect: {
        destination: `/blog`,
        permanent: false
      }
    }
  }

  const variables = {
    categorySlug: slug
  }

  const { posts } = await client.request(GET_POST_BY_CATEGORY, variables)
  const { category } = await client.request(GET_CATEGORY_BY_SLUG, { slugCategory: slug })

  return {
    props: {
      posts,
      name: category.name
    }
  }
}

