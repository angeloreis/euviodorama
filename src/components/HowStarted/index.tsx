import { Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react"

export const HowStarted = () => {
    const [isMobileScreen] = useMediaQuery('(max-width: 376px)')

    return (
        <Flex
         direction={isMobileScreen ? "column" : "row"}
         alignItems="center"
         justifyContent="center"
         background="orange.400">
        <Flex
         padding="8px 16px"
         width="380px">
          <Image
            src="img/goblin-poster.jpg"
            alt="Poster do Dorama: GOBLIN - THE LONELY AND GREAT GOD"            
            borderRadius="5px"
          />
        </Flex>
        <Flex
         direction="column"
         alignItems="center"
         justifyContent="center"
         backgroundColor="#915b0acc"
         width="780px"
         height="235px"
         borderRadius="5px"
         padding="8px 16px">
          <Heading color="white">
            Eu grávida e resolvi ver algo diferente na netflix
          </Heading>
          <Text as="p" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis
            leo vel justo gravida molestie. Maecenas id nulla est. Mauris vitae
            pharetra ipsum, et dictum justo. Nunc rutrum ex sem, eleifend interdum
            est iaculis eget. Ut in blandit quam. Nulla facilisi. Duis id ex non est
            commodo feugiat fermentum non tortor. Morbi ultricies ante vitae ex
            bibendum, ultrices venenatis odio aliquam. In rutrum congue velit a
            placerat. In maximus neque efficitur neque ultricies feugiat. Cras sed
            molestie risus.
          </Text>
        </Flex>
      </Flex>
    )
}