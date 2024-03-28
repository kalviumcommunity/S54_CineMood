import {
    Box,
    Image,
    Text,
    chakra,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/ParentContext';

const Language_card = ({ Name, IMG_LINK, htmldATA }) => {

    const { setLanguage } = useContext(AppContext)

    return (
        <Link to="/movies" onClick={()=>setLanguage(Name)}>
            <Box position="relative" maxW="285.12" maxH="170.28" borderRadius="md" bg="#00050D" mr={5} ref={htmldATA} transition="transform 0.3s ease" _hover={{ transform: "scale(1.05)" }} cursor="pointer" onClick={setLanguage(Name)}>
                <Image src={IMG_LINK} alt="Card Image" maxW="259.2" maxH="154.8" borderRadius="md" />
                <Text position="absolute" bottom="4" left="4" fontSize="lg" fontWeight="semibold" color="white" zIndex="1">
                    {Name}
                </Text>
            </Box>
        </Link>
    );
};

export default Language_card;