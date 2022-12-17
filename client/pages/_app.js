import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar/>
      <Component {...pageProps} />
    <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
