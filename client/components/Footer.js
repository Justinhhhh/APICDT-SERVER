import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWeibo } from 'react-icons/fa'


export default function Footer() {
  return (
    <Container as="footer" role="contentinfo">
    <Stack
      spacing="8"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      py={{ base: '12', md: '16' }}
    >
      <Stack
        direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
        spacing={{ base: '12', md: '8' }}
      >
        <Stack direction="column" spacing="40">
          <Stack spacing="0" minW="39" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
            <Text mb={30} fontSize={36} fontFamily={"Ma Shan Zheng"}>联系方式</Text>
            </Text>
            <Stack spacing="2" shouldWrapChildren>
            <Text fontSize={20} fontFamily={"Ma Shan Zheng"}>何佳萱：+65 83148709</Text>
            <Text fontSize={20} fontFamily={"Ma Shan Zheng"}>何智圆：+65 86500369</Text>
            <Text fontSize={20} fontFamily={"Ma Shan Zheng"}>沈佳欣：+65 91087660</Text>
            </Stack>
          </Stack>
          <Stack spacing="0" minW="39" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
            <Text mb={30} fontSize={36} fontFamily={"Ma Shan Zheng"}>合作伙伴 Title Partner</Text>
            </Text>
            <Stack spacing="4" shouldWrapChildren>
            <Text mb={30} fontSize={20} fontFamily={"Ma Shan Zheng"}>何佳萱：+65 83148709</Text>
          </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="6"
      pb="10"
      justify="space-between"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
    >
      <Text fontSize="sm" color="subtle">
      &copy; {new Date().getFullYear()} Nanyang Technological University, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Facebook" icon={<FaWeibo fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Facebook" icon={<FaInstagram fontSize="1.25rem" />} />
      </ButtonGroup>
      
    </Stack>
  </Container>
  )
}