import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Committees from "../components/committees";
import "@fontsource/ma-shan-zheng"
import styles from '../styles/about.module.css'
import "@fontsource/zcool-xiaowei"

function About({ committees }) {
    const { data } = committees
    return (
        <Box fontFamily={"ZCOOL XiaoWei"} className={styles.body}>
            <Flex justify='center'><Heading pl={20} pt={20} fontFamily={"ZCOOL XiaoWei"} fontSize={72} color="#fcffea">关于我们</Heading></Flex>
            <Text pl={20} pt={10} fontSize={60} color="#fafafa">历史</Text>
            <Text pl={20} pt={5} fontSize={36} color="#fafafa">亚太辩于1981年举办第一届。目前已连续举办31年</Text>
            <Text pl={20} pt={20} fontSize={60} color="#fafafa">筹委团</Text>
            <Committees committees={data} />
        </Box>
    );
}

export default About;

export async function getStaticProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}committees?populate[0]=picture`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    return {
        props: {
            committees: data
        }
    }
}