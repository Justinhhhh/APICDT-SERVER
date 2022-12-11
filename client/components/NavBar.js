import {
  Flex,
  Box,
} from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"
import Link from 'next/link'

function NavBar(){
  return (
    <Flex bgColor='purple.400' color='black' justify='space-between' h={'8vh'} alignItems='center' fontFamily={'Ma Shan Zheng'} fontWeight={500}>
      <Flex pl={5} fontSize='24px' align='center'>
      <Link href="/" passHref>
        亚太辩论
    </Link>
      </Flex>
      <Flex align={'center'} justify='space-between' h='100%' pr={5} w='35%' fontSize={'18px'}>
    <Link href="/" passHref>
        <Box _hover={{color: 'white'}}>主页</Box>
        </Link>
        
        <Link href="/topic" passHref>
      <Box _hover={{color: 'white'}}>辩题</Box>
        </Link>

    <Link href="/registration" passHref>
      <Box _hover={{color: 'white'}}>选手报名</Box>
        </Link>
        
        <Link href="/login" passHref>
      <Box _hover={{color: 'white'}}>登记</Box>
    </Link>

    <Link href="/about" passHref>
    <Box _hover={{color: 'white'}}>关于我们</Box>
        </Link>

        <Link href="/matches" passHref>
<Box _hover={{color: 'white'}}>比赛信息</Box>
    </Link>
      </Flex>
    </Flex>
    
    )
}

export default NavBar;