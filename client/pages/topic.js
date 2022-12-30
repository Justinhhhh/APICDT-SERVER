import Topic from "../components/topic";
import topic from "../public/topics.json"

function TopicPage({ topics }) {
    // const { data } = topics
    const { data } = topic
    return (
        <Topic topics={data}></Topic>
    );
}

export default TopicPage;

export async function getStaticProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}topics`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    const res = await response.json()
    return {
        props: {
            topics: res
        }
    }
}