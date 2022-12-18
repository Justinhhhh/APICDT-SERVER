import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Image from 'next/image'
import individualPic from '../public/IndividualPic.jpeg'
import "@fontsource/ma-shan-zheng"

function CommitteeCard({ name, description }) {
    return ( 
        // <Card maxW='sm' ml={100} pb={20} mb={20} mt={20} fontFamily={"Inder"}>
        <Card maxW='sm' fontFamily={"Ma Shan Zheng"} mt={10} mb={10}>
        <CardBody>
                <Image
            alt={name}
            src={individualPic}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='lg' fontFamily={"Ma Shan Zheng"}>{name}</Heading>
            <Text fontSize={20}>
                {description}
            </Text>
            </Stack>
        </CardBody>
        </Card>
     );
}

export default CommitteeCard;