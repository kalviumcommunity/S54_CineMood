import React, { useContext, useState } from "react";
import Cookies from 'js-cookie';

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
import { AppContext } from "../../context/ParentContext";

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
    <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>Home</Button>
    <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>Trending</Button>
    <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>My List</Button>
    <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>About</Button>
    {/* <Avatar
      href="#"
      as={Link}
      size="sm"
      showBorder={true}
      borderColor="blue.400"
      rounded="full"
      src="https://avatars2.githubusercontent.com/u/37842853?v=4"
      mx={5}
    /> */}

    { }
  </Flex>
);

const Logout = () => {
  Cookies.remove('UserName')
  localStorage.clear();
  window.location.href = '/login'
}

// NavBar component
const NavBar = () => {
  const { signedIn } = useContext(AppContext)

  return (
    <Box w="100%" bg="transparent" pb={2} position={"fixed"} zIndex="10">
      <Box
        w="70%"
        mx="auto"
        p={2}
        bg="#00050D"
        rounded="10"
        border="1px solid #191e25"
        boxShadow="0px 14px 28px rgba(0, 0, 0, 1), 0px 10px 10px rgba(0, 0, 0, 0.25)"
        position="relative"
        mt={4}
      >
        <Flex justify="space-around" align="center">
          <Logo />
          <Spacer />
          <MenuLinks />
          {signedIn ? <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }} onClick={Logout}>Logout</Button> : <Button variant="ghost" colorScheme="gray" color="#aaaaaa" _hover={{ color: "white" }} _active={{ bg: "#0f1111", color: "white" }}>Login</Button>}
        </Flex>
      </Box>
    </Box>
  );
};


export default NavBar;
