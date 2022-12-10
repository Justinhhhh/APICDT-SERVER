import {
  Flex,
  Button,
  Heading
} from '@chakra-ui/react'

import NextLink from 'next/link'

function NavBar(){
    return(
    <Flex position="fixed">
    <Heading fontSize='20px' padding={9}>亚太辩</Heading>
    <Flex position="fixed" top="1rem" right="1rem" align="center">
    <NextLink href="/" passHref>
      <Button  variant="ghost" aria-label="Contact" my={5} w="100%">
        Home
      </Button>
    </NextLink>

    <NextLink href="/about" passHref>
      <Button variant="ghost" aria-label="Contact" my={5} w="100%">
        About
      </Button>
    </NextLink>

    <NextLink href="/contact" passHref>
      <Button variant="ghost" aria-label="Contact" my={5} w="100%">
        Contact
      </Button>
    </NextLink>
    </Flex>
    </Flex>
    )
}

export default NavBar;