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
    Box,
    Text
} from '@chakra-ui/react'
import topic from "../public/topics.json"
import "@fontsource/ma-shan-zheng"

function Topic() {
    const { topics } = topic
    return ( 
        <Box fontFamily={"Ma Shan Zheng"} mb={20} ml={20}>
            <Text mb={30} fontSize={48}>辩题列表</Text>
        <TableContainer width={'60vw'} borderColor='purple'>
            <Table variant='striped' colorScheme='purple' borderColor={'purple'}>
                <Thead>
                <Tr>
                    <Th fontFamily={"Ma Shan Zheng"} fontSize={36}>辩题</Th>
                </Tr>
                </Thead>
                <Tbody borderColor={'purple'}>
                    {topics.map(topicS => {
                        const { topic } = topicS
                        return (
                            <Tr>{
                                topic.map(t => {
                                    return (
                                        <Td>{t}</Td>
                                    )
                                })}
                        </Tr>)
                    })}
                </Tbody>
            </Table>
            </TableContainer>
            </Box>
     );
}

export default Topic;