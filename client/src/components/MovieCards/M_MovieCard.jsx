import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsFillStarFill, BsHandThumbsDown, BsHandThumbsUp, BsPlayCircleFill, BsPlayFill } from "react-icons/bs";
import {AddIcon} from '@chakra-ui/icons'

const M_MovieCard = ({Movie_Data}) => {

  return (
    <div>
        <Card maxW='sm'>
        <Box bg="#00050D" p={4} borderRadius="md" border="2px solid #33373d">
                <Stack spacing={4}>
                <Image src={Movie_Data.CoverIMG} alt={Movie_Data.Title} borderRadius="lg" />
                <VStack mt="6" spacing="3" alignItems={"left"}>
                    <Heading size="md" color="#ffffff">
                    {Movie_Data.Title}
                    </Heading>
                    <Text color="#aaaaaa">Rating: {Movie_Data.Rating}</Text>
                </VStack>
                <Divider />
                <Stack direction="row" spacing="2" alignItems="center">
                    <Button leftIcon={<BsPlayFill />} bg="#33373d" color="#aaaaaa">
                    Watch Now
                    </Button>
                    <Button bg="#33373d" color="#aaaaaa">
                    <AddIcon />
                    </Button>
                    <Button bg="#33373d" color="#aaaaaa">
                    <BsHandThumbsUp />
                    </Button>
                    <Text color="#aaaaaa">{Movie_Data.Likes}</Text>
                    <Button bg="#33373d" color="#aaaaaa">
                    <BsHandThumbsDown />
                    </Button>
                    <Text color="#aaaaaa">{Movie_Data.Dislikes}</Text>
                </Stack>
                </Stack>
            </Box>
        </Card>
      
    </div>
  )
}

export default M_MovieCard
