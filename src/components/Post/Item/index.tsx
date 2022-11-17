import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ItemPostProps {
  slug: string
  title: string
  heading: string
  url: string
}

export function ItemPost({ slug, url, title, heading }: ItemPostProps) {
  return (
    <Flex flexDir="column">
      <Link href={`/blog/${slug}`}>
        <a key={slug}>
          <Flex flexDir={['column', 'row']} alignItems={['center', 'flex-start']}>
            <Image
              src={url}
              h={["100%","245px"]}
              w={["100%","389px"]}
              borderRadius={["8px","25px"]}
            />
            <Flex flexDir="column" paddingLeft={["6px","12px"]} paddingTop={["6px", "none"]}>
              <Heading size="lg">{title}</Heading>
              <Text>{heading}</Text>
            </Flex>
          </Flex>
        </a>
      </Link>
    </Flex>
  )
}
