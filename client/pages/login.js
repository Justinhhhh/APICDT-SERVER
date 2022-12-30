import Login from "../components/login";
import { Flex } from '@chakra-ui/react'
import styles from '../styles/login.module.css'

function LoginPage() {
    return (
        <Flex h="92vh" justify='center' align={'center'} className={styles.body}>
            <Login />
        </Flex>
      );
}

export default LoginPage;