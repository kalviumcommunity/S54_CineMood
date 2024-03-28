import React, { useContext, useEffect, useState } from 'react'
import M_MovieCard from './M_MovieCard'
import { Box, Center, Flex, Tab, TabList, Tabs } from '@chakra-ui/react'
import NavBar from '../Home/Navbar'
import Create_Movie from './Create_Movie'
import { AppContext } from '../../context/ParentContext'
import Update_Delete from './Update_Delete'
import { HashLoader } from "react-spinners"

function Movies_Page() {
  const { movieList, language, setLanguage } = useContext(AppContext)

  const tabsHandler = (e) => {
    switch (e) {
      case 0: setLanguage("All")
        break;
      case 1: setLanguage("Hindi")
        break;
      case 2: setLanguage("English")
        break;
      case 3: setLanguage("Telugu")
        break;
      case 4: setLanguage("Malayalam")
        break;
      case 5: setLanguage("Bengali")
        break;
      case 6: setLanguage("Punjabi")
        break;
      case 7: setLanguage("Others")
        break;
      default: setLanguage("All")
        break;
    }
  }

  return (
    <div>
      <NavBar />
      <Tabs pt={"6%"} bg="#00050D" color="white" borderColor={"#33373D"} onChange={tabsHandler}>
        <TabList>
          <Tab>All</Tab>
          <Tab>Hindi</Tab>
          <Tab>English</Tab>
          <Tab>Telugu</Tab>
          <Tab>Malayalam</Tab>
          <Tab>Bengali</Tab>
          <Tab>Punjabi</Tab>
          <Tab>Others</Tab>
        </TabList>

      </Tabs>
      {movieList.length == 0 &&
        <Box bg="#00050D">
          <Center py="250">
            <HashLoader color="#1a98ff" size={75} />
          </Center>
        </Box>

      }

      {language == "All" ?
        <Flex wrap="wrap" justifyContent={'space-around'} bg="#00050D" rowGap={10} pt={8}>
          {
            movieList.map((movie_data, id) => {
              return <M_MovieCard key={id} Movie_Data={movie_data} />
            })
          }
        </Flex> :
        <Flex wrap="wrap" justifyContent={'space-around'} bg="#00050D" rowGap={10} pt={8}>
          {
            movieList.filter((movie) => {
              return movie.Languages.indexOf(language) !== -1
            }).map((movie_data, id) => {
              return <M_MovieCard key={id} Movie_Data={movie_data} />
            })
          }
        </Flex>
      }
      <Create_Movie />
    </div>

  )
}

export default Movies_Page
