import MatchCards from "../components/matchCards";
import match from "../public/matches.json"
import Loading from './loading'
import { useSession } from "next-auth/react";
function Matches({ matches }) {
    const {data:session}  = useSession({ required: true })
    const { data } = matches 
    // const { data } = match
    if (!session) 
        return (
            <Loading/>
        )
    const school = session.user.school
    return ( 
        <MatchCards matches={data} schools={school}/>
     );
}

export default Matches;

export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}matches`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    return {
        props: {
            matches: data
        }
    }
}