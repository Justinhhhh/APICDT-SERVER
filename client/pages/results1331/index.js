import match from "../../public/matches.json"
import styles from "../../styles/matchCard.module.css"
import { Box, Heading, Flex, Card, CardBody, LinkOverlay, LinkBox, Text } from "@chakra-ui/react"
import Link from "next/link"
import "@fontsource/ma-shan-zheng"

function Matches({ matches }) {
    // const { data } = matches 
    const { data } = match
    return (
        <Box fontFamily={'Ma Shan Zheng'}>
            <Heading fontFamily={'Ma Shan Zheng'} ml={20} mt={20} fontSize={48}>比赛结果</Heading>
        <Flex align='center' flexDirection='column'>
                {data.map(match => {
                    const date = new Date(match.attributes.matchTime).toLocaleDateString('en-SG')
                    const time = new Date(match.attributes.matchTime).toLocaleTimeString('en-SG')
                return (
                    <LinkBox align='center' justify='center' w={'75vw'} key={match.id}>
            <Link href={`/results1331/${match.attributes.teamA}/${match.attributes.teamB}`}><LinkOverlay>
        <Card align='center' w={'75vw'} h={'30vh'} boxShadow='xl' color='#dedede' mt={10} mb={35} className={styles.body} >
            <CardBody>
            <Heading mt={5} size='lg' fontFamily={'Ma Shan Zheng'}>第{match.attributes.matchNo}场</Heading>
                        <Text fontSize={36} mb={2}>{match.attributes.teamA} vs {match.attributes.teamB}</Text>
                        <Text fontSize={24}>Date: {date}</Text>
                        <Text fontSize={24}>Time: {time}</Text>
                </CardBody>
                
                </Card>
                </LinkOverlay></Link>
            </LinkBox>
                )
            })}
            </Flex>
            </Box>
      );
}

export default Matches;