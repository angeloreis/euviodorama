import { Button, Flex, Stack, Image, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import * as gtag from 'utils/gtag'

export default function Contact() {
  return (
    <Flex
      display="flex"
      alignItems="center"
      justifyContent={["center", "space-between"]}
      w="100%"
      maxWidth="1120px"
      marginY="0"
      marginX={["1rem", "auto"]}
      px="1rem"
      height="calc(100vh - 5rem)"
      color="white"
    >

      <Stack
        w="100%"
        maxWidth="1120px">

        <Image src="./img/hero.svg" height={["64px", "128px"]} />

        <Text textAlign={'center'}>
          📌 Dicas, resenhas, notícias, cenas e onde assistir.
        </Text>
        <Heading textAlign={'center'} pb='8'>
          ⚠️ CONTÉM SPOILERS ⚠️
        </Heading>
        <Link href="https://instagram.com/euviodorama" target="_blank" onClick={() => gtag.event({
          action: 'click',
          category: 'contact',
          label: `User do contact via instagram and try follow account`,
          value: `/contato`
        })}>
          <Button
            height='52px'
            leftIcon={<FaInstagram size={24} />}
            background="white"
            color="black"
            border={'1px solid #ffffff'}
            _hover={{
              background: "orange.500",
              color: "white"
            }}>Instagram</Button>
        </Link>

        <Link href="https://www.tiktok.com/@euviodorama" target="_blank" onClick={() => gtag.event({
          action: 'click',
          category: 'contact',
          label: `User enter on Toktok account page`,
          value: `/contato`
        })}>
          <Button
            height='52px'
            leftIcon={<FaTiktok size={24} />}
            background="white"
            color="black"
            border={'1px solid #ffffff'}
            _hover={{
              background: "orange.500",
              color: "white"
            }}>Tiktok</Button>
        </Link>

        <Link href="https://www.facebook.com/euviodorama/" target="_blank" onClick={() => gtag.event({
          action: 'click',
          category: 'contact',
          label: `User enter on facebook page`,
          value: `/contato`
        })}>
          <Button
            height='52px'
            leftIcon={<FaFacebook size={24} />}
            background="white"
            color="black"
            border={'1px solid #ffffff'}
            _hover={{
              background: "orange.500",
              color: "white"
            }}>Facebook</Button>
        </Link>

        <Link href="https://t.me/+A08gA8IGRHczY2Ex" target="_blank" onClick={() => gtag.event({
          action: 'click',
          category: 'contact',
          label: `User enter on channel of telegram`,
          value: `/contato`
        })}>
          <Button
            height='52px'
            leftIcon={<FaTelegram size={24} />}
            background="white"
            color="black"
            border={'1px solid #ffffff'}
            _hover={{
              background: "orange.500",
              color: "white"
            }}>Telegram</Button>
        </Link>

        <Link href="https://www.youtube.com/@euviodorama" target="_blank" onClick={() => gtag.event({
          action: 'click',
          category: 'contact',
          label: `User enter on Youtube channel page`,
          value: `/contato`
        })}>
          <Button
            height='52px'
            leftIcon={<FaYoutube size={24} />}
            background="white"
            color="black"
            border={'1px solid #ffffff'}
            _hover={{
              background: "orange.500",
              color: "white"
            }}>Youtube</Button>
        </Link>
      </Stack>


    </Flex>
  );
}
