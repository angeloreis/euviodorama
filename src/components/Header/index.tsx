import {
  Flex,
  useMediaQuery,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Divider,
  Icon,
  Heading
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { MenuItem } from 'components/shared/MenuItem'
import { Login } from 'components/Login'
import Link from 'next/link'

export const Header = () => {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      as="header"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX="24px"
      minHeight="97px"
      width="full"
    >
      <Link href="/">
          <Heading
            fontSize="1.6rem"
            color="white"
            margin="5px 0"
            cursor={'pointer'}>
            EU VI O DORAMA
          </Heading>
      </Link>

      {isMobileScreen ? (
        <>
          {!isOpen ? (
            <Button
              colorScheme='orange'
              onClick={onOpen}
              leftIcon={<Icon as={FaBars} />}>Menu</Button>
          ) : undefined}
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent background='orange.600'>
              <DrawerCloseButton />
              <DrawerHeader color="white">NAVEGAÇÃO</DrawerHeader>
              <DrawerBody>
                <Flex direction='column' >
                  <MenuItem url="/" text='Home' />
                  <Divider orientation='horizontal' colorScheme='black' />
                  <MenuItem url="/blog" text='Blog' />
                  <Divider orientation='horizontal' colorScheme='black' />
                  <MenuItem url="/contato" text='Contato' />
                  <Divider orientation='horizontal' colorScheme='black' />
                  <Login />
                </Flex>
              </DrawerBody>

            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex color="white" paddingRight="16px" align="center">
          <MenuItem url="/" text='Home' fromDesktop />
          <MenuItem url="/blog" text='Blog' fromDesktop />
          <MenuItem url="/contato" text='Contato' fromDesktop />
          <Login />
        </Flex>)}

    </Flex>
  )
}
