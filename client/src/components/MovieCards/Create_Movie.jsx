import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../../context/ParentContext'

const Create_Movie = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const { handleSubmit, register, formState: { errors, isSubmitting }, getValues } = useForm()
    const {MListRender, setMListRender, userData} = useContext(AppContext)

    const initialRef = React.useRef(null)
    const submitHandler = (values) => {

      return new Promise((resolve) => {
        setTimeout(() => {
          var {Title,Title_Img,Rating, TrailerURL,CoverIMG,Moods,Play,plot_summary,Release_Year,Languages} = values
          const CreatedBy = userData.Name
          Moods = Moods.split(',')
          Languages = Languages.split(',')
          fetch("http://localhost:3000/movies", {
          method: "POST",
          crossDomain: true,
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            Title,Title_Img,Rating, TrailerURL,CoverIMG,Moods,Play,plot_summary,Release_Year,Languages, CreatedBy
          })
        }).then((res) => res.json())
          .then((data) => {
            console.log(data.message)
            onClose()
            setMListRender(MListRender+1)
          }).catch((err)=>console.log(err))
          resolve()
          }, 1000)
        })
    }

    return (
      <Box position="fixed" bottom="10" right="10">
        <IconButton onClick={onOpen} icon={<AddIcon />} isRound={true} size={"lg"} bg="#33373D" color="white"></IconButton>
  
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
          <ModalOverlay />
          <ModalContent my="auto" bg="#191e25" spacing={8} color="white" as="form" onSubmit={handleSubmit(submitHandler)}>
            <ModalHeader textAlign="center">Upload Movie</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} >
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} placeholder='Enter Movie Title' {...register("Title", { required: 'Enter Movie Title', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.Title && errors.Title.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Title_Img</FormLabel>
                <Input ref={initialRef} placeholder='Upload link to poster' {...register("Title_Img", { required: 'Upload link to poster', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.Title_Img && errors.Title_Img.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Movie Rating</FormLabel>
                <Input ref={initialRef} placeholder='Enter rating of this movie' {...register("Rating", { required: 'Enter rating of this movie' })}/>
                <Text color="red">
                  {errors.Rating && errors.Rating.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Trailer URL</FormLabel>
                <Input ref={initialRef} placeholder='Upload trailer link' {...register("TrailerURL", { required: 'Upload trailer link', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.TrailerURL && errors.TrailerURL.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Cover IMG</FormLabel>
                <Input ref={initialRef} placeholder='Upload link of coverIMG' {...register("CoverIMG", { required: 'Upload link of coverIMG', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.CoverIMG && errors.CoverIMG.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Moods the movie suits</FormLabel>
                <Input ref={initialRef} placeholder='Enter suitable Moods separated with commas' {...register("Moods", { required: 'Enter suitable Moods', minLength: { value: 3, message: 'Enter minimum 3 letters' } })}/>
                <Text color="red">
                  {errors.Moods && errors.Moods.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Play Link</FormLabel>
                <Input ref={initialRef} placeholder='Upload link to play' {...register("Play", { required: 'Upload link to play', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.Play && errors.Play.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>plot Summary</FormLabel>
                <Input ref={initialRef} placeholder='Enter Plot Summary' {...register("plot_summary", { required: 'Enter Plot Summary', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.plot_summary && errors.plot_summary.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Release Year</FormLabel>
                <Input ref={initialRef} placeholder='Enter which year' {...register("Release_Year", { required: 'Enter which year', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.Release_Year && errors.Release_Year.message}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel>Languages</FormLabel>
                <Input ref={initialRef} placeholder='Write languages with comma separated' {...register("Languages", { required: 'Write languages with comma separated', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.Languages && errors.Languages.message}
                </Text>
              </FormControl>
              {/* <FormControl>
                <FormLabel>Created By</FormLabel>
                <Input ref={initialRef} placeholder='Enter Your Name' defaultValue={userData.Name}{...register("CreatedBy", { required: 'Enter Creator Name', minLength: { value: 4, message: 'Enter minimum 4 letters' } })}/>
                <Text color="red">
                  {errors.CreatedBy && errors.CreatedBy.message}
                </Text>
              </FormControl> */}

            </ModalBody>
  
            <ModalFooter>
              <Button bg="#007185" color="white" _hover={{ bg: 'green.500' }} rounded="md" mr={3} type='submit' isLoading={isSubmitting}>Upload</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
}

export default Create_Movie
