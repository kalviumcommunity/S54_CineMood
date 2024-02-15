import { useState } from 'react';
import { Link }  from "react-router-dom" ;

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const Signin = () => {
  const [show, setShow] = useState(false);
  const [cShow, setCShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClick2 = () => setCShow(!cShow);
  
  const [Name, setName] =  useState('')
  const [email, setEmail] =  useState('')
  const [password, setPassword] =  useState('')
  const [confirmPassword, setConfirmPassword] =  useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(Name, email, password, confirmPassword)
  }

  return (
    <Container maxW="100%" p={{ base: 5, md: 10 }} bg="#00050D" h="100vh" display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl" color="white">Register Your Account</Heading>
          </Stack>
          <VStack
            as="form"
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg='#191e25'
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}
            color="white"
          >
            <VStack spacing={4} w="100%">
              <FormControl id="FullName">
                <FormLabel>Your Full Name</FormLabel>
                <Input rounded="md" type="text" onChange={(e)=>setName(e.target.value)}/>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input rounded="md" type={show ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)}/>
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg='#79b8f3'
                      _hover={{
                        bg: useColorModeValue('gray.400', 'gray.800')
                      }}
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="ConfirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                  <Input rounded="md" type={cShow ? 'text' : 'password'} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg='#79b8f3'
                      _hover={{
                        bg: useColorModeValue('gray.400', 'gray.800')
                      }}
                      onClick={handleClick2}
                    >
                      {cShow ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button
                bg="#007185"
                color="white"
                _hover={{
                  bg: 'green.500'
                }}
                rounded="md"
                w="100%"
                onClick={submitHandler}
              >
                Sign in
              </Button>
              <Stack direction="row" justifyContent="center" w="100%">
                <Link to="/login" fontSize={{ base: 'md', sm: 'md' }} style={{textDecoration:"underline"}} >Already, I'm a member</Link>
              </Stack>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Signin;