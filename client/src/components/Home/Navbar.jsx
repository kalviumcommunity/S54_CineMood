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
      <Box w="100%" bg="transparent" pb={2} position={"fixed"} zIndex="10">
        <Box
          w="70%"
          mx="auto"
          p={2}
          bg="#00050D"
          rounded="50"
          border="1px solid #191e25"
          boxShadow="0px 14px 28px rgba(0, 0, 0, 1), 0px 10px 10px rgba(0, 0, 0, 0.25)"
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
