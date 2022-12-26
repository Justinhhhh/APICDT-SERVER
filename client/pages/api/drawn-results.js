export default async function handler(req, res) {
    if (req.method === 'GET') {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}drawn-results`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        res.status(200).json(data)
    }
    else if (req.method === 'POST') {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}drawn-results`, {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    area: req.body.area,
                    schoolName: req.body.schoolName,
                    timeUsed: req.body.timeUsed
                }
            }),
            headers: {
                'Content-type': 'application/json'
            },
        })
        const data = await response.json()
        res.status(200).json(data)
    }
}