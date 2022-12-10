import { FormLabel, FormControl, CardBody, Heading, Stack, Card, Avatar, Input, Button, Box, Flex } from "@chakra-ui/react";

function Login() {
    return (
        <Card bgColor="white" boxShadow={'lg'} maxW='sm' pb={20} pl={10} pr={10}pt={10} fontFamily={"Inder"} align='center' justifyContent='center'>
            <CardBody>
                <Flex justify={'center'}>
                    <Avatar bg='purple.500'/>
                    </Flex>
            <Stack mt='6' spacing='3' align={'center'}>
            <Heading size='md' mb={10}>Login</Heading>
                    <FormControl>
                        <FormLabel>Participant ID</FormLabel>
                        <Input placeholder="Your ID" w={80} />
                    </FormControl>
                </Stack>
                <Button type='submit' mt={'29'} h={'40px'} w={'120px'} colorScheme={'purple'}><Box fontWeight={'600px'}>Login</Box> </Button>
        </CardBody>
        </Card>
      );
}

export default Login;