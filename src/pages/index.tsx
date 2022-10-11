import { Flex, Heading, Image, Text } from '@chakra-ui/react'
// import { Stripe } from '@stripe/stripe-js'
// import { SubscriptionButton } from 'components/Subscription'
// import { getPlanRecommend } from 'services/plans'
// import { getStripeJs } from 'services/stripe-js'
// import { formattedPrice } from 'utils/formatted'

// interface HomeProps {
//   priceFormatted: string
//   stripe: Stripe
// }

// export default function Home({ priceFormatted, stripe }: HomeProps) {
export default function Home() {
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
            Agora vocês tem acesso ao conteúdo profissional sobre doramas
            {/* Por apenas <strong>{priceFormatted}</strong> tenha acesso a minha lista de curadoria */}
          </Text>
          {/* <Flex alignItems={["center", "flex-start"]} justifyContent={["center", "flex-start"]}>
            <SubscriptionButton stripe={stripe}/>
          </Flex> */}
        </Flex>
        <Image src="./img/hero.svg" height={["356px", "500px"]} />
      </Flex>
    </Flex>
  )
}


// export async function getServerSideProps() {
//   const plan = await getPlanRecommend()
//   const stripe = await getStripeJs()
//   const priceFormatted = plan && formattedPrice(plan.price) || ''
//   return {
//     props: {
//       priceFormatted,
//       stripe
//     }
//   }
// }
