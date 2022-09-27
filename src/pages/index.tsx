import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { getPlanRecommend } from 'services/plans'
import { formattedPrice } from 'utils/formatted'

interface HomeProps {
  priceFormatted: string
}

export default function Home({ priceFormatted }: HomeProps) {
  return (
    <Flex
      as="main"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      maxWidth="1120px"
      marginY="0"
      marginX={["1rem", "auto"]}
      height='calc(100vh - 5rem)'
      color="white">
      <Flex flexDir={["column", "row"]} marginX={["0.875rem", "auto"]} marginTop={['4rem', '5rem']}>
        <Flex as="section" maxWidth="600px" flexDir="column">
          <Text as="span" fontSize={["1rem", "1.5rem"]} fontWeight="bold">안녕하세요 (annyeonghaseyo) 🇰🇷</Text>
          <Heading fontSize={["1.25rem", "4.5rem"]} lineHeight={["1.25rem", "4.5rem"]} fontWeight='extrabold' marginTop={["0.75rem", "2.5rem"]}>Aqui você tem a melhor resenha dos doramas em evidência</Heading>
          <Text fontSize={["0.875rem", "1.25rem"]} lineHeight="1.25rem" marginY={["1rem", "1.5rem"]}>
            Resenhas com link para os episódios? <br />
            Por apenas <strong>{priceFormatted}</strong> tenha acesso a minha lista de curadoria
          </Text>
          <Flex alignItems={["center", "flex-start"]} justifyContent={["center", "flex-start"]}>
            <Button
              height="4rem"
              width="260px"
              border="1px"
              borderColor='orange.200'
              borderRadius="2rem"
              background="orange.500"
              color="white"
              fontSize="1.25rem"
              transition="filter 0.2s"
              marginBottom={["0.5rem", "1.5rem"]}
              _hover={{
                fontSize: "1.45rem",
                color: "white",
                background: "orange.600",
                borderColor: 'orange.900',
                filter: 'brightness(0.8)'
              }}>Assinar Membro</Button>
          </Flex>
        </Flex>
        <Image src="./img/hero.svg" height={["356px", "500px"]} />
      </Flex>
    </Flex>
  )
}


export async function getServerSideProps() {
  const plan = await getPlanRecommend()
  const priceFormatted = plan && formattedPrice(plan.price) || ''
  return {
    props: {
      priceFormatted
    }
  }
}
