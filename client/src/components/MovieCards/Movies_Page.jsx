import React, { useEffect, useState } from 'react'
import M_MovieCard from './M_MovieCard'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import NavBar from '../Home/Navbar'
import Create_Movie from './Create_Movie'
import { Route, Routes } from 'react-router-dom'

function Movies_Page({lang}) {
    const [movieList,setMovieList] = useState([])
    const [language, setLanguage] = useState("")

    useEffect(()=>{
        const fetchMovies = async () => {
            try {
              const response = await fetch('https://cinemood-b811.onrender.com/movies');
              if (!response.ok) {
                throw new Error('Failed to fetch movies');
              }
      
              const data = await response.json();
              setMovieList(data.data);  // Assuming your data is nested under a 'data' property
            } catch (error) {
              console.error('Error fetching movies:', error.message);
            }
          };
      
          fetchMovies();
    },[movieList])

    const tabsHandler = (e)=>{
      switch (e){
        case 0: setLanguage("All")
        case 1: setLanguage("Hindi")
        case 2: setLanguage("English")
        case 3: setLanguage("Telugu")
        case 4: setLanguage("Malayalam")
        case 5: setLanguage("Bengali")
        case 6: setLanguage("Punjabi")
        case 7: setLanguage("Others")
        default: null;
      }
    }

  return (
    <div>
        <NavBar/>
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
        <Flex wrap="wrap" justifyContent={'space-around'} bg="#00050D" rowGap={10} pt={8}>
              {
                  movieList.filter((movie)=>{
                      return movie.Languages.indexOf(lang) !==-1
                  }).map((movie_data, id)=>{
                      return <M_MovieCard key={id} Movie_Data={movie_data}/>
                  })
              }
        </Flex>
        <Create_Movie />
    </div>

  )
}

export default Movies_Page
