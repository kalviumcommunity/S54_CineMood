import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Spacer,
  Avatar,
  Link,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";

// Logo component
const Logo = () => (
    <Text fontSize="lg" fontWeight="bold" color="white" ml={5}>
      CINEMOOD
    </Text>
  );
  
  const MenuLinks = () => (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      mt={{ base: 4, md: 0 }}
    >
        <Input colorScheme="gray" color="white" placeholder="Search for movies" border="1px solid #33373D" htmlSize={25} width="auto"/>
        <IconButton variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}><SearchIcon /></IconButton>
        <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>Home</Button>
        <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>Trending</Button>
        <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>My List</Button>
        <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>About</Button>
      <Avatar
            href="#"
            as={Link}
            size="sm"
            showBorder={true}
            borderColor="blue.400"
            rounded="full"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
            mx={5}
            />
    </Flex>
  );
  
  // NavBar component
  const NavBar = () => {
    return (
      <Box w="100%" bg="#00050D" pb={2}>
        <Box
          w="70%"
          mx="auto"
          p={2}
          bg="#191e25"
          rounded="md"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          position="relative"
          mt={4}
        >
          <Flex justify="space-between" align="center">
            <Logo />
            <Spacer />
            <MenuLinks />
          </Flex>
        </Box>
      </Box>
    );
  };
  

export default NavBar;
