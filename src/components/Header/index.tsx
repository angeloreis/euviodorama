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
    Icon
  } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { MenuItem } from 'components/Menu/MenuItem'
  
export const Header = () => {
    const [isMobileScreen] = useMediaQuery('(max-width: 768px)')

    const {isOpen, onOpen, onClose} = useDisclosure()
    
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
          src={isMobileScreen ? 'img/logo-mobile.svg' : 'img/logo.svg'}
          alt="imagem de uma televisão retro, com linha pretas como borda e escrito em cima de forma curva: Eu vi o dorama"
          width={isMobileScreen ? '64px' : '512px'}
          margin="5px 0"
          cursor="pointer"
        />
        {isMobileScreen ? (
            <>
                {!isOpen ? (
                <Button
                 colorScheme='orange'
                 onClick={onOpen}
                 leftIcon={<Icon as={FaBars}/>}>Menu</Button>
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
                                <MenuItem url="#" text='Home' isMobile={isMobileScreen}/>
                                <Divider orientation='horizontal' colorScheme='black'/>
                                <MenuItem url="#como-comecou" text='Como começou' isMobile={isMobileScreen}/>
                                <Divider orientation='horizontal'/>
                                <MenuItem url="#blog" text='Blog'  isMobile={isMobileScreen}/>
                                <Divider orientation='horizontal'/>
                                <MenuItem url="#eventos" text='Eventos'  isMobile={isMobileScreen}/>
                                <Divider orientation='horizontal'/>
                                <MenuItem url="#contato" text='Contato'  isMobile={isMobileScreen}/>
                            </Flex>
                        </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </>
        ) : (<Flex color="white">
                <MenuItem url="#" text='Home' isMobile={isMobileScreen}/>
                <MenuItem url="#como-comecou" text='Como começou' isMobile={isMobileScreen}/>
                <MenuItem url="#blog" text='Blog'  isMobile={isMobileScreen}/>
                <MenuItem url="#eventos" text='Eventos'  isMobile={isMobileScreen}/>
                <MenuItem url="#contato" text='Contato'  isMobile={isMobileScreen}/>
        </Flex>)}
        
      </Flex>
    )
}
  