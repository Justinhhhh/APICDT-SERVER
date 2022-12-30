import { getSession, useSession } from "next-auth/react";
import Announcement from "../components/announcement";
import { useRouter } from "next/router";
import announcement from "../public/announcement.json"

function ParticipantsHome(params) {
    const { data } = announcement
    return (
        <Announcement announcement={data}></Announcement>
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