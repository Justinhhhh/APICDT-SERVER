import { Flex, Heading, Box, Button, Stack, Select } from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"
import "@fontsource/montserrat"
import React, { useState, useEffect, use } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AlertDialog from '../components/alert'
import { useSession, signIn, signOut } from 'next-auth/react'
import countries from '../public/country.json'

function Starwars() {
    const { data: session } = useSession()
    if (!session) 
        return (
            <h1>Loading...</h1>
        )
    const email = session.user.email
    const { Countries } = countries

    const [date, setDate] = useState(new Date())
    const [submitted, setSubmitted] = useState(false)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    const [showFailAlert, setShowFailAlert] = useState(false)
    const [area, setArea] = useState()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!area) {
            setShowFailAlert(true)
            setTimeout(() => {
                setShowFailAlert(false)
            }, 5000)
            return null
        }

        const endTime = date.getTime()
        const startTime = new Date('2022-12-15T16:00:00')
        const newDuration = endTime - startTime.getTime()
        const duration = newDuration / 1000
        setSubmitted(true)
        setShowSuccessAlert(true)
        setTimeout(() => {
            setShowSuccessAlert(false)
            router.push(`/drawnResults/${area}`)
        }, 5000)

        try {
            const userResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}schools?filters[leaderEmail][$eq]=${email}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const userRes = await userResponse.json()
            const schoolName = userRes.data[0].attributes.schoolName
            console.log(schoolName, area, duration)
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}drawn-results`, {
                method: 'POST',
                body: JSON.stringify({
                    data: {
                        area: area,
                        schoolName: schoolName,
                        timeUsed: duration
                    }
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            console.log(response)
            const res = await response.json()
            const { data } = res
        }
        catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        const timerForTime = setInterval(() => setDate(new Date()), 1000)
        
        return () => {
            clearInterval(timerForTime)
        }
    }, [])

    if (session === null) {
        router.push('/login')
    }

    return ( 
    <>
            {session && (<Flex fontFamily={'Ma Shan Zheng'} h={'92vh'} justify='center' align='center' flexDirection={'column'}>
                {showSuccessAlert ? <AlertDialog status={'success'} description={`成功提交！页面将于5秒后跳转`} /> : <Box></Box>}
                {showFailAlert ? <AlertDialog status={'error'} description={`请选择地区！`} /> : <Box></Box>}
            <Stack align={'center'}>
                {/* <Heading mb={10} fontSize={100}>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</Heading> */}
                {/* <Text fontFamily={'Montserrat'} fontWeight={800} fontSize={100} mb={10}><Time value={date} format="hh:mm:ss" /></Text> */}
                <Select borderColor={'Black'} w='150px' placeholder='地区' onChange={(e) => {setArea(e.target.value)}}>
                        {Countries.map(country => {
                            return (
                                <option key={country.id}>{country}</option>
                                )
                            })}
                        </Select>
                <Heading fontSize={138} mb={10}>{date.toLocaleTimeString()}</Heading>
                <Button fontSize={'72px'} p={10} mb={20} onClick={handleSubmit}>提交</Button>
            </Stack>
            {/* {submitted ? <Button mt={10}><Link href='/'>查看结果</Link></Button> : <Box></Box>} */}
            </Flex>)}
            </>
    );
}

Starwars.auth = true
export default Starwars;