import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { formattedBlogUrl } from "utils/formatted";

interface SocialShareButtonsProps {
  title: string
  slug: string
}

export function SocialShareButton({ title, slug }: SocialShareButtonsProps) {

  const titleToShare = encodeURIComponent(title)
  const newLineUrl = "%0A"
  const siteName = encodeURIComponent("Eu vi o Dorama - ")
  const sharedUrl = formattedBlogUrl(slug)
  const textToShare = `${siteName}${titleToShare}`

  const getSocialLinkWhatsApp = () => {
    return `https://api.whatsapp.com/send/?text=${textToShare}${newLineUrl}${sharedUrl}&type=custom_url&app_absent=0`
  }

  const getSocialLinkTelegram = () => {
    return `https://t.me/share/url?url=${sharedUrl}&text=${textToShare}`
  }

  const getSocialLinkTwitter = () => {
    return `https://twitter.com/intent/tweet?text=${textToShare}&via=andpamplona&url=${sharedUrl}`
  }

  const getSocialLinkFacebook = () => {
    return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(sharedUrl)}`
  }

  return (
    <Box paddingY="6px">
      <Text>Compatilhar:</Text>
      <Flex gap="5px" flexDir={['column', 'row']}>
        <Link href={getSocialLinkWhatsApp()} target="_blank">
          <Button
            size={["lg", "sm"]}
            leftIcon={<FaWhatsapp />}
            background="whatsapp.600"
            color="whiteAlpha.900"
            _hover={{
              background: "whatsapp.800"
            }}>WhatsApp</Button>
        </Link>
        <Link href={getSocialLinkTelegram()} target="_blank">
          <Button
            size={["lg", "sm"]}
            leftIcon={<FaTelegram />}
            background="telegram.600"
            color="whiteAlpha.900"
            _hover={{
              background: "telegram.800"
            }}>Telegram</Button>
        </Link>
        <Link href={getSocialLinkTwitter()} target="_blank">
          <Button
            size={["lg", "sm"]}
            leftIcon={<FaTwitter />}
            background="twitter.600"
            color="whiteAlpha.900"
            _hover={{
              background: "twitter.800"
            }}>Twitter</Button>
        </Link>
        <Link href={getSocialLinkFacebook()} target="_blank">
          <Button
            size={["lg", "sm"]}
            leftIcon={<FaFacebook />}
            background="facebook.500"
            color="whiteAlpha.900"
            _hover={{
              background: "facebook.800"
            }}>Facebook</Button>
        </Link>
      </Flex>
    </Box>
  )
}
