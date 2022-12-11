import React from 'react'
import {
    Flex,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    AlertDialogCloseButton
  } from '@chakra-ui/react'

  export default function CheckDialog(props) {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const cancelRef = React.useRef()
      
        return (
          <Flex justifyContent={'center'}>
            <AlertDialog
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
            >
              <AlertDialogOverlay />
      
              <AlertDialogContent>
                <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                请检查清楚才点击“确认”，一旦提交就无法再做修改，也无法重新提交。
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    取消
                  </Button>
                  <Button colorScheme='red' ml={3}>
                    确认
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Flex>
        )
      }