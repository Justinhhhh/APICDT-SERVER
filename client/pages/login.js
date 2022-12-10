import Login from "../components/login";
import { Flex } from '@chakra-ui/react'

function LoginPage() {
    return (
        <Flex h="92vh" justify='center' align={'center'} bgColor="#e4c5ed">
            <Login />
        </Flex>
      );
}

export default LoginPage;