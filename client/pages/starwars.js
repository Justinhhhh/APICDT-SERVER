import { Flex, Heading, Text, Button, Stack } from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"
import "@fontsource/montserrat"
import React, { useState, useEffect } from 'react'
import Time from 'react-time-format'

function Starwars() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        
        return function cleanup() {
            clearInterval(timer)
        }
    })
    return ( 
        <Flex fontFamily={'Ma Shan Zheng'} h={'92vh'} justify='center' align='center'>
            <Stack align={'center'}>
                {/* <Heading mb={10} fontSize={100}>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</Heading> */}
                {/* <Text fontFamily={'Montserrat'} fontWeight={800} fontSize={100} mb={10}><Time value={date} format="hh:mm:ss" /></Text> */}
                <Heading fontSize={138} mb={10}>{date.toLocaleTimeString()}</Heading>
                <Button fontSize={'72px'} p={10}>提交</Button>
            </Stack>
        </Flex>
    );
}

export default Starwars;