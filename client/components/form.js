import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Flex,
    Box,
    Heading,
    Button
} from '@chakra-ui/react'
import country from '../public/country.json'
import AlertDialog from './alert';
import "@fontsource/inder";
import "@fontsource/ma-shan-zheng"
// import Button from './Button';
import { useState } from 'react'
import { useRouter } from 'next/router';

function Form({ information }) {
    const router = useRouter()

    const { Countries } = country
    const [schoolNameCN, setSchoolNameCN] = useState()
    const [schoolNameEN, setSchoolNameEN] = useState()
    const [leaderNameCN, setLeaderNameCN] = useState()
    const [leaderNameEN, setLeaderNameEN] = useState()
    const [topic1, setTopic1] = useState()
    const [topic2, setTopic2] = useState()
    const [leaderEmail, setLeaderEmail] = useState()
    const [leaderPhone, setLeaderPhone] = useState()
    const [submitted, setSubmitted] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        // const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}schools`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         data: {
        //             schoolName: schoolName,
        //             leaderName: leaderName,
        //             leaderEmail: leaderEmail,
        //         }
        //     }),
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        // })
        // const data = await response.json()
        setSubmitted(true)
    }

    const handlePasswordSubmit = async (e) => {
        e.preventDefault()
    
        // const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}auth/local/register`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         email: leaderEmail,
        //         password: password,
        //         username: leaderName
        //     }),
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        // })
        // const data = await response.json()
        // console.log(data)
        setPassword('')
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }

    return (
        <Box bgColor='#e4c5ed' h='92vh' pt={100} pl={100} fontFamily={"Ma Shan Zheng"}>
            <Heading fontSize='48px' fontFamily={"Ma Shan Zheng"}>报名</Heading>
            {!submitted && 
                <div>
            <FormControl>
                <Flex flexDirection='row' mt='59px' mb='29px' fontWeight={'500px'}>
                    <Flex flexDirection='column' mr='54px'>
                    <FormLabel>学校资料</FormLabel>
                                <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' value={schoolNameCN} onChange={(e) => setSchoolNameCN(e.target.value)} placeholder='学校名称-中文' type='text' required/>
                    </Flex>
                    <Flex flexDirection='column'>
                    <FormLabel>队长资料</FormLabel>
                    <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' value={leaderNameCN} onChange={(e) => setLeaderNameCN(e.target.value)} placeholder='队长名称-中文' type='text' required/>
                    </Flex>
                </Flex>
                <Flex flexDirection='row' mt='10px' mb='29px' fontWeight={'500px'}>
                    <Flex flexDirection='column' mr='54px'>
                
                     <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' value={schoolNameEN} onChange={(e) => setSchoolNameEN(e.target.value)} placeholder='学校名称-英文' type='text' required/>
                    </Flex>
                    <Flex flexDirection='column'>   
                    <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' value={leaderNameEN} onChange={(e) => setLeaderNameEN(e.target.value)} placeholder='队长名称-英文' type='text' required/>
                    </Flex>
                </Flex>
                <Flex flexDirection='row' mt='10px' mb='29px' fontWeight={'500px'}>
                    <Flex flexDirection='column' mr='54px'>
                        <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' value={leaderEmail} onChange={(e) => setLeaderEmail(e.target.value)} placeholder='队长电子邮件' type='email' required />
                    </Flex>
                    <Flex mr='54px'>
                    <Select borderColor={'Black'} w='150px' placeholder='国际电话区号'>
                        {Countries.map(country => {
                            return (
                                <option key={country.id}>{country}</option>
                                )
                            })}
                        </Select>
                        <Input ml={5} focusBorderColor='Purple' value={leaderPhone} borderColor={'Black'} w='320px' placeholder='队长联络电话' onChange={(e) => setLeaderPhone(e.target.value)} type='text' required />
                    </Flex>
                </Flex>
                <Flex flexDirection='row' mt='30px' mb='50px' fontWeight={'500px'}>
                    <Flex flexDirection='column' mr='54px'>
                    <FormLabel>辩题一</FormLabel>
                                <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' value={topic1} onChange={(e) => setTopic1 (e.target.value)} placeholder='请选择队伍辩题' type='text' required/>
                    </Flex>
                    <Flex flexDirection='column'>
                    <FormLabel>辩题二</FormLabel>
                    <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' value={topic2} onChange={(e) => setTopic2(e.target.value)} placeholder='请选择队伍辩题' type='text' required/>
                    </Flex>
                </Flex>
            </FormControl>
                    <Button type='submit' onClick={handleSubmit}>报名</Button>
                </div>}
            {submitted && 
                <>
                {showAlert ? <AlertDialog status={'success'} description={`恭喜你！报名成功`} /> : <Box></Box>}
                    <FormControl mt={5}>
                        <FormLabel>密码</FormLabel>
                        <Input placeholder='密码' value={password} type='password' focusBorderColor='Purple' borderColor={'Black'} w='320px' onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                <Button mt={5} type='submit' onClick={handlePasswordSubmit}>提交</Button>
                </>}
        </Box>
    );
}

export default Form;