import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ItemPostProps {
  slug: string
  index: number | string
  title: string
  heading: string
  url: string
}

export function ItemPost({ slug, index, url, title, heading }: ItemPostProps) {
  return (
    <Flex flexDir="column" key={index}>
      <Link href={`/blog/${slug}`}>
        <a key={slug}>
          <Flex flexDir={['column', 'row']} alignItems={['center', 'flex-start']}>
            <Image
              src={url}
              h="128px"
              w="128px"
              borderRadius="25px"
            />
            <Flex flexDir="column" paddingLeft="6px">
              <Heading size="lg">{title}</Heading>
              <Text>{heading}</Text>
            </Flex>
          </Flex>
        </a>
      </Link>
    </Flex>
  )
}
