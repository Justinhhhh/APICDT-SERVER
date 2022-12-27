import { Flex, Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import "@fontsource/ma-shan-zheng"

function Announcement({ announcement }) {
    return ( 
        <Flex mt={10} fontFamily={'Ma Shan Zheng'} align='center' flexDir='column' h={'92vh'}>
            <Heading fontFamily={'Ma Shan Zheng'}>最新消息</Heading>
            <UnorderedList mt={10} fontSize={20}>
                {announcement.map((ann) => {
                    const date = new Date(ann.attributes.publishedAt).toLocaleDateString('en-SG')
                    const time = new Date(ann.attributes.publishedAt).toLocaleTimeString('en-SG')
                    return (
                        <ListItem key={ann.id}>{`${ann.attributes.title} ${ann.attributes.description} ${date} ${time}`}</ListItem>
                    )
                })}
            </UnorderedList>
        </Flex>
     );
}

export default Announcement;