import MatchCards from "../components/matchCards";
import match from "../public/matches.json"

function Matches({ matches }) {
    // const { data } = matches 
    const { data } = match
    return ( 
        <MatchCards matches={data} />
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