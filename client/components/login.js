import { FormLabel, FormControl, CardBody, Heading, Stack, Card, Avatar, Input, Button, Box, Flex } from "@chakra-ui/react";
import '@fontsource/ma-shan-zheng'
import { signIn } from "next-auth/react";
import { Router } from "next/router";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import "@fontsource/zcool-xiaowei"
import { getSession } from "next-auth/react";

function Login() {
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        // e.preventDefault()
        const res = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`
        })

        // const getRole = await getRoles()
        // console.log(role)
        console.log(res)

        if (res?.error) {
            console.log(res.error)
        }

        if (res.url) {
            router.replace(res.url)
        }
    }

    return (
        <Card fontFamily={"ZCOOL XiaoWei"} bgColor="whiteAlpha.800" boxShadow={'lg'} maxW='md' pb={20} pl={10} pr={10}pt={10} align='center' justifyContent='center'>
            <CardBody>
                <Flex justify={'center'}>
                    <Avatar bg='#2f0101'/>
                    </Flex>
            <Stack mt='6' spacing='6' align={'center'}>
                    <Heading fontFamily={"ZCOOL XiaoWei"} fontSize='36' size='md' mb={10}>登录</Heading>
                    <FormControl>
                        <FormLabel fontSize={20}>电子邮件</FormLabel>
                        <Input placeholder="电子邮件" w={80} borderColor='black' onChange={e => setEmail(e.target.value)} />
                        <FormLabel fontSize={20} mt={5}>密码</FormLabel>
                        <Input placeholder="密码" w={80} borderColor='black' onChange={e => setPassword(e.target.value)} type="password"/>
                        </FormControl>
                        <Button type='submit' h={'40px'} w={'120px'} colorScheme={'blackAlpha'} onClick={handleSubmit}>Login</Button>
            </Stack>
        </CardBody>
        </Card>
      );
}

export default Login;