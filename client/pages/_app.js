import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CheckDialog from '../components/checkDialog'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar/>
      <CheckDialog/>
      <Component {...pageProps} />
    <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
