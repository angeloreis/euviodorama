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
  const textToShare = `${siteName}${titleToShare}`

  const getSocialLinkWhatsApp = (slug: string) => {
    return `https://api.whatsapp.com/send/?text=${textToShare}${newLineUrl}${formattedBlogUrl(slug)}&type=custom_url&app_absent=0`
  }

  const getSocialLinkTelegram = (slug: string) => {
    return `https://t.me/share/url?url=${formattedBlogUrl(slug)}&text=${textToShare}`
  }

  const getSocialLinkTwitter = (slug: string) => {
    return `https://twitter.com/intent/tweet?text=${textToShare}&via=andpamplona&url=${formattedBlogUrl(slug)}`
  }

  const getSocialLinkFacebook = (slug: string) => {
    return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(formattedBlogUrl(slug))}`
  }

  return (
    <Box paddingY="6px">
      <Text>Compatilhar:</Text>
      <Flex gap="5px" flexDir={['column', 'row']}>
        <Link href={getSocialLinkWhatsApp(slug)}>
          <Button
            size={["lg", "sm"]}
            leftIcon={<FaWhatsapp />}
            background="whatsapp.600"
            color="whiteAlpha.900"
            _hover={{
              background: "whatsapp.800"
            }}>WhatsApp</Button>
        </Link>
        <Link href={getSocialLinkTelegram(slug)}>
          <Button
            size={["lg", "sm"]}
            leftIcon={<FaTelegram />}
            background="telegram.600"
            color="whiteAlpha.900"
            _hover={{
              background: "telegram.800"
            }}>Telegram</Button>
        </Link>
        <Link href={getSocialLinkTwitter(slug)}>
          <Button
            size={["lg", "sm"]}
            leftIcon={<FaTwitter />}
            background="twitter.600"
            color="whiteAlpha.900"
            _hover={{
              background: "twitter.800"
            }}>Twitter</Button>
        </Link>
        <Link href={getSocialLinkFacebook(slug)}>
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
