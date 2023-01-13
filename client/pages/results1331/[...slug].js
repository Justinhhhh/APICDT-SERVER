import { Flex, Heading, Text, Divider } from "@chakra-ui/react";
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
} from '@chakra-ui/react'
import "@fontsource/zcool-xiaowei"
import "@fontsource/ma-shan-zheng"
import result from '../../public/results.json'

function results({ results }) {
    // const { data } = results
    const { data } = result
    console.log(data)
    return (
        data.map(result => {
            return(
            <Flex flexDir={'column'} mb={20} mt={10} ml={20} mr={20} key={result.id} fontFamily={'Ma Shan Zheng'}>
                    <Heading fontFamily={'Ma Shan Zheng'} fontSize={70}>评委：{result.attributes.judge}</Heading>
                    <Heading fontFamily={'Ma Shan Zheng'} fontSize={60} mb={5}>正方</Heading>
                <TableContainer mb={10}>
                        <Table variant='striped' colorScheme='gray'>
    <TableCaption>正方</TableCaption>
    <Thead>
      <Tr>
        <Th>一辩</Th>
        <Th>二辩</Th>
        <Th>三辩</Th>
        <Th>四辩</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>立论（30分）：{result.attributes.teamA1LiLun}</Td>
        <Td>驳论（30分）：{result.attributes.teamA2BoBian}</Td>
        <Td>陈词（30分）：{result.attributes.teamA3ChenCi}</Td>
        <Td>总结（60分）：{result.attributes.teamA4ZongJie}</Td>
      </Tr>
      <Tr>
        <Td>质询（20分）：{result.attributes.teamA1ZhiXun}</Td>
        <Td>质询（30分）：{result.attributes.teamA2ZhiXun}</Td>
        <Td>攻辩（30分）：{result.attributes.teamA3GongBian}</Td>
        <Td>-</Td>
      </Tr>
      <Tr>
        <Td>答辩（10分）：{result.attributes.teamA1DaBian}</Td>
        <Td>-</Td>
        <Td>-</Td>
        <Td>-</Td>
      </Tr>
      <Tr>
        <Td>语言风度（10分）：{result.attributes.teamA1YuYanFengDu}</Td>
        <Td>语言风度（10分）：{result.attributes.teamA2YuYanFengDu}</Td>
        <Td>语言风度（10分）：{result.attributes.teamA3YuYanFengDu}</Td>
        <Td>语言风度（10分）：{result.attributes.teamA4YuYanFengDu}</Td>
    </Tr>
    <Tr>
        <Td fontWeight={800} fontSize={24}>得分：{result.attributes.teamA1Point}</Td>
        <Td fontWeight={800} fontSize={24}>得分：{result.attributes.teamA2Point}</Td>
        <Td fontWeight={800} fontSize={24}>得分：{result.attributes.teamA3Point}</Td>
        <Td fontWeight={800} fontSize={24}>得分：{result.attributes.teamA4Point}</Td>
      </Tr>
    </Tbody>
  </Table>
            </TableContainer>
            
            <Heading fontFamily={'Ma Shan Zheng'} fontSize={60} mb={10}>反方</Heading>
            <TableContainer mb={10}>
  <Table variant='striped' colorScheme='gray'>
    <TableCaption>反方</TableCaption>
    <Thead>
      <Tr>
        <Th>一辩</Th>
        <Th>二辩</Th>
        <Th>三辩</Th>
        <Th>四辩</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>立论（30分）：{result.attributes.teamB1LiLun}</Td>
        <Td>驳论（30分）：{result.attributes.teamB2BoBian}</Td>
        <Td>陈词（30分）：{result.attributes.teamB3ChenCi}</Td>
        <Td>总结（60分）：{result.attributes.teamB4ZongJie}</Td>
      </Tr>
      <Tr>
        <Td>质询（20分）：{result.attributes.teamB1ZhiXun}</Td>
        <Td>质询（30分）：{result.attributes.teamB2ZhiXun}</Td>
        <Td>攻辩（30分）：{result.attributes.teamB3GongBian}</Td>
        <Td>-</Td>
      </Tr>
      <Tr>
        <Td>答辩（10分）：{result.attributes.teamB1DaBian}</Td>
        <Td>-</Td>
        <Td>-</Td>
        <Td>-</Td>
      </Tr>
      <Tr>
        <Td>语言风度（10分）：{result.attributes.teamB1YuYanFengDu}</Td>
        <Td>语言风度（10分）：{result.attributes.teamB2YuYanFengDu}</Td>
        <Td>语言风度（10分）：{result.attributes.teamB3YuYanFengDu}</Td>
        <Td>语言风度（10分）：{result.attributes.teamB4YuYanFengDu}</Td>
    </Tr>
    <Tr>
        <Td fontWeight={800} fontSize={24}>得分：{result.attributes.teamB1Point}</Td>
        <Td fontWeight={800} fontSize={24}>得分：{result.attributes.teamB2Point}</Td>
        <Td fontWeight={800} fontSize={24}>得分：{result.attributes.teamB3Point}</Td>
        <Td fontWeight={800} fontSize={24}>得分：{result.attributes.teamB4Point}</Td>
      </Tr>
    </Tbody>
  </Table>
                    </TableContainer>
                    <Heading fontFamily={'Ma Shan Zheng'}>印象票：{result.attributes.bestImpression}</Heading>
                    <Heading fontFamily={'Ma Shan Zheng'}>最佳辩手：{result.attributes.bestCand}</Heading>
                    <Heading fontFamily={'Ma Shan Zheng'}>总结票：{result.attributes.bestSummary}</Heading>
                    <hr
        style={{
          background: 'black',
          color: 'black',
        borderColor: 'black',
          marginTop: '50px',
          height: '3px',
        }}
      />
                </Flex>
        )})
    )
}

export default results;

// export async function getServerSideProps(context) {
//     const { slug } = context.params
//     const response = await fetch(`http://localhost:1337/api/results?filters[teamA][$eq]=${slug[0]}&filters[teamB][$eq]=${slug[1]}`, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json'
//         }
//     })
//     const data = await response.json()
//     return {
//         props: {
//             results: data
//         }
//     }
// }