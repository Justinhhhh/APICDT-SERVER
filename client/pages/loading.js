import { Flex, Spinner } from "@chakra-ui/react";

function Loading() {
    return (
        <Flex h={'92vh'} align='center' justify={'center'}>
            <Spinner size='xl'/>
        </Flex>
      );
}

export default Loading;