import { Flex, Heading, Box, Button, Stack } from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"
import "@fontsource/montserrat"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AlertDialog from '../components/alert'

function Starwars() {
    const [date, setDate] = useState(new Date())
    const [submitted, setSubmitted] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [duration, setDuration] = useState()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endTime = date.getTime()
        const startTime = new Date('2022-12-15T16:00:00')
        const duration = new Date(endTime - startTime.getTime())
        setDuration(duration / 1000)
        setSubmitted(true)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
            router.push('/drawnResults')
        }, 5000)

        try {
            const response = await fetch(`api/drawn-results`, {
                method: 'POST',
            })
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

    return ( 
        <Flex fontFamily={'Ma Shan Zheng'} h={'92vh'} justify='center' align='center' flexDirection={'column'}>
            {showAlert ? <AlertDialog status={'success'} description={`恭喜你！提交用时${Math.round(duration)}秒`} /> : <Box></Box>}
            <Stack align={'center'}>
                {/* <Heading mb={10} fontSize={100}>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</Heading> */}
                {/* <Text fontFamily={'Montserrat'} fontWeight={800} fontSize={100} mb={10}><Time value={date} format="hh:mm:ss" /></Text> */}
                <Heading fontSize={138} mb={10}>{date.toLocaleTimeString()}</Heading>
                <Button fontSize={'72px'} p={10} mb={20} onClick={handleSubmit}>提交</Button>
            </Stack>
            {/* {submitted ? <Button mt={10}><Link href='/'>查看结果</Link></Button> : <Box></Box>} */}
        </Flex>
    );
}

export default Starwars;