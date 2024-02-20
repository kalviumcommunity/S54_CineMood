import {
    Box,
    Image,
    Text,
    chakra,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const data = {
    heading: 'Get this amazing offer today.',
    image:
        'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_480x400Hindi/2859762f-ea41-4f32-8e1f-f41d9ef6c7a8._UR1920,1080_BR-6_SX720_FMjpg_.jpeg'
};

const Language_card = ({ Name, IMG_LINK, htmldATA }) => {

    return (
        <Link to="/movies">
            <Box position="relative" maxW="285.12" maxH="170.28" borderRadius="md" bg="#00050D" mr={5} ref={htmldATA} transition="transform 0.3s ease" _hover={{transform:"scale(1.05)"}} cursor="pointer">
                <Image src={IMG_LINK} alt="Card Image" maxW="259.2" maxH="154.8" borderRadius="md" />
                <Text position="absolute" bottom="4" left="4" fontSize="lg" fontWeight="semibold" color="white" zIndex="1">
                    {Name}
                </Text>
            </Box>
        </Link>
    );
};

export default Language_card;