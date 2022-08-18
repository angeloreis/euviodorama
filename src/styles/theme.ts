import { extendTheme } from '@chakra-ui/react'

const myTheme = {
  colors: {
    orange: {
      50: '#ffb100',
      100: '#ffc100',
      200: '#ff9a00',
      300: '#ff8100',
      400: '#ff7400',
      500: '#ff8000',
      600: '#ff7413',
      700: '#ff7417',
      800: '#ff7430',
      900: '#ff7510'
    }
  },
  fonts: {
    body: `'Noto Sans', Sans-serif`,
    heading: `'Noto Sans', Sans-serif`,
    mono: 'Ubuntu, sans-serif'
  },
  
}

export const theme = extendTheme({ myTheme })
