import { Flex, Grid, GridItem, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import '@fontsource/ma-shan-zheng'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import DrawnResultsArea from '../../components/drawnResultsArea'
import CountriesName from '../../public/country.json'
import results from '../../public/drawnResults.json'

const fetcher = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}drawn-results`)
    const res = await response.json()
    const { data } = res
    return data
}

function DrawnResults() {
    const { Countries } = CountriesName
    // const { data, error } = useSWR(`drawnResults`, fetcher)
    const {data} = results
    if (!data) 
        return <></>
    
    return (
        <Grid templateColumns={'repeat(2, 1fr)'}>
    {Countries.map((country) => {
        return (
            <GridItem key={country.id}><DrawnResultsArea data={data} area={country}/></GridItem>
        )
    })}
            </Grid>
    )
}

export default DrawnResults;