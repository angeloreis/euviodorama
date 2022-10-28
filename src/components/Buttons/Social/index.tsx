import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaInstagram, FaTelegram, FaTwitterSquare, FaWhatsapp } from "react-icons/fa";

export function SocialShareButton() {
  return (
    <Box paddingY="6px">
      <Text>Compatilhar:</Text>
      <Flex gap="5px" flexDir={['column', 'row']}>
        <Button size={["lg", "sm"]} leftIcon={<FaWhatsapp />} background="whatsapp.600" color="whiteAlpha.900">WhatsApp</Button>
        <Button size={["lg", "sm"]} leftIcon={<FaTelegram />} background="telegram.600" color="whiteAlpha.900">Telegram</Button>
        <Button size={["lg", "sm"]} leftIcon={<FaTwitterSquare />} background="twitter.600" color="whiteAlpha.900">Twitter</Button>
        <Button size={["lg", "sm"]} leftIcon={<FaInstagram />} background="red.500" color="whiteAlpha.900">Story do Instagram</Button>
      </Flex>
    </Box>
  )
}
