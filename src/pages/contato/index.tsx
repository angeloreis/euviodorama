import { Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function Contact() {
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
      <Flex as="section" maxWidth="600px" flexDir="column">
          <Heading
           fontSize={["1.25rem", "4.5rem"]}
           lineHeight={["1.25rem", "4.5rem"]}
           fontWeight='extrabold'
           marginTop={["0.75rem", "2.5rem"]}>
            Meu contatos são esses aqui:
          </Heading>
          <Text fontSize={["0.875rem", "1.25rem"]} lineHeight="1.25rem" marginY={["1rem", "1.5rem"]}>
            Pode entrar em contato, seja para parcerias, collab<br />
            e até bate um papo sobre o último ep. lançado dos doramas que estou assistindo!
          </Text>

        </Flex>
        <Text fontSize={["0.875rem", "1.25rem"]} lineHeight="1.25rem" marginY={["1rem", "1.5rem"]}>
          Já segue meu perfil no instagram? Segue ai <Link href="https://instagram.com/euviodorama"><a target="_blank"><strong>Eu vi o Dorama</strong></a></Link><br />
          Temos um grupo no <Link href="https://t.me/+A08gA8IGRHczY2Ex"><a target="_blank"><strong>telegram</strong></a></Link>
        </Text>
    </Flex>
 )
}
