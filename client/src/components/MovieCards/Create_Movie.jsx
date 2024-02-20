import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Create_Movie = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
  
    return (
      <Box position="fixed" bottom="10" right="10">
        <IconButton onClick={onOpen} icon={<AddIcon />} isRound={true} size={"lg"} bg="#33373D" color="white"></IconButton>
  
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent my="auto">
            <ModalHeader textAlign="center">Upload Movie</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} placeholder='Movie Title' />
              </FormControl>
  
              <FormControl mt={2}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Upload
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
}

export default Create_Movie
