import {
  Flex,
  Divider,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  useDisclosure,
  Icon,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import client from "graphql/client";
import { GET_CATEGORIES, GET_POSTS } from "graphql/queries";
import { ItemPost } from "components/Post/Item";
import { CategoryProps, PostProps } from "types/api";
import Link from "next/link";
import { FaArrowCircleLeft, FaBars } from "react-icons/fa";
import { GetServerSideProps } from "next";

import * as gtag from "utils/gtag";
import { Pagination } from "components/Pagination";
import { useEffect, useState } from "react";

interface BlogProps {
  posts: PostProps[];
  categories: CategoryProps[];
}

const MAX_POST_PER_PAGE = 10

export default function Blog({ posts, categories }: BlogProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [actualPage, setActualPage] = useState(1);
  const [actualPosts, setActualPosts] = useState<Array<PostProps>>([])



  const paginate = (
    array: Array<any>,
    page_size: number,
    page_number: number
  ) => array.slice((page_number - 1) * page_size, page_number * page_size);

  const nextPage = () => {
    if (actualPage < Math.ceil(posts.length / MAX_POST_PER_PAGE)) {
      setActualPosts(paginate(posts, MAX_POST_PER_PAGE, actualPage + 1))
      setActualPage(actualPage + 1)
    }
  }

  const previousPage = () => {
    if (actualPage > 1) {
      setActualPosts(paginate(posts, MAX_POST_PER_PAGE, actualPage - 1))
      setActualPage(actualPage - 1)
    }
  }

  const handleOpenMenu = () => {
    gtag.event({
      action: "click",
      category: "blog",
      label: "Side Menu Category open",
      value: "access",
    });
    onOpen();
  };

  const handleCloseMenu = () => {
    gtag.event({
      action: "click",
      category: "blog",
      label: "Side Menu Category closed by user",
      value: "access",
    });
    onClose();
  };

  useEffect(() => {
    setActualPosts(posts.slice(0,MAX_POST_PER_PAGE))
  },[])

  return (
    <Flex
      id="app-blog"
      maxWidth="980px"
      minWidth="319px"
      width="100%"
      borderRadius="5px"
      margin="32px"
      color="white"
      height="full"
    >
      <Flex>
        <Flex
          flexDir="column"
          width="100%"
          marginLeft="6px"
          marginTop="1rem"
          marginBottom="1rem"
          padding="1rem"
        >
          <Flex flexDir="row" align="center" justify="space-between">
            <Breadcrumb fontWeight="medium" fontSize="sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Link href="/">
              <Button
                bg="orange.600"
                leftIcon={<FaArrowCircleLeft />}
                _hover={{ bg: "orange.800" }}
                onClick={() =>
                  gtag.event({
                    action: "click",
                    category: "blog",
                    label: "Go back to home page",
                    value: "access",
                  })
                }
              >
                Voltar
              </Button>
            </Link>
          </Flex>
          {!isOpen ? (
            <Button
              my="2rem"
              px="2rem"
              colorScheme="orange"
              onClick={handleOpenMenu}
              width={["100%", "256px"]}
              leftIcon={<Icon as={FaBars} />}
            >
              Categorias
            </Button>
          ) : (
            <Flex my="3.21rem" />
          )}

          <Drawer isOpen={isOpen} placement={"right"} onClose={handleCloseMenu}>
            <DrawerOverlay />
            <DrawerContent background="orange.600">
              <DrawerCloseButton />
              <DrawerHeader color="white">CATEGORIAS</DrawerHeader>
              <DrawerBody>
                <Stack direction="column" spacing={2} width="100%">
                  {categories.map((category) => {
                    return category.posts.length > 0 ? (
                      <>
                        <Link
                          href={`/blog/category/${category.slug}`}
                          key={category.name}
                          color="white"
                          onClick={() =>
                            gtag.event({
                              action: "click",
                              category: "blog",
                              label: `Click to filter category ${category.name} use slug ${category.slug}`,
                              value: "access",
                            })
                          }
                        >
                          <Button
                            bg="orange.400"
                            minW="8rem"
                            maxW={["100vw", "15rem"]}
                            width="100%"
                            color="white"
                            _hover={{
                              bg: "orange.700",
                              borderColor: "orange.900",
                            }}
                            cursor="pointer"
                            border="1px"
                            borderColor="orange.500"
                          >
                            {category.name}
                          </Button>
                        </Link>
                      </>
                    ) : null;
                  })}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          {actualPosts &&
            actualPosts.map(({ slug, title, heading, imageFeature }, index) => (
              <>
                <ItemPost
                  key={index}
                  slug={slug}
                  title={title}
                  heading={heading}
                  url={imageFeature.url || "img/image-not-found.png"}
                />
                {actualPosts.length - 1 === index ? (
                  <Flex my="1rem"></Flex>
                ) : (
                  <Divider variant="solid" marginY="16px" />
                )}
              </>
            ))}

          <Pagination
            actualPage={actualPage}
            length={posts.length}
            nextPage={nextPage}
            pageSize={MAX_POST_PER_PAGE}
            previousPage={previousPage}
            key='Pagination-01'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { posts } = await client.request(GET_POSTS);
  const { categories } = await client.request(GET_CATEGORIES);

  return {
    props: {
      posts,
      categories,
    },
  };
};
