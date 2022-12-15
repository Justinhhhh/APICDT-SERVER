import { FormLabel, FormControl, CardBody, Heading, Stack, Card, Avatar, Input, Button, Box, Flex } from "@chakra-ui/react";
import '@fontsource/ma-shan-zheng'

function Login() {
    return (
        <Card fontFamily={'Ma Shan Zheng'} bgColor="white" boxShadow={'lg'} maxW='sm' pb={20} pl={10} pr={10}pt={10} align='center' justifyContent='center'>
            <CardBody>
                <Flex justify={'center'}>
                    <Avatar bg='purple.500'/>
                    </Flex>
            <Stack mt='6' spacing='3' align={'center'}>
            <Heading fontFamily={'Ma Shan Zheng'} fontSize='36' size='md' mb={10}>登录</Heading>
                    <FormControl>
                        <FormLabel fontSize={20}>学校ID</FormLabel>
                        <Input placeholder="Your ID" w={80} />
                    </FormControl>
                </Stack>
                <Button type='submit' mt={'29'} h={'40px'} w={'120px'} colorScheme={'purple'}><Box fontWeight={'600px'}>Login</Box> </Button>
        </CardBody>
        </Card>
      );
}

export default Login;