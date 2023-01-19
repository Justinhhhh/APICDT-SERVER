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
    Text
  } from '@chakra-ui/react'
  import "@fontsource/ma-shan-zheng"

function Ranking({uni1,p1,uni2,p2,uni3,p3}) {

    return (
        
        <TableContainer paddingBottom={10}>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th  fontFamily= {'Ma Shan Zheng'} fontSize='3xl' padding={5}>大学</Th>
        <Th fontFamily= {'Ma Shan Zheng'} fontSize='3xl'padding={5} isNumeric>积分</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td  color='white' >{uni1}</Td>
        <Td color='white' isNumeric>{p1}</Td>
      </Tr>
      <Tr>
        <Td color='white'>{uni2}</Td>

        <Td color='white' isNumeric>{p2}</Td>
      </Tr>
      <Tr>
        <Td color='white'>{uni3}</Td>
        <Td color='white' isNumeric>{p3}</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th fontFamily= {'Ma Shan Zheng'}fontSize='1xl' >大学</Th>
        <Th fontFamily= {'Ma Shan Zheng'} fontSize='1xl' isNumeric>积分</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer >

      );
}

export default Ranking;