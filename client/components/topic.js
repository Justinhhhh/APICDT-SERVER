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
    Text,
} from '@chakra-ui/react'
import "@fontsource/zcool-xiaowei"
import styles from '../styles/topic.module.css'

function Topic({ topics }) {
    // const { topics } = topic
    return ( 
        <Box fontFamily={"ZCOOL XiaoWei"} pt={20} pb={20} pl={20} h={'92vh'} className={styles.body} color="#fcffea">
            <Text mb={30} fontSize={48} >辩题列表</Text>
        <TableContainer width={'60vw'} borderColor='purple'>
            <Table variant='striped' colorScheme='whiteAlpha' borderColor={'black'}>
                <Thead>
                <Tr>
                    <Th fontFamily={"ZCOOL XiaoWei"} fontSize={36} color="#fcffea">辩题</Th>
                </Tr>
                </Thead>
                <Tbody borderColor={'purple'}>
                    {topics.map(topicS => {
                        const { attributes } = topicS
                        return (
                            <Tr key={topicS.id}>
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