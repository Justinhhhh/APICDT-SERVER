import MatchCards from "../components/matchCards";

function Matches({ matches }) {
    const { data } = matches 
    return ( 
        <MatchCards matches={data} />
     );
}

export default Matches;

export async function getServerSideProps() {
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