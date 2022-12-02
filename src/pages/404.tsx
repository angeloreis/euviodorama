import {
  Flex,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

import Link from "next/link";

import { FaArrowCircleLeft } from "react-icons/fa";

export default function Custom404() {
  return (
    <Flex
      id="app-blog"
      maxWidth="1240px"
      minWidth="319px"
      width="100%"
      borderRadius="5px"
      margin="32px"
      color="white"
      height="calc(100vh - 1rem)"
    >
      <Flex>
        <Flex
          flexDir="column"
          width="100%"
          maxW="1240px"
          h="full"
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
                <BreadcrumbLink href="/400">Não Encontrado :(</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
          <Flex flexDir={"column"} align="center" my={["2.5rem", "6rem"]}>
            <Heading>Opa alguma coisa deu errada!!!</Heading>
            <Heading>Conteúdo não encontrado ou foi excluído</Heading>
            <Link href="/">
              <Button
                bg="orange.600"
                width="250px"
                h="120px"
                my="3rem"
                leftIcon={<FaArrowCircleLeft />}
                _hover={{ bg: "orange.800" }}
              >
                Voltar
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
