import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface PaginationProps {
  nextPage(): void;
  previousPage(): void;
  pageSize: number;
  length: number;
  actualPage: number;
}

export function Pagination({
  nextPage,
  previousPage,
  pageSize,
  length,
  actualPage,
}: PaginationProps) {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <HStack spacing="2">
        <Box>
          <Button
            onClick={previousPage}
            mr="1rem"
            bg="orange.800"
            _hover={{ bg: "orange.900" }}
            leftIcon={<FaArrowCircleLeft />}
          >
            Anterior
          </Button>
          <Button
            onClick={nextPage}
            bg="orange.800"
            _hover={{ bg: "orange.900" }}
            rightIcon={<FaArrowCircleRight />}
          >
            Próximo
          </Button>
        </Box>

        <Box fontSize='1rem'>
          {Math.min(1 + pageSize * (actualPage - 1), length)}-
          {Math.min(actualPage * pageSize, length)} de {length}
        </Box>
      </HStack>
    </Stack>
  );
}
