import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Image from 'next/image'
import individualPic from '../public/IndividualPic.jpeg'
import "@fontsource/inder"

function CommitteeCard() {
    return ( 
        <Card maxW='sm' ml={100} pb={20} mb={20} mt={20} fontFamily={"Inder"}>
        <CardBody>
            <Image
            src={individualPic}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Amos Chong</Heading>
            <Text>
                The most outstanding student in NTU. Webmaster of APICDT 2023.
            </Text>
            </Stack>
        </CardBody>
        </Card>
     );
}

export default CommitteeCard;