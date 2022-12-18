import { LinkBox, LinkOverlay, Card, CardHeader, CardBody, Text, Heading, CardFooter } from '@chakra-ui/react'
import Link from 'next/link'


function MatchCard({ matchNo, teamA, teamB, date, time }) {
    return (
        <LinkBox align='center' justify='center' w={'75vw'}>
                <LinkOverlay href="/grading">
        <Card align='center' w={'75vw'} h={'30vh'} boxShadow='xl' mt={10} mb={35} bgColor='purple.100'>
            <CardBody>
            <Heading size='lg' fontFamily={'Ma Shan Zheng'}>第{matchNo}场</Heading>
                        <Text fontSize={36} mb={2}>{teamA} vs {teamB}</Text>
                        <Text fontSize={24}>Date: {date}</Text>
                        <Text fontSize={24}>Time: {time}</Text>
                </CardBody>
                
                </Card>
                </LinkOverlay>
            </LinkBox>
      );
}

export default MatchCard;