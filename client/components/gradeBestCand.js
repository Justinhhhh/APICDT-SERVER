import { Button, Flex, Heading, Select } from "@chakra-ui/react";
import contestant from '../public/debate.json'
import "@fontsource/zcool-xiaowei"
import { useRouter } from "next/router";

function GradeBestCand({ teamA, teamB }) {
    const { Contestants } = contestant
    const router = useRouter()

    const handleClickA = async (e) => {
        e.preventDefault()
        setTeamWon("teamA")
        if (isAClicked) {
            setIsAClicked(false)
        }
        else {
            setIsAClicked(true)
            setIsBClicked(false)
        }
    }

    const handleClickB = async (e) => {
        e.preventDefault()
        if (isBClicked) {
            setIsBClicked(false)
        }
        else {
            setIsAClicked(false)
            setIsBClicked(true)
        }
        setTeamWon("teamB")
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        router.replace(`http://localhost:3000/gradeSummary/${teamA}/${teamB}`)
    }
    return ( 
        <Flex mt={20} align='center' flexDir={'column'} fontFamily={'ZCOOL XiaoWei'}>
            <Heading fontFamily={'ZCOOL XiaoWei'} fontSize='70' mb={20}>最佳辩手</Heading>
            <Select borderColor={'Black'} w='200px' fontSize={24} placeholder='最佳辩手'>
                        {Contestants.map(contestant => {
                            return (
                                <option key={contestant.id}>{contestant}</option>
                                )
                            })}
            </Select>
            <Button mt={20} colorScheme={'blackAlpha'} fontSize={24} size='lg' onClick={handleSubmit}>提交</Button>
        </Flex>
     );
}

export default GradeBestCand;