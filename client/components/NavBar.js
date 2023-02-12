import {
  Flex,
  Box,
} from '@chakra-ui/react'
import "@fontsource/zcool-qingke-huangyou"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'

function NavBar() {
  const [drawn, setDrawn] = useState(true)
  const [role, setRole] = useState("")

  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session && status != 'loading') {
      setRole(session.user.role)
    }
  }, [session, status])

  const handleSignOut = async (e) => {
    e.preventDefault()
    const data = await signOut({ redirect: true, callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}` })
    setRole("")
    if (data) {
      router.push(data.url)
    }
  }

  console.log(session)

  return (
    <Flex bgColor='#2f0101' color='whiteAlpha.700' justify='space-between' h={'8vh'} alignItems='center' fontFamily={'ZCOOL QingKe HuangYou'} fontSize={18} letterSpacing='0.42em' fontWeight={400}>
      <Flex pl={5} fontSize='24px' align='center'>
      <Link href="/" passHref>
        亚太辩论
      </Link>
      </Flex>
      {role === 'Participant' ?
          (
            <Flex align={'center'} justify='space-between' h='100%' pr={5} fontSize={'18px'}>
        
        <Link href="/userHome" passHref>
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
            
            <Link href="/" passHref>
          <Flex ml={5} _hover={{ color: 'white', cursor: 'pointer' }} onClick={handleSignOut}>登出</Flex>
          </Link>
          </Flex>
        ) : (role === 'Judge' ?
          (
            <Flex align={'center'} justify='space-between' h='100%' pr={5} fontSize={'18px'}>
          <Link href="/matches" passHref>
        <Flex ml={5} _hover={{color: 'white'}}>评分表</Flex>
            </Link>
            <Link href="/" passHref>
            <Flex ml={5} _hover={{ color: 'white', cursor: 'pointer' }} onClick={handleSignOut}>登出</Flex>
              </Link>
              </Flex>
          ) : (role === 'Committee' ?
            (
              <Flex align={'center'} justify='space-between' h='100%' pr={5}>
              <Link href="/userHome" passHref>
                  <Flex ml={5} _hover={{color: 'white'}}>消息栏</Flex>
                </Link>
                <Link href="/adminMatch" passHref>
                  <Flex ml={5} _hover={{color: 'white'}}>比赛</Flex>
                </Link>
          <Link href="/results" passHref>
                  <Flex ml={5} _hover={{color: 'white'}}>比赛结果</Flex>
                </Link>
                <Link href="/schoolCheck" passHref>
                  <Flex ml={5} _hover={{color: 'white'}}>队伍查询</Flex>
                </Link>
                <Link href="/" passHref>
            <Flex ml={5} _hover={{ color: 'white', cursor: 'pointer' }} onClick={handleSignOut}>登出</Flex>
              </Link>
                </Flex>
            ) : (
              <Flex align={'center'} justify='space-between' h='100%' pr={5}>
              <Link href="/" passHref>
                  <Flex ml={5} _hover={{color: 'white'}} >主页</Flex>
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
            )))
            }
      {/* {session  &&
            <Flex align={'center'} justify='space-between' h='100%' pr={5} fontSize={'18px'}>

          <Link href="/matches" passHref>
        <Flex ml={5} _hover={{color: 'white'}}>比赛信息</Flex>
          </Link>

          <Flex ml={5} _hover={{ color: 'white', cursor: 'pointer' }} onClick={handleSignOut}>登出</Flex>
          </Flex>
          } */}
    </Flex>
    
    )
}

export default NavBar;