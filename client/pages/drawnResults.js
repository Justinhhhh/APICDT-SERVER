import { Flex, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import '@fontsource/ma-shan-zheng'
import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch("/api/drawn-results")
    const res = await response.json()
    const { data } = res
    return data
}

function DrawnResults() {
    const { data, error } = useSWR('drawnResults', fetcher)

    if (!data) 
        return <></>
    
    return ( 
        <Flex fontFamily={'Ma Shan Zheng'} mt={10} ml={10} h='92vh' flexDirection={'column'}>
            <Heading fontFamily={'Ma Shan Zheng'} mb={5}>抽签结果</Heading>
            <OrderedList>{data.map((result) => {
                const { attributes } = result
                return (
                    <ListItem fontSize={20} key={data.id}>
                        {`${attributes.schoolName} :   ${attributes.timeUsed}秒`}
                    </ListItem>
                )
            })}</OrderedList>
        </Flex>
     );
}

export default DrawnResults;