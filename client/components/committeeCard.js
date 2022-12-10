import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Image from 'next/image'
import individualPic from '../public/IndividualPic.jpeg'
import "@fontsource/inder"

function CommitteeCard({ name, description }) {
    console.log(description)
    return ( 
        // <Card maxW='sm' ml={100} pb={20} mb={20} mt={20} fontFamily={"Inder"}>
        <Card maxW='sm' fontFamily={"Inder"} mt={10} mb={10} h={'50vh'}>
        <CardBody>
            <Image
            src={individualPic}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>
                {description}
            </Text>
            </Stack>
        </CardBody>
        </Card>
     );
}

export default CommitteeCard;