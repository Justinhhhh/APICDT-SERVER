import { Flex, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import '@fontsource/ma-shan-zheng'
import useSWR from 'swr'
import drawnResult from '../public/drawnResults.json'

function DrawnResults() {
    const { data, error } = useSWR('drawnResults', async () => {
        return drawnResult
    })

    if (!data) 
        return <></>
    
    return ( 
        <Flex fontFamily={'Ma Shan Zheng'} mt={10} ml={10} h='92vh' flexDirection={'column'}>
            <Heading fontFamily={'Ma Shan Zheng'} mb={5}>抽签结果</Heading>
            <OrderedList>{data.results.map((result) => {
                return (
                    <ListItem fontSize={20} key={data.results.id}>
                        {result.school}: {result.time}
                    </ListItem>
                )
            })}</OrderedList>
        </Flex>
     );
}

export default DrawnResults;