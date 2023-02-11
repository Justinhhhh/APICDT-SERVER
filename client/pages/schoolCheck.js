import School from "../components/SchoolTables";

function SchoolCheck({schools}) {
    const res = schools 
    return (
        <School schools={res}/>
    );
}

export default SchoolCheck;

export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}schools`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })

    const data = await response.json()
    return {
        props: {
            schools: data
        }
    }
}