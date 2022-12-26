import { getSession, useSession } from "next-auth/react";
import Announcement from "../components/announcement";
import { useRouter } from "next/router";

function ParticipantsHome({ data }) {
    return (
        <Announcement announcement={data.data}></Announcement>
     );
}

export default ParticipantsHome;

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (session === null) {
        return {
            redirect: {
                destination: '/login',
                permanent: true
            }
        }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}announcements`, {
        method: 'GET',
        headers: {
            'Content-headers': 'application/json'
        }
    })

    const res = await response.json()

    return {
        props: {
            data: res
        }
    }
}