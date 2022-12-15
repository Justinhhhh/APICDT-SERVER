import { Box, Text, Heading } from "@chakra-ui/react";
import Committees from "../components/committees";
import "@fontsource/ma-shan-zheng"

function About() {
    return (
        <Box fontFamily={"Ma Shan Zheng"}>
            <Heading pl={20} pt={20} fontFamily={"Ma Shan Zheng"} fontSize={72}>关于我们</Heading>
            <Text pl={20} pt={10} fontSize={60}>历史</Text>
            <Text pl={20} pt={5} fontSize={36}>亚太辩于1981年举办第一届。目前已连续举办31年</Text>
            <Text pl={20} pt={20} fontSize={60}>筹委团</Text>
            <Committees />
        </Box>
    );
}

export default About;