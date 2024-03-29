import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {AlurakutStyles} from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
   font-family: sans-serif;
   background-color: #D9E6F6;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    display: flex;
    max-width: 100%;
    height: auto;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
