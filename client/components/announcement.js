import { Card, CardBody, Flex, Heading, Text, Box, Button} from "@chakra-ui/react";
import "@fontsource/ma-shan-zheng"
import styles from '../styles/announcement.module.css'
import { useEffect, useState } from "react";
import moment from 'moment'
import { useSession } from "next-auth/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router";

function Announcement({ announcement }) {
    const [role, setRole] = useState()
    const router = useRouter()
    announcement.sort((a, b) => b.id - a.id)
    console.log(announcement)
    const { data: session, status } = useSession()
    useEffect(() => {
        if (session && status != 'loading') {
            setRole(session.user.role)
        }
    }, [session, status])



    return ( 
        <Flex mt={10} fontFamily={'Ma Shan Zheng'} align='center' flexDir='column' minH={'92vh'}>
            {role === 'Committee' ? <Flex flexDir={'column'} align={'center'}> <Heading mb={10} fontFamily={'Ma Shan Zheng'}>消息栏</Heading> <Button onClick={() => router.push('/addNews')}><Flex flexDir={'row'} align='center' justify={'center'}><AddIcon/><Flex fontSize={'20'} ml={3}>添加消息</Flex></Flex></Button> </Flex>
                                        : <Heading fontFamily={'Ma Shan Zheng'}>最新消息</Heading>}
            <Box align='center' mt={10} width='100%' >
                {announcement.map((ann) => {
                    // useEffect(() => {
                    //     const date = new Date(ann.attributes.publishedAt).toLocaleDateString()
                    //     const time = new Date(ann.attributes.publishedAt).toLocaleTimeString()
                    // }, [])
                    return (
                        <Flex justify='center' align='center'>
                        <Card  align='center'  boxShadow='xl' width='80%' mt={10} mr={10} mb={30} className={styles.announcement} key={ann.id}>
                        <CardBody >
                        <Heading  fontFamily={'Ma Shan Zheng'} as='h3' size='lg' color='#dedede' align='center'>{`${ann.attributes.title} `}</Heading>
                        <br /> 
                        <Text color='#dedede' >{`${ann.attributes.description} `}</Text>
                                <Text color='#dedede' >{` ${moment(ann.attributes.publishedAt).format('YYYY-MM-DD')} ${moment(ann.attributes.publishedAt).format('hh:mma')}`}</Text>
                                {/* <Text color='#dedede' >{` ${ann.attributes.publishedAt}`}</Text> */}
                        </CardBody>
                        </Card>
                            {role === 'Committee' ? <Button onClick={async() => {
                                const response = await fetch(`http://localhost:1337/api/announcements/${ann.id}`, {
                                    method: 'DELETE'
                                })
                                router.reload()
                            }}><DeleteIcon /></Button> : <Box />}
                            </Flex>
                    )
                
                     } )}
                     </Box>
             
        </Flex>
     );
}

export default Announcement;
