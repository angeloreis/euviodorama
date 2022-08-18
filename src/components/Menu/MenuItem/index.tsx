import { Link } from "@chakra-ui/react"

interface MenuItemProps {
    url: string
    text: string
    isMobile: boolean
}

export const MenuItem = ({url, text, isMobile}: MenuItemProps) => {
    const colorSchemaHover = isMobile ? "black" : "white"
    return (
        <Link padding="16px" href={url} color="white" _hover={{
            background: 'white',
            borderRadius: '5px',
            color: colorSchemaHover
        }}>{text}</Link>
    )
}