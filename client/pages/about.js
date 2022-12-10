import { Box, Text } from "@chakra-ui/react";
import Committees from "../components/committees";
import "@fontsource/ma-shan-zheng"

function About() {
    return (
        <Box fontFamily={"Ma Shan Zheng"}>
            <Text fontSize={60} pl={20} pt={20}>筹委团</Text>
            <Committees />
        </Box>
    );
}

export default About;