import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    Flex,
    Center
  } from '@chakra-ui/react'

function AlertDialog({ status, description }) {
    return (
        <Flex justifyContent={'center'}>
            <Alert status={status} w={'50vw'}>
                <AlertIcon />
                <AlertTitle>{status}</AlertTitle>
                <AlertDescription>{description}</AlertDescription>
            </Alert>
        </Flex>
    )
}

export default AlertDialog;