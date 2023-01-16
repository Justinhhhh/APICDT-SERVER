import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"


export default async function handler(req, res) {
    const session = await unstable_getServerSession(req, res, authOptions)
    
    if (!session) {
        res.status(400).json({message: 'User not logged in'})
    }
    
    const email = session.user.email

    if (req.method === 'GET') {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}user-roles?filters[email][$eq]=${email}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        res.status(200).json(data)
    }
}