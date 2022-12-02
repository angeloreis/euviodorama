import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { CategoryProps } from "types/api";

interface SideMenuCategoriesProps {
  categories: CategoryProps[];
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenuCategories = ({
  categories,
  isOpen,
  onClose,
}: SideMenuCategoriesProps) => {
  return (
    <Drawer isOpen={isOpen} placement={"right"} onClose={onClose}>
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
  );
};
