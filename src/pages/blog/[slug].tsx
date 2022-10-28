import { Flex, Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import client from "graphql/client";
import { GET_POST_BY_SLUG } from "graphql/queries";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from './post.module.scss'
import Link from "next/link";

interface PostProps {
  title: string
  body: {
    html: string
  }
  slug: string
  publishedAt: string
  createdBy: {
    name: string
  }
}

interface IPost {
  posts: PostProps
}


export default function Post({ posts }: IPost) {
  return (
    <main className={styles.container}>
      <Link href={'/blog'}>
        <Button background='red' leftIcon={<FaArrowLeft/>}>Voltar</Button>
      </Link>
      <article className={styles.post}>
        <h1>{posts.title}</h1>
        <Flex>
          <span className={styles.author}>{posts.createdBy.name}</span>
          <time>{posts.publishedAt}</time>
        </Flex>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: posts.body.html }} />
      </article>
    </main>
  )
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { slug } = params as IParams

  if (!slug) {
    return {
      redirect: {
        destination: `/blog`,
        permanent: false
      }
    }
  }

  const variables = {
    slug
  }

  const { posts } = await client.request(GET_POST_BY_SLUG, variables)

  const slugPost = {
    ...posts[0],
    publishedAt: new Date(posts[0].publishedAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      posts: slugPost
    }
  }
}
