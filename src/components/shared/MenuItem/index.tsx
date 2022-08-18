import { Link } from "@chakra-ui/react"

interface MenuItemProps {
  url: string
  text: string
  fromDesktop?: boolean
}

export const MenuItem = ({ url, text, fromDesktop = false }: MenuItemProps) => {
  const themeHover = {
    borderRadius: '5px',
    background: `${fromDesktop ? 'orange.500' : 'black'}`,
    color: `${fromDesktop ? 'white' : 'orange.500'}`
  }

  return (
    <Link padding="16px" marginY='5px' href={url} color="white" _hover={themeHover}>{text}</Link>
  )
}
