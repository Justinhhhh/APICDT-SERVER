import { Card, CardBody, Flex, Heading, ListItem, Stack, UnorderedList,Text,Box} from "@chakra-ui/react";
import "@fontsource/ma-shan-zheng"
import styles from '../styles/announcement.module.css'
function Announcement({ announcement }) {
    return ( 
        <Flex mt={10} fontFamily={'Ma Shan Zheng'} align='center' flexDir='column' h={'92vh'}>
            <Heading fontFamily={'Ma Shan Zheng'}>最新消息</Heading>
            <Box align='center'>
                {announcement.map((ann) => {
                    const date = new Date(ann.attributes.publishedAt).toLocaleDateString('en-SG')
                    const time = new Date(ann.attributes.publishedAt).toLocaleTimeString('en-SG')
                    return (
                        <Card  align='center' width='80%'  boxShadow='xl' mt={10} mb={30} className={styles.announcement} key={ann.id}>
                        <CardBody >
                        <Heading  fontFamily={'Ma Shan Zheng'} as='h3' size='lg' color='#dedede' align='center'>{`${ann.attributes.title} `}</Heading>
                        <br /> 
                        <Text color='#dedede' >{`${ann.attributes.description} `}</Text>
                        <Text color='#dedede' >{` ${date} ${time}`}</Text>
                        </CardBody>
                        </Card>
                    )
                    
                     } )}
                     </Box>
             
        </Flex>
     );
}

export default Announcement;