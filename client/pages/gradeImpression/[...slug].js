import { useRouter } from "next/router";
import GradeImpression from "../../components/gradeImpression";
import { Flex, Heading } from "@chakra-ui/react";
import "@fontsource/zcool-xiaowei"

function Team({ teamName }) {
    if (teamName.length == 2) {
        const teamA = teamName[0]
        const teamB = teamName[1]
        return ( 
            <Flex flexDir={'column'} align={'center'} mt={20} h='92vh'>
                <Heading fontFamily={'ZCOOL XiaoWei'}>{`正方：${teamA} 反方：${teamB}`}</Heading>
                <GradeImpression teamA={teamA} teamB={teamB} />
            </Flex>
        );
    }
}

export default Team;

export async function getServerSideProps(context) {
    const { slug } = context.params
    return {
        props: {
            teamName: slug
        }
    }
}