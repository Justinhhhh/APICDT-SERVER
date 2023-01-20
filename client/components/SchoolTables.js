import { Box, Flex, Heading ,Text,Container, Grid, GridItem,Button, space} from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"
import Schools from "./SchoolTable";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Select
  } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import group1 from '../public/group.json'
import { Row } from 'antd';

function SchoolTables({ schools }) {
    const [group, setGroup] = useState([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H"
      ])
    const { Groups } = group1
    const router = useRouter()
    const {data} = schools
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:1337/api/schools/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringfy({
                data: {
                    group: group
                }
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const res = await response.json()
        console.log(res)
        router.push('/userHome')
    }
    return ( 
        <Container maxW='4xl'>
        < Flex mt = { 20} fontFamily = { 'ZCOOL XiaoWei'} align = { 'center'} flexDir = { 'column'} >
            <Heading fontFamily={'ZCOOL XiaoWei'} fontSize={50} mb={20}>队伍查询</Heading>
                {data.map(school => {
                return (
                        <Schools key={school.id} leaderEmail={school.attributes.leaderEmail} drawn_result={school.attributes.drawn_result} schoolNameEN={school.attributes.schoolNameEN} leaderNameEN={school.attributes.leaderNameEN} leaderNameCN={school.attributes.leaderNameCN} leaderPhone={school.attributes.leaderPhone} schoolNameCN={school.attributes.schoolNameCN} topic1={school.attributes.topic1} topic2={school.attributes.topic2} group={school.attributes.group} point={school.attributes.point}/>
                        
                )
})}
    <Stack  padding={20}>
    <Button type='submit' colorScheme={'blackAlpha'} iconSpacing='10' onClick={handleSubmit}>确认修改/Modification</Button>
    </Stack>
            </Flex>
            </Container>
     );
}

export default SchoolTables;
