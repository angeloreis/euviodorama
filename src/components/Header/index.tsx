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
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
      paddingLeft='16px'
      paddingRight='16px'
    >
      <Image
        src={logoOfSite}
        alt="imagem de uma televisão retro, com linha pretas como borda e escrito em cima de forma curva: Eu vi o dorama"
        width={isMobileScreen ? '64px' : '512px'}
        margin="5px 0"
        cursor="pointer"
      />
      {isMobileScreen && (
      <Heading
       as="h2"
       fontSize="1.4rem"
       color="white">
        EU VI O DORAMA
      </Heading>)}
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
                  <MenuItem url="#" text='Home' />
                  <Divider orientation='horizontal' colorScheme='black' />
                  <MenuItem url="#como-comecou" text='Como começou' />
                  <Divider orientation='horizontal' />
                  <MenuItem url="#blog" text='Blog' />
                  <Divider orientation='horizontal' />
                  <MenuItem url="#eventos" text='Eventos' />
                  <Divider orientation='horizontal' />
                  <MenuItem url="#contato" text='Contato' />
                </Flex>
              </DrawerBody>

            </DrawerContent>
          </Drawer>
        </>
      ) : (<Flex color="white">
        <MenuItem url="#" text='Home' fromDesktop />
        <MenuItem url="#como-comecou" text='Como começou' fromDesktop />
        <MenuItem url="#blog" text='Blog' fromDesktop />
        <MenuItem url="#eventos" text='Eventos' fromDesktop />
        <MenuItem url="#contato" text='Contato' fromDesktop />
      </Flex>)}

    </Flex>
  )
}
