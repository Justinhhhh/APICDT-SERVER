import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Image from 'next/image'
import individualPic from '../public/IndividualPic.jpeg'
import "@fontsource/zcool-xiaowei"

function CommitteeCard({ name, description }) {
    return ( 
        <Card maxW='sm' fontFamily={"ZCOOL XiaoWei"} bgColor='#000000' boxShadow='lg' mt={10} ml={10} mb={10} color="#fafafa">
        <CardBody>
                <Image
            alt={name}
            src={individualPic}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='lg' fontFamily={"ZCOOL XiaoWei"}>{name}</Heading>
            <Text fontSize={20}>
                {description}
            </Text>
            </Stack>
        </CardBody>
        </Card>
     );
}

export default CommitteeCard;