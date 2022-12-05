import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { ParsedUrlQuery } from "querystring";
import client from "graphql/client";
import { GET_POST_BY_SLUG } from "graphql/queries";

import { Flex, Button } from "@chakra-ui/react";
import { FaArrowCircleLeft } from "react-icons/fa";

import { SocialShareButton } from "components/Buttons/Social";
import { formattedBlogUrl } from "utils/formatted";

import * as gtag from 'utils/gtag'

import styles from './post.module.scss'
interface PostProps {
  title: string
  body: {
    html: string
  }
  slug: string
  imageFeature: {
    url: string
  }
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
    <>
      <Head>
        <title>{posts.title}</title>
        <meta property="og:title" content={posts.title} />
        <meta property="og.description" content={posts.title} />
        <meta property="og:url" content={formattedBlogUrl(posts.slug)} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={posts.imageFeature.url} />
      </Head>
      <main className={styles.container}>
        <Link href="/blog" onClick={()=>gtag.event({ action: 'click', category: 'blog', label: 'Go back to blog page', value: `blog/${posts.slug} to blog page` })}>
          <Button bg="orange.600" leftIcon={<FaArrowCircleLeft />} _hover={{ bg: "orange.800" }}>Voltar</Button>
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
        <SocialShareButton title={posts.title} slug={posts.slug} />
      </main>
    </>
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

  if (!posts[0]) {
    return {
      redirect: {
        destination: `/404`,
        permanent: false
      }
    }
  }

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
