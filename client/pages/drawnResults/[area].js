import { Flex, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import '@fontsource/ma-shan-zheng'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import DrawnResultsArea from '../../components/drawnResultsArea'

const fetcher = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}drawn-results`)
    const res = await response.json()
    const { data } = res
    return data
}

function Area() {
    const router = useRouter()
    const { area } = router.query
    const { data, error } = useSWR(`drawnResults/${area}`, fetcher)

    if (!data) 
        return <></>
    
    return ( 
        <DrawnResultsArea data={data} area={area} />
     );
}

export default Area;
