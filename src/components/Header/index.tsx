import {
  Flex,
  Image,
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
  useBreakpointValue,
  Heading
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { MenuItem } from 'components/shared/MenuItem'

export const Header = () => {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const logoOfSite = useBreakpointValue({ base: 'img/mytv.svg', md: 'img/logo-mobile.svg', lg: 'img/logo.svg' });

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
      {!isMobileScreen ? (
        <Heading
          fontSize="1.6rem"
          color="white"
          margin="5px 0">
          EU VI O DORAMA
        </Heading>) : (
        <Image
          src={logoOfSite}
          alt="imagem de uma televisão retro, com linha pretas como borda e escrito em cima de forma curva: Eu vi o dorama"
          width='25%'
          margin="5px 0"
          cursor="pointer"
        />
      )}

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
                  <MenuItem url="/membership" text='Assine' />
                  <Divider orientation='horizontal' colorScheme='black' />
                  <MenuItem url="/contato" text='Contato' />
                </Flex>
              </DrawerBody>

            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex color="white" paddingRight="16px">
          <MenuItem url="/" text='Home' fromDesktop />
          <MenuItem url="/blog" text='Blog' fromDesktop />
          <MenuItem url="/membership" text='Assine' fromDesktop />
          <MenuItem url="/contato" text='Contato' fromDesktop />
        </Flex>)}

    </Flex>
  )
}
