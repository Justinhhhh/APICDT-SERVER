import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Timelines from '../components/Timelines'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar/>
      <Component {...pageProps} />
      <Timelines/>
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
