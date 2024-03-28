import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, HStack, Heading, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillStarFill, BsHandThumbsDown, BsHandThumbsUp, BsPlayCircleFill, BsPlayFill } from "react-icons/bs";
import { AddIcon } from '@chakra-ui/icons'
import Update_Delete from './Update_Delete';

const M_MovieCard = ({ Movie_Data }) => {
  const [Likes, setLikes] = useState(Movie_Data.Likes)
  const [Dislikes, setDisLikes] = useState(Movie_Data.Dislikes)

  return (
    <div>
      <Card maxW='sm'>
        <Update_Delete Movie_Data={Movie_Data} />
        <Box bg="#00050D" p={4} borderRadius="md" border="2px solid #33373d">
          <Stack spacing={4}>
            <Image src={Movie_Data.CoverIMG} alt={Movie_Data.Title} borderRadius="lg" />
            <VStack mt="6" spacing="3" alignItems={"left"}>
              <Heading size="md" color="#ffffff">
                {Movie_Data.Title}
              </Heading>
              <Text color="#aaaaaa">Rating: {Movie_Data.Rating}</Text>
              <Text color="#aaaaaa">Created By: {Movie_Data.CreatedBy}</Text>
            </VStack>
            <Divider />
            <Stack direction="row" spacing="2" alignItems="center">
              <Button leftIcon={<BsPlayFill />} bg="#33373d" color="#aaaaaa" as={Link} target='_blank' href={Movie_Data.Play}>
                Watch Now
              </Button>
              <Button bg="#33373d" color="#aaaaaa">
                <AddIcon />
              </Button>
              <Button bg="#33373d" color="#aaaaaa"  onClick={()=>setLikes(Likes+1)}>
                <BsHandThumbsUp />
              </Button>
              <Text color="#aaaaaa">{Likes}</Text>
              <Button bg="#33373d" color="#aaaaaa" onClick={()=>setDisLikes(Dislikes-1)}>
                <BsHandThumbsDown />
              </Button>
              <Text color="#aaaaaa">{Dislikes}</Text>
            </Stack>
          </Stack>
        </Box>
      </Card>

    </div>
  )
}

export default M_MovieCard
