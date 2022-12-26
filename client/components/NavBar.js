import {
  Flex,
  Box,
} from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'

function NavBar() {
  const [drawn, setDrawn] = useState(true)
  const { data: session, status } = useSession()
  const router = useRouter()
  if (session === undefined) {
    return (
      <h1>Loading...</h1>
    )
  }

  const handleSignOut = async () => {
    const data = await signOut({ redirect: true, callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}` })
    if (data) {
      router.push(data.url)
    }
  }

  return (
    <Flex bgColor='purple.400' color='black' justify='space-between' h={'8vh'} alignItems='center' fontFamily={'Ma Shan Zheng'} fontWeight={500}>
      <Flex pl={5} fontSize='24px' align='center'>
      <Link href="/" passHref>
        亚太辩论
      </Link>
      </Flex>
      {!session && (
      <Flex align={'center'} justify='space-between' h='100%' pr={5} fontSize={'18px'}>
      <Link href="/" passHref>
          <Flex ml={5} _hover={{color: 'white'}}>主页</Flex>
        </Link>
        
        <Link href="/topic" passHref>
          <Flex ml={5} _hover={{color: 'white'}}>辩题</Flex>
        </Link>

    <Link href="/registration" passHref>
      <Flex ml={5} _hover={{color: 'white'}}>选手报名</Flex>
        </Link>
        
        <Link href="/login" passHref>
      <Flex ml={5} _hover={{color: 'white'}}>登录</Flex>
    </Link>

    <Link href="/about" passHref>
    <Flex ml={5} _hover={{color: 'white'}}>关于我们</Flex>
          </Link>
          </Flex>
          )}
          {session &&
            <Flex align={'center'} justify='space-between' h='100%' pr={5} fontSize={'18px'}>
        
        <Link href="/participantsHome" passHref>
        <Flex ml={5} _hover={{color: 'white'}}>主页</Flex>
          </Link>

          <Link href="/matches" passHref>
        <Flex ml={5} _hover={{color: 'white'}}>比赛信息</Flex>
          </Link>
          
          <Link href="/starwars" passHref>
    <Flex ml={5} _hover={{color: 'white'}}>抽签</Flex>
          </Link>
        
          <Link href="/drawnResults" passHref>
          <Flex ml={5} _hover={{color: 'white'}}>抽签结果</Flex>
          </Link>

          <Flex ml={5} _hover={{ color: 'white', cursor: 'pointer' }} onClick={handleSignOut}>登出</Flex>
          </Flex>
          }
    </Flex>
    
    )
}

export default NavBar;