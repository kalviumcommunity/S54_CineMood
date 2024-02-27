import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from 'axios';


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
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '../../context/ParentContext';

const Login = () => {
  const [show, setShow] = useState(false);
  const [cShow, setCShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [error, setError] = useState(null)

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()
  const {signedIn, setSignedIn} = useContext(AppContext)

  useEffect(() => {
    console.log(signedIn);
    
    if (signedIn) {
      window.location.href = "/home";
    }
  }, [signedIn]);


  const submitHandler = (values) => {

    return new Promise((resolve) => {
      setTimeout(() => {
        axios.post("https://cinemood-b811.onrender.com/login", values, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then(response => {
            if (response.status == "201") {
              localStorage.setItem('token', response.data.token);
              setSignedIn(true)
            } else {
              setError(response.data.message)
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
        resolve()
      }, 1000)
    })
  }

  return (
    <Container maxW="100%" p={{ base: 5, md: 10 }} bg="#00050D" h="100vh" display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl" color="white">Login To Your Account</Heading>
          </Stack>

          <VStack as="form" boxSize={{ base: 'xs', sm: 'sm', md: 'md' }} h="max-content !important" bg='#191e25' rounded="lg" boxShadow="lg" p={{ base: 5, sm: 10 }} spacing={8} color="white" onSubmit={handleSubmit(submitHandler)}>
            <Text color="red" fontSize={"lg"}>{error&&error}</Text>
            <VStack spacing={4} w="100%">
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input rounded="md" id="email" type="email" {...register("email", { required: 'Enter Your email' })} />
                <Text color="red">
                  {errors.email && errors.email.message}
                </Text>
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup size="md">
                  <Input rounded="md" id="password" type={show ? 'text' : 'password'} {...register("password", { required: 'Enter Password', minLength: { value: 8, message: 'Enter minimum 8 chars' }, pattern: { value: '/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\])/', message: "Password Not Valid" } })} />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" rounded="md" bg='#79b8f3' _hover={{ bg: useColorModeValue('gray.400', 'gray.800') }} onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text color="red">
                  {errors.password && errors.password.message}
                </Text>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button bg="#007185" color="white" _hover={{ bg: 'green.500' }} rounded="md" w="100%" isLoading={isSubmitting} type='submit'>
                Sign in
              </Button>
              <Stack direction="row" justifyContent="center" w="100%">
                <Link to="/" fontSize={{ base: 'md', sm: 'md' }} >I'm New Here</Link>
              </Stack>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Login;