import { Flex, Heading, Image as ImageChakra } from '@chakra-ui/react'

export const Main = ({
  description = 'Doramas, spoilers, memes, notícias e qualquer coisa a mais'
}) => (
  <Flex
    direction="column"
    width="100vw"
    height="100vh"
    padding="3rem"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    background='black'
    color='white'
  >
    <ImageChakra
      src="/assets/logo.svg"
      alt="imagem de uma televisão retro, com linha pretas como borda e escrito em cima de forma curva: Eu vi o dorama"
      width="768px"      
    />    
    <Heading as="h2" fontSize="2rem" fontWeight="400">
      {description}
    </Heading>
  </Flex>
)
