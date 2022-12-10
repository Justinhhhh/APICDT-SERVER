import CommitteeCard from "./committeeCard";
import committee from '../public/committees.json'
import { Grid } from '@chakra-ui/react'

function Committees() {
    const { committees } = committee
    return (
        <Grid templateColumns='repeat(3, 1fr)' ml={6}>
            {committees.map(committee => {
            return (
                <CommitteeCard name={committee.name} description={committee.description} key={committee.id} />
            )
        })}
        </Grid>
      );
}

export default Committees;