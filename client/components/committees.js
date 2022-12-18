import CommitteeCard from "./committeeCard";
import { Grid } from '@chakra-ui/react'

function Committees({ committees }) {
    return (
        <Grid templateColumns='repeat(3, 1fr)' ml={6}>
            {committees.map(committee => {
            return (
                <CommitteeCard name={committee.attributes.name} description={committee.attributes.description}/>
            )
        })}
        </Grid>
      );
}

export default Committees;