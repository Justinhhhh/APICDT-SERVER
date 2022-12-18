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
import "@fontsource/ma-shan-zheng"

function Topic({ topics }) {
    // const { topics } = topic
    return ( 
        <Box fontFamily={"Ma Shan Zheng"} mt={20} mb={20} ml={20}>
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
                        const { attributes } = topicS
                        return (
                            <Tr>
                                <Td>{attributes.aTopic}</Td>
                                <Td>{attributes.bTopic}</Td>
                        </Tr>)
                    })}
                </Tbody>
            </Table>
            </TableContainer>
            </Box>
     );
}

export default Topic;