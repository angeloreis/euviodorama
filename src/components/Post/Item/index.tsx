import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useAnalyticsEventTracker } from "hooks/useAnalyticsEventTracker";
import Link from "next/link";

interface ItemPostProps {
  slug: string;
  title: string;
  heading: string;
  url: string;
}

export function ItemPost({ slug, url, title, heading }: ItemPostProps) {
  const gaEventTracker = useAnalyticsEventTracker('List of posts component')
  return (
    <Link href={`/blog/${slug}`} key={slug} onClick={()=>gaEventTracker('click',`Access post ${title}, use url /blog/${slug}`)}>
      <Flex flexDir="column">
        <a key={slug}>
          <Flex
            cursor={"pointer"}
            flexDir={["column", "row"]}
            alignItems={["center", "flex-start"]}
          >
            <Image
              src={url}
              w={["100%", "25%"]}
              borderRadius={["8px", "15px"]}
            />
            <Flex
              flexDir="column"
              paddingLeft={["6px", "12px"]}
              paddingTop={["6px", "none"]}
            >
              <Heading size={["lg", "xl"]}>{title}</Heading>
              <Text>{heading}</Text>
            </Flex>
          </Flex>
        </a>
      </Flex>
    </Link>
  );
}
