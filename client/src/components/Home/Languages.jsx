import {
    Box,
    Button,
    Center,
    Flex,
    HStack,
    Text
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import Language_card from './Language_card';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const Languages_Data = [
    {
        Name: "Hindi",
        IMG_LINK: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400Hindi/2859762f-ea41-4f32-8e1f-f41d9ef6c7a8._UR1920,1080_BR-6_SX720_FMjpg_.jpeg"
    },
    {
        Name: "English",
        IMG_LINK: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400English/fd3806c3-c450-436f-acbf-5746f3c09356._UR1920,1080_BR-6_SX720_FMjpg_.jpeg"
    },
    {
        Name: "Telugu",
        IMG_LINK: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400Telugu/3d399ae4-cff6-486b-8267-8470a3f7bb5f._UR1920,1080_BR-6_SX720_FMjpg_.jpeg"
    },
    {
        Name: "Tamil",
        IMG_LINK: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400Tamil/1b30e8db-876c-4a1d-90f7-1183a4f9a62c._UR1920,1080_BR-6_SX720_FMjpg_.jpeg"
    },
    {
        Name: "Malayalam",
        IMG_LINK: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400Malayalam/970b91d5-5b0e-4bc0-99a9-f7014c3ddf61._UR1920,1080_BR-6_SX720_FMjpg_.jpeg"
    },
    {
        Name: "Bengali",
        IMG_LINK: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400Bengali/a386c961-669f-40a2-9689-5ead3684e35a._UR1920,1080_BR-6_SX720_FMjpg_.jpeg"
    },
    {
        Name: "Punjabi",
        IMG_LINK: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400Punjabi/998f3b75-6799-4078-ba04-03300bdf593d._UR1920,1080_BR-6_SX720_FMjpg_.jpeg"
    },
    {
        Name: "Others",
        IMG_LINK: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400Internaitional/c58bc4fe-9e44-4136-8c9c-13ca131a3ebb._UR1920,1080_BR-6_SX720_FMjpg_.jpeg"
    }
]

const Languages = () => {

    const left = useRef(null)
    const right = useRef(null)
    const [leftState, setLeftState] = useState(false)
    const [rightState, setRightState] = useState(true)

    const leftFocus = () => {
        setLeftState(false)
        setRightState(true)
        left.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    const rightFocus = () => {
        setLeftState(true)
        setRightState(false)
        right.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <Box bg="#00050D">
            <Box bg="#00050D" py={4} boxShadow="md" w="100%">
                <Box w="93%" display="flex" alignItems="center" mx="auto">
                    <Text fontSize="xl" color="#1a98ff" fontWeight="bold" pr="3" m="0">
                        Cinemood
                    </Text>
                    <Text fontSize="xl" color="white" fontWeight="bold">
                        Watch in Your Language
                    </Text>
                </Box>

            </Box>
            <HStack alignItems={'center'} mx={'auto'} color="white" w="100%" bg="#00050D">
                <ArrowLeftIcon m="1%" onClick={leftFocus} _hover={{ 'color': leftState?"#1A98FF":"#00050D"}} cursor="pointer" color={leftState?"white":"#00050D"}/>
                
                <Box
                    display="flex"
                    overflowX="auto"
                    whiteSpace="nowrap"
                    maxW="96%"
                    mx="auto"
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: "none"
                        }
                    }}
                >
                    {Languages_Data.map((language, id) => {
                        if (id == 0) {
                            return <Language_card htmldATA={left} key={id} Name={language.Name} IMG_LINK={language.IMG_LINK} />
                        }
                        if (id == Languages_Data.length - 1) {
                            return <Language_card htmldATA={right} key={id} Name={language.Name} IMG_LINK={language.IMG_LINK} />
                        }
                        console.log(Languages_Data.length - 1)
                        return <Language_card key={id} Name={language.Name} IMG_LINK={language.IMG_LINK} />
                    })}
                </Box>
                <ArrowRightIcon m="0.5%" onClick={rightFocus} _hover={{'color':rightState?"#1A98FF":"#00050D"}} cursor="pointer" color={rightState?"white":"#00050D"}/>
                
            </HStack>
        </Box>


    );
};

export default Languages;