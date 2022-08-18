import { Flex } from '@chakra-ui/react'
// import { BlogSection } from 'components/BlogSection'
import { Header } from 'components/Header'
import { HowStarted } from 'components/Sections/HowStarted'
import { ImageSlider } from 'components/Sections/ImageSlider'
import { Main } from 'components/Main'

interface HomeProps {
  maintenance: boolean
}

export default function Home({ maintenance }: HomeProps) {
  if (maintenance) {
    return <Main />
  }

  return (
    <Flex direction="column" width="100vw" background='black' height='100vh'>
      <Header />
      <ImageSlider />
      <HowStarted />
    </Flex>
  )
}
