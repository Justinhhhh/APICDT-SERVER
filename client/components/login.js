import { FormLabel, FormControl, CardBody, Heading, Stack, Card, Avatar, Input, Button, Box, Flex } from "@chakra-ui/react";
import '@fontsource/ma-shan-zheng'
import { signIn } from "next-auth/react";
import { Router } from "next/router";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Login() {
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/participantsHome`,
        })
        console.log(res)

        if (res?.error) {
            console.log(res.error)
        }

        if (res.url) {
            router.replace(res.url)
        }
    }

    return (
        <Card fontFamily={'Ma Shan Zheng'} bgColor="white" boxShadow={'lg'} maxW='sm' pb={20} pl={10} pr={10}pt={10} align='center' justifyContent='center'>
            <CardBody>
                <Flex justify={'center'}>
                    <Avatar bg='purple.500'/>
                    </Flex>
            <Stack mt='6' spacing='3' align={'center'}>
                    <Heading fontFamily={'Ma Shan Zheng'} fontSize='36' size='md' mb={10}>登录</Heading>
                    <FormControl>
                        <FormLabel fontSize={20}>Email</FormLabel>
                        <Input placeholder="Your email" w={80} onChange={e => setEmail(e.target.value)} />
                        <FormLabel fontSize={20}>Password</FormLabel>
                        <Input placeholder="Your password" w={80} onChange={e => setPassword(e.target.value)} type="password"/>
                        </FormControl>
                        <Button type='submit' mt={'29'} h={'40px'} w={'120px'} colorScheme={'purple'} onClick={handleSubmit}>Login</Button>
            </Stack>
        </CardBody>
        </Card>
      );
}

export default Login;