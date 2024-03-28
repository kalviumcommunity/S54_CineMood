import React from 'react'
import { Box, Center, Input, Text, chakra } from "@chakra-ui/react"

const SearchMood = () => {
  return (
    <div>
      <Box w="100%" bg="#00050D">
        <Center flexDirection="column">
          <chakra.h1 fontSize={{ base: '4xl', sm: '5xl' }} fontWeight="bold" textAlign="center" maxW="600px" bg="#00050D" color={"white"} my={4}>
            Select Your Mood
          </chakra.h1>
          <Input placeholder="Select your mood here..." size="lg" maxW="40%" fontWeight="medium" color={'white'} />
          <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">Ex: Joy, Sad, Romantic</Text>
        </Center>
      </Box>
    </div>
  )
}

export default SearchMood
