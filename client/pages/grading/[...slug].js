import { Tabs, Tab, TabList, TabPanels, TabPanel, Flex } from '@chakra-ui/react'
import GradeImpression from '../../components/gradeImpression'
import GradeSummary from '../../components/gradeSummary'
import GradeBestCand from '../../components/gradeBestCand'
import GradeTable from '../../components/gradeTable'

function Grading({ teamName }) {
    if (teamName.length === 2) {
        const teamA = teamName[0]
        const teamB = teamName[1]
        return (
            <Flex h='92vh' w='100vw' justify={'center'}>
            <Tabs variant='enclosed' w='100%'>
                <TabList>
                    <Tab>分数票</Tab>
                    <Tab>印象票</Tab>
                    <Tab>最佳辩手</Tab>
                    <Tab>总结票</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <GradeTable teamA={teamA} teamB={teamB} />
                    </TabPanel>
                    <TabPanel>
                        <GradeImpression teamA={teamA} teamB={teamB} />
                    </TabPanel>
                    <TabPanel>
                        <GradeBestCand teamA={teamA} teamB={teamB} />
                    </TabPanel>
                    <TabPanel>
                    <GradeSummary teamA={teamA} teamB={teamB} />
                    </TabPanel>
                </TabPanels>
                </Tabs>
                </Flex>
        );
    }
}

export default Grading;

export async function getServerSideProps(context) {
    const { slug } = context.params
    return {
        props: {
            teamName: slug
        }
    }
}