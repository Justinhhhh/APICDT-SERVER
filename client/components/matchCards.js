import MatchCard from "./matchCard";
import match from "../public/matches.json"
import { Box, Flex, Heading } from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"

function MatchCards() {
    const { matches } = match
    console.log(matches)
    return ( 
        <Box>
            <Heading fontFamily={'Ma Shan Zheng'} ml={20} mt={20} fontSize={48}>比赛</Heading>
        <Flex align='center' flexDirection='column'>
            {matches.map(match => {
                return (
                    <MatchCard key={match.id} matchNo={match.matchNo} teamA={match.teamA} teamB={match.teamB} date={match.date} time={match.time} />
                )
            })}
            </Flex>
            </Box>
     );
}

export default MatchCards;