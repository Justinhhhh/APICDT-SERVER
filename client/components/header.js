import Image from 'next/image'
import { Flex, Heading } from '@chakra-ui/react'
import '@fontsource/ma-shan-zheng'

function Header({ image, title }) {
    return (
        <Flex h={'92vh'} w={'100vw'} align='center' justify='center' bgColor='purple.100'>
            <Flex w='70vw' align={'center'} justify='center'>
                <Image alt={title} src={image} width={200} h='auto'></Image>
                <Flex fontFamily={'Ma Shan Zheng'} fontSize={100} ml={15}>{title}</Flex>
            </Flex>
        </Flex>
    );
}

export default Header;