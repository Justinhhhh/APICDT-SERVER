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
import "@fontsource/zcool-xiaowei"
function SchoolTables({ schools }) {
    const { Groups } = group1
    const router = useRouter()
    const {data} = schools
    const [group, setGroup] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("group")
        console.log(group)
        for (const s of data ){
        const response = await fetch(`http://localhost:1337/api/schools/${s.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    group: group[s.id]
                }
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const res = await response.json()
        console.log(res)
        console.log(s.id)
    }
    router.push('/userHome')
}
    const updateState = (index) => (e) => {
        console.log(group)
        const newArray = group
        console.log(index)
        newArray[index] = e.target.value;
        setGroup(newArray)
        console.log(group)
      };
    return ( 
        <Container maxW='4xl'>
        < Flex mt = { 20} fontFamily = { 'ZCOOL XiaoWei'} align = { 'center'} flexDir = { 'column'} >
            <Heading fontFamily={'ZCOOL XiaoWei'} fontSize={50} mb={20}>队伍查询</Heading>
                {data.map(school => {
                return (
                      //  <Schools key={school.id} leaderEmail={school.attributes.leaderEmail} drawn_result={school.attributes.drawn_result} schoolNameEN={school.attributes.schoolNameEN} leaderNameEN={school.attributes.leaderNameEN} leaderNameCN={school.attributes.leaderNameCN} leaderPhone={school.attributes.leaderPhone} schoolNameCN={school.attributes.schoolNameCN} topic1={school.attributes.topic1} topic2={school.attributes.topic2} group={school.attributes.group} point={school.attributes.point}/>
                      <TableContainer mb={10} key={school.id}>
                      <Table variant='striped' colorScheme='gray' layout='2'>
                      <Thead>
                <Tr>
                  <Th>学校名字（中）</Th>
                  <Th>队长名字（中）</Th>
                  <Th>队长电话</Th>
                  <Th>辩题一</Th>
                  <Th>邮箱</Th>
                </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                  <Td>{school.attributes.schoolNameCN}</Td>
                  <Td>{school.attributes.leaderNameCN}</Td>
                  <Td>{school.attributes.leaderPhone}</Td>
                  <Td>{school.attributes.topic1}</Td>
                  <Td>{school.attributes.leaderEmail}</Td>
                  </Tr>
                  </Tbody>
              </Table>
              <Table variant='striped' colorScheme='gray' layout='2'>
                      <Thead>
                <Tr>
                  <Th>学校名字（英）</Th>
                  <Th>队长名字（英）</Th>
                  <Th>小组</Th>
                  <Th>辩题二</Th>
                  <Th>积分</Th>
                </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                  <Td>{school.attributes.schoolNameEN}</Td>
                  <Td>{school.attributes.leaderNameEN}</Td>
                  <Td>
                  <Select  placeholder={school.attributes.group} onChange={updateState(school.id)}> 
                      <option value='无'>无</option>
                  {
                  Groups.map((value) => {
                      if (value != school.attributes.group){
                      return(
                      <option value={value}>{value}</option>
                      )}})}
                  </Select>
                  </Td>
                  <Td>{school.attributes.topic2}</Td>
                  <Th>{school.attributes.point}</Th>
                  </Tr>
                  </Tbody>
              </Table>
              
              </TableContainer>
                        
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
