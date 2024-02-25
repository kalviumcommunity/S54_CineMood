import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil, BsPencilFill } from "react-icons/bs";
import axios from 'axios';
import { AppContext } from '../../context/ParentContext';

const Update_Delete = ({ Movie_Data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const { handleSubmit, register, formState: { errors, isSubmitting }, setValue } = useForm()
    const {MListRender, setMListRender} = useContext(AppContext)

    const initialRef = React.useRef(null)
    const submitHandler = (values) => {

        return new Promise((resolve) => {
            setTimeout(() => {
                values.Moods = values.Moods.split(',')
                values.Languages = values.Languages.split(',')
                axios.put(`https://cinemood-b811.onrender.com/movies/${Movie_Data._id}`, values)
                    .then(response => {
                        console.log(response.data);
                        setMListRender(MListRender+1)
                        onClose()
                    })
                    .catch(error => {
                        console.error('Error updating movie:', error);
                    });
                resolve()
            }, 1000)
        })
    }
    const handleDelete = () => {
        axios.delete(`https://cinemood-b811.onrender.com/movies/${Movie_Data._id}`)
          .then(response => {
            console.log(response.data);
            setMListRender(MListRender+1)
          })
          .catch(error => {
            console.error(error);
          });
      };

    return (
        <Box position="absolute" top={5} right={5}>
            <IconButton onClick={onOpen} icon={<BsPencilFill />} size={"sm"} bg="#33373D" color="#007185" mr={1}></IconButton>
            <IconButton icon={<DeleteIcon />} size={"sm"} bg="#33373D" color="red" onClick={handleDelete}></IconButton>

            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
                <ModalOverlay />
                <ModalContent my="auto" bg="#191e25" spacing={8} color="white" as="form" onSubmit={handleSubmit(submitHandler)}>
                    <ModalHeader textAlign="center">Upload Movie</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} >
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input ref={initialRef} placeholder='Enter Movie Title' defaultValue={Movie_Data.Title} {...register("Title", { required: 'Enter Movie Title', minLength: { value: 4, message: 'Enter minimum 4 letters' } })} />
                            <Text color="red">
                                {errors.Title && errors.Title.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Title_Img</FormLabel>
                            <Input ref={initialRef} placeholder='Upload link to poster' defaultValue={Movie_Data.Title_Img} {...register("Title_Img")} />
                            <Text color="red">
                                {errors.Title_Img && errors.Title_Img.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Movie Rating</FormLabel>
                            <Input ref={initialRef} placeholder='Enter rating of this movie' defaultValue={Movie_Data.Rating} {...register("Rating", { required: 'Enter rating of this movie' })} />
                            <Text color="red">
                                {errors.Rating && errors.Rating.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Trailer URL</FormLabel>
                            <Input ref={initialRef} placeholder='Upload trailer link' defaultValue={Movie_Data.TrailerURL} {...register("TrailerURL", { required: 'Upload trailer link', minLength: { value: 4, message: 'Enter minimum 4 letters' } })} />
                            <Text color="red">
                                {errors.TrailerURL && errors.TrailerURL.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Cover IMG</FormLabel>
                            <Input ref={initialRef} placeholder='Upload link of coverIMG' defaultValue={Movie_Data.CoverIMG} {...register("CoverIMG", { required: 'Upload link of coverIMG', minLength: { value: 4, message: 'Enter minimum 4 letters' } })} />
                            <Text color="red">
                                {errors.CoverIMG && errors.CoverIMG.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Moods the movie suits</FormLabel>
                            <Input ref={initialRef} placeholder='Enter suitable Moods separated with commas' defaultValue={Movie_Data.Moods.join(",")} {...register("Moods", { required: 'Enter suitable Moods', minLength: { value: 3, message: 'Enter minimum 3 letters' } })} />
                            <Text color="red">
                                {errors.Moods && errors.Moods.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Play Link</FormLabel>
                            <Input ref={initialRef} placeholder='Upload link to play' defaultValue={Movie_Data.Play} {...register("Play", { required: 'Upload link to play', minLength: { value: 4, message: 'Enter minimum 4 letters' } })} />
                            <Text color="red">
                                {errors.Play && errors.Play.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>plot Summary</FormLabel>
                            <Input ref={initialRef} placeholder='Enter Plot Summary' defaultValue={Movie_Data.plot_summary} {...register("plot_summary", { required: 'Enter Plot Summary', minLength: { value: 4, message: 'Enter minimum 4 letters' } })} />
                            <Text color="red">
                                {errors.plot_summary && errors.plot_summary.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Release Year</FormLabel>
                            <Input ref={initialRef} placeholder='Enter which year' defaultValue={Movie_Data.Release_Year} {...register("Release_Year", { required: 'Enter which year', minLength: { value: 4, message: 'Enter minimum 4 letters' } })} />
                            <Text color="red">
                                {errors.Release_Year && errors.Release_Year.message}
                            </Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Languages</FormLabel>
                            <Input ref={initialRef} placeholder='Write languages with comma separated' defaultValue={Movie_Data.Languages.join(",")} {...register("Languages", { required: 'Write languages with comma separated', minLength: { value: 4, message: 'Enter minimum 4 letters' } })} />
                            <Text color="red">
                                {errors.Languages && errors.Languages.message}
                            </Text>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button bg="#007185" color="white" _hover={{ bg: 'green.500' }} rounded="md" mr={3} type='submit' isLoading={isSubmitting}>Update</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Update_Delete
