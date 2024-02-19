import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsFillStarFill, BsHandThumbsDown, BsHandThumbsUp, BsPlayCircleFill, BsPlayFill } from "react-icons/bs";
import {AddIcon} from '@chakra-ui/icons'

const M_MovieCard = ({Movie_Data}) => {
    // const Movie_Data = {
    //     Title: "Baahubali: The Beginning",
    //     "Rating": 4.9,
    //     "TrailerURL": "https://www.youtube.com/watch?v=sOEg_YZQsTI",
    //     "CoverIMG": "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8662/1368662-i-bd252b4dba15",
    //     "Moods": ["Epic", "Adventure", "Action"],
    //     "Platform":"https://www.hotstar.com/in/movies/baahubali-the-beginning/1000074338/watch?filters=content_type%3Dmovie",
    //     "Likes":10,
    //     "Dislikes":3
    //     }
  return (
    <div>
        {/* <Box position="relative" w="40%" h="300" borderRadius="md" bg="#00050D" cursor="pointer" justifyContent="right" display="flex">
            <Image src={Movie_Data.CoverIMG} alt="Card Image" maxW="auto" h="300" borderRadius="md" />
            <Box position="absolute" left="4" top="4">
                <Flex direction='column' alignItems="center">
                    <Button><BsHandThumbsUp/></Button>
                    <Text>{Movie_Data.Likes}</Text>
                    <Button><BsHandThumbsDown/></Button>
                    <Text>{Movie_Data.Dislikes}</Text>
                    <Button><AddIcon/></Button>
                </Flex>
            </Box>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(0, 5, 13, 1.5), transparent)',
                }}
            />
            <Box position={'absolute'}  bottom={10}>
                <Text>{Movie_Data.Title}</Text>
                <HStack>
                    <Text>Rating:<BsFillStarFill />{Movie_Data.Rating}</Text>
                </HStack>
                <HStack>
                    {Movie_Data.Moods.map((mood, id)=>{
                        if (id==Movie_Data.Moods.length-1){
                            return <Text key={id}>{mood}</Text>
                        }
                        return <Text key={id}>{mood} | </Text>
                    })}
                </HStack>
                <HStack>
                    <Button leftIcon={<BsPlayFill />}>Watch Now</Button>
                    <Button><AddIcon/></Button>
                </HStack>
            </Box>
            
        </Box>*/}
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
