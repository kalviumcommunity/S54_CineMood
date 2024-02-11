import { Box, Button, Card, HStack, Heading, Icon, IconButton, Image, Link, Text } from '@chakra-ui/react'
import { FaPlay,FaFilm } from 'react-icons/fa';


import React from 'react'
import { AddIcon, ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';

const Carousel = () => {
    const moods = ["Epic", "Adventure", "Action"]
  return (
    <div>
        <Box w="100%" bg="#00050D">
            <HStack w="95%" alignItems={'center'} mx={'auto'} color="white">
                <ArrowLeftIcon/>
                <Box w="90%" mx="auto" color={'white'}>
                    <HStack justifyContent={'space-between'}>
                        <Box ml={50} width={'364'}>
                            <Heading>Baahubali: The Beginning</Heading>

                            <HStack spacing={2} mt={4} ml={2}>
                                {moods.map((value)=>{
                                    return <Text>{value} |</Text>
                                })}
                            </HStack>

                            <HStack mt={8} ml={2}>
                                <Button aria-label="Play" bg={'white'} color='#00050D' size="lg" boxSize={75} borderRadius={'50%'}><Icon as={FaPlay} boxSize={10} color="#00050D.500" ml={2}/></Button>
                                <Text fontSize={28}>Play</Text>
                                <Link href="https://www.youtube.com/watch?v=sOEg_YZQsTI" isExternal>
                                    <Button bg="#33373D" color="white" isRound><Icon as={FaFilm} boxSize={6} color="white.500" /></Button>
                                </Link>
                                <Button bg="#33373D" color="white" _hover={{ bg: '#2c3036' }} _active={{ bg: '#2c3036' }} _focus={{ boxShadow: 'none' }}><AddIcon /></Button>
                            </HStack>
                        </Box>
                        <Box
                            position="relative"
                            display="inline-block"
                            borderRadius="md"
                            overflow="hidden"
                            width="auto"
                            height="464px"
                            >
                            <Image
                                src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8662/1368662-i-bd252b4dba15"
                                alt="Movie Poster"
                                w="100%"
                                h="100%"
                            />
                            <div
                                style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to right, rgba(0, 5, 13, 0.8), transparent)',
                                }}
                            />
                        </Box>
                    </HStack>
                </Box>
                <ArrowRightIcon/>
            </HStack>
        </Box>
    </div>
  )
}

export default Carousel
