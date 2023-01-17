import MatchCard from "./matchCard";
import { Box, Flex, Heading } from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"

function MatchCards({ matches }) {
    return ( 
        <Box fontFamily={'Ma Shan Zheng'}>
            <Heading fontFamily={'Ma Shan Zheng'} ml={20} mt={20} fontSize={48}>比赛</Heading>
        <Flex align='center' flexDirection='column'>
                {matches.map(match => {
                return (
                    <MatchCard key={match.id} id={match.id} matchType={match.attributes.matchType} teamA={match.attributes.teamA} teamB={match.attributes.teamB} matchTime={match.attributes.matchTime} />
                )
            })}
            </Flex>
            </Box>
     );
}

export default MatchCards;