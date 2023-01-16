import { useRouter } from "next/router";
import { Flex, Heading } from "@chakra-ui/react";
import "@fontsource/zcool-xiaowei"
import GradeTable from "../../components/gradeTable";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

function Team({ teamName, judgeName }) {
    if (teamName.length == 2) {
        const teamA = teamName[0]
        const teamB = teamName[1]
        return ( 
            <Flex flexDir={'column'} align={'center'} mt={20}>
                <Heading fontFamily={'ZCOOL XiaoWei'}>{`正方：${teamA} 反方：${teamB}`}</Heading>
                <GradeTable teamA={teamA} teamB={teamB} judgeName={judgeName} />
            </Flex>
        );
    }
}

export default Team;

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
    
    if (!session || session.user.role != 'Judge') {
        return {
            redirect: {
                destination: '/login',
                permanent: true,
            }
        }
    }

    const { slug } = context.params

    return {
        props: {
            teamName: slug,
            judgeName: session.user.name
        }
    }
}