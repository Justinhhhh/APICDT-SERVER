import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Flex,
    Button,
    Box,
    Heading
} from '@chakra-ui/react'
import country from '../public/country.json'
import "@fontsource/inder";


function Form({ information }) {
    const { Countries } = country
    return (
        <Box bgColor='#e4c5ed' h='92vh' pt={100} pl={100} fontFamily={"Inder"}>
            <Heading fontSize='48px' fontFamily={"Inder"}>Participants Registration</Heading>
            <FormControl>
                <Flex flexDirection='row' mt='59px' mb='29px' fontWeight={'500px'}>
                    <Flex flexDirection='column' mr='54px'>
                    <FormLabel>{`${information[0]} *`}</FormLabel>
                    <Input focusBorderColor='Purple' borderColor={'Black'} w='320px'  placeholder='Your Name' type='text' required/>
                    </Flex>
                    <Flex flexDirection='column'>
                    <FormLabel>{`${information[1]} *`}</FormLabel>
                    <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' placeholder='eg. 1234@example.edu.sg' type='email' required/>
                    </Flex>
                </Flex>
                <Flex flexDirection='row' mt='10px' mb='29px' fontWeight={'500px'}>
                    <Flex flexDirection='column' mr='54px'>
                        <FormLabel>{`${information[2]} *`}</FormLabel>
                        <Input focusBorderColor='Purple' borderColor={'Black'} w='320px' placeholder='Your school' type='text' required />
                    </Flex>
                    <Flex flexDirection='column' mr='54px'>
                    <FormLabel>{`${information[3]} *`}</FormLabel>
                    <Select borderColor={'Black'} w='320px' placeholder='Select country'>
                        {Countries.map(country => {
                            return (
                                <option key={country.id}>{country}</option>
                                )
                            })}
                    </Select>
                    </Flex>
                </Flex>
            </FormControl>
            <Button type='submit' mt={'29'} h={'40px'} w={'120px'} colorScheme={'purple'}><Box fontWeight={'600px'}>Submit</Box> </Button>
        </Box>
    );
}

export default Form;