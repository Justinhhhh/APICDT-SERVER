import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar/>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
