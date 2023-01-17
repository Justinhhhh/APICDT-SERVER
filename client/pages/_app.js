import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
    <ChakraProvider>
      <NavBar/>
        <Component {...pageProps} />
    <Footer/>
        </ChakraProvider>
      </SessionProvider>
  )
}

export default MyApp
