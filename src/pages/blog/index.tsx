import { useState } from "react";
import { Flex, Box, Heading, Text, Button, Divider, Image } from "@chakra-ui/react";
import { Pagination } from "components/Pagination";
import { FaWhatsapp, FaTelegram, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { getPosts } from "services/posts";

interface Post {
  title: string
  heading: string
}
interface BlogProps {
  posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
  const [page, setPage] = useState(1);
  return (
    <Flex
      id="app-blog"
      maxWidth="980px"
      minWidth="319px"
      width="100%"
      height="70%"
      background="white"
      borderRadius="5px"
      margin="32px">
      <Flex flexDir="column" width="512px" marginLeft="6px" marginTop="16px" marginBottom="16px" padding="16px">
        {posts && posts.map(post => (
          <>
            <Box paddingBottom="16px">
              <Image
                src="./img/dorama_blog_1.jpeg"
                height="328px"
                borderRadius="12px"
              />
              <Flex flexDir="column" paddingTop="6px">
                <Heading size="md">{post.title}</Heading>
                <Text>{post.heading}</Text>
              </Flex>
              <Box paddingY="6px">
                <Text>Compatilhar:</Text>
                <Flex gap="5px">
                  <Button size="sm" leftIcon={<FaWhatsapp />} background="whatsapp.600" color="whiteAlpha.900">WhatsApp</Button>
                  <Button size="sm" leftIcon={<FaTelegram />} background="telegram.600" color="whiteAlpha.900">Telegram</Button>
                  <Button size="sm" leftIcon={<FaTwitterSquare />} background="twitter.600" color="whiteAlpha.900">Twitter</Button>
                  <Button size="sm" leftIcon={<FaInstagram />} background="red.500" color="whiteAlpha.900">Story do Instagram</Button>
                </Flex>
              </Box>
            </Box>
            <Divider variant="solid" />
          </>
        ))}

        <Pagination
          totalCountOfRegisters={posts.length}
          currentPage={page}
          onPageChange={setPage}
        />
      </Flex>
      <Flex maxWidth="430px" width="100%" marginLeft="16px" marginTop="16px" marginBottom="16px" padding="16px">
        <Box>
          <Heading size="sm">Publicidade</Heading>
        </Box>
      </Flex>
    </Flex>
  )
}


export async function getServerSideProps() {
  const posts = await getPosts()

  const arrPosts = posts.map(post => {
    const { title, content } = post
    const heading = content.substr(0, 240)
    return { title, heading }
  })

  return {
    props: {
      posts: arrPosts
    }
  }
}
