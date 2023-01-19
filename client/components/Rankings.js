import { Box, Flex, Heading ,Text,Container} from '@chakra-ui/react'
import "@fontsource/ma-shan-zheng"
import Ranking from "./Ranking";
import styles from '../styles/Timelines.module.css'
function Rankings({ranking}) {
    return ( 
        <Flex  className={styles.body}>
            <Container maxW='6xl'>
            <Text align="center" fontSize='6xl' letterSpacing={3} padding={5} fontFamily= {'Ma Shan Zheng'}>积分榜</Text>
                {ranking.rankings.data.map(rank => {
                
                return (
                    <Ranking key={rank.id} uni1={rank.attributes.University1} p1={rank.attributes.Points1} 
                    uni2={rank.attributes.University2} p2={rank.attributes.Points2}
                    uni3={rank.attributes.University3} p3={rank.attributes.Points3} />
                ) }
            )}
            </Container>
            </Flex>
     );
}

export default Rankings;
