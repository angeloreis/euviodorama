import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import Head from 'next/head'
import { Header } from 'components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <ChakraProvider>
          <Head>
            <title>Eu Vi o dorama</title>
          </Head>
          <Flex
            flexDirection="column"
            alignItems="center"
            bgGradient='linear(to-l, orange.500, orange.400 )'
            color="blackAlpha.900">
            <Header />
            <Component {...pageProps} />
            <Flex
              as="footer"
              flexDirection="column"
              alignItems="center"
              justify="center"
              paddingY='35px'
              paddingX="10px"
              w="100%"
              color="white"
              background="orange.700">
              <div>Angelo Reis &copy; Todos os direitos reservados - 2009/2022</div>
            </Flex>
          </Flex>
        </ChakraProvider>
      </NextAuthProvider>
    </>
  )
}

export default MyApp
