import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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

const Signin = () => {
  const [show, setShow] = useState(false);
  const [cShow, setCShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClick2 = () => setCShow(!cShow);
  const [error, setError] = useState(null)
  const { setSignedIn } = useContext(AppContext)

  const Navigate = useNavigate()
  const { handleSubmit, register, formState: { errors, isSubmitting }, getValues } = useForm()


  const success = () => {

    toast.success('User Registered Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const failed = (error) => {
    toast.error(error, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const submitHandler = (values) => {

    return new Promise((resolve) => {
      setTimeout(() => {
        axios.post("https://cine-mood-server.vercel.app/user", values, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then(response => {
            console.log(response)
            if (response.data.error === "User already exists") {
              setError("User already exists with this email");
            }
            if (response.data.message == "User created successfully") {
              success()
              setTimeout(() => {
                Navigate('/login')
              }, 4000);
            }
          })
          .catch(error => {
            failed(error)
          });
        resolve()
      }, 1000)
    })
  }

  return (
    <>
      <Container maxW="100%" p={{ base: 5, md: 10 }} bg="#00050D" h="100vh" display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <ToastContainer />
        <Center>
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl" color="white">Register Your Account</Heading>
            </Stack>
            <VStack as="form" boxSize={{ base: 'xs', sm: 'sm', md: 'md' }} h="max-content !important" bg='#191e25' rounded="lg" boxShadow="lg" p={{ base: 5, sm: 10 }} spacing={8} color="white" onSubmit={handleSubmit(submitHandler)}>
              <VStack spacing={4} w="100%">
                <FormControl >
                  <FormLabel htmlFor='Name'>Your Full Name</FormLabel>
                  <Input rounded="md" id="Name" type="text" {...register("Name", { required: 'Enter Your Full Name', minLength: { value: 4, message: 'Enter minimum 4 letters' } })} />
                  <Text color="red">
                    {errors.Name && errors.Name.message}
                  </Text>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input rounded="md" id="email" type="email" {...register("email", { required: 'Enter Your email' })} />
                  <Text color="red">
                    {errors.email && errors.email.message}
                    {error && error}
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
                <FormControl >
                  <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <Input rounded="md" id='confirmPassword' type={cShow ? 'text' : 'password'} {...register("confirmPassword", { required: 'Confirm Your Password', validate: value => value === getValues("password") || "The passwords do not match" })} />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" rounded="md" bg='#79b8f3' _hover={{ bg: useColorModeValue('gray.400', 'gray.800') }} onClick={handleClick2}>
                        {cShow ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Text color="red">
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </Text>
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Button bg="#007185" color="white" _hover={{ bg: 'green.500' }} rounded="md" w="100%" isLoading={isSubmitting} type='submit'>
                  Sign in
                </Button>
                <Stack direction="row" justifyContent="center" w="100%">
                  <Link to="/login" fontSize={{ base: 'md', sm: 'md' }} _hover={{ textDecoration: "underline" }} >Already, I'm a member</Link>
                </Stack>
              </VStack>
            </VStack>
          </Stack>
        </Center>

      </Container>
    </>
  );
};

export default Signin;