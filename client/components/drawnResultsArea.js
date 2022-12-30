import { Flex, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import '@fontsource/ma-shan-zheng'

function DrawnResultsArea({ data, area }) {
    const areaFilter = data.filter(result => result.attributes.area == area)
    
    return ( 
        <Flex fontFamily={'Ma Shan Zheng'} mt={10} ml={10} h='92vh' flexDirection={'column'}>
            <Heading fontFamily={'Ma Shan Zheng'} mb={5}>{`抽签结果（地区：${area}）`}</Heading>
            <OrderedList>{areaFilter.map((result) => {
                const { attributes } = result
                return (
                    <ListItem fontSize={20} key={result.id}>
                        {`${attributes.schoolName} :   ${attributes.timeUsed}秒`}
                    </ListItem>
                )
            })}</OrderedList>
        </Flex>
     );
}

export default DrawnResultsArea