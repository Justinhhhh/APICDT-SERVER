import { LinkBox, LinkOverlay, Card, CardHeader, CardBody, Text, Heading, CardFooter } from '@chakra-ui/react'
import Link from 'next/link'
import styles from '../styles/matchCard.module.css'

function MatchCard({ matchNo, teamA, teamB, matchTime }) {
    const date = new Date(matchTime).toLocaleDateString('en-SG')
    const time = new Date(matchTime).toLocaleTimeString('en-SG')
    return (
        <LinkBox align='center' justify='center' w={'75vw'}>
            <Link href={`/gradeTable/${teamA}/${teamB}`}><LinkOverlay>
        <Card align='center' w={'75vw'} h={'30vh'} boxShadow='xl' color='#dedede' mt={10} mb={35} className={styles.body} >
            <CardBody>
            <Heading mt={5} size='lg' fontFamily={'Ma Shan Zheng'}>第{matchNo}场</Heading>
                        <Text fontSize={36} mb={2}>{teamA} vs {teamB}</Text>
                        <Text fontSize={24}>Date: {date}</Text>
                        <Text fontSize={24}>Time: {time}</Text>
                </CardBody>
                
                </Card>
                </LinkOverlay></Link>
            </LinkBox>
      );
}

export default MatchCard;