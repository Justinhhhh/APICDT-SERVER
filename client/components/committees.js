import CommitteeCard from "./committeeCard";
import { Grid } from '@chakra-ui/react'

function Committees({ committees }) {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            {committees.map(committee => {
            return (
                <CommitteeCard key={committee.id} index={committee.id} name={committee.name} position={committee.position}/>
            )
        })}
        </Grid>
      );
}

export default Committees;