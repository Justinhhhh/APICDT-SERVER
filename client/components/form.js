import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

function Form({ information }) {
    return (
        <FormControl>
            <FormLabel>{information[0]}</FormLabel>
            <Input type='text' />
            <FormLabel>{information[1]}</FormLabel>
            <Input type='email' />
        </FormControl>
    );
}

export default Form;