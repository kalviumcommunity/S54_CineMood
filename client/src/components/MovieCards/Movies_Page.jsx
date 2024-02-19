import React, { useEffect, useState } from 'react'
import M_MovieCard from './M_MovieCard'
import { Box, Flex } from '@chakra-ui/react'
import NavBar from '../Home/Navbar'

function Movies_Page({lang}) {
    const [movieList,setMovieList] = useState([])
    useEffect(()=>{
        const fetchMovies = async () => {
            try {
              const response = await fetch('http://localhost:3000/movies');
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
    },[])
  return (
    <div>
        <NavBar/>
        <Flex wrap="wrap" justifyContent={'space-around'} pt={"6%"} bg="#00050D" rowGap={10}>
            {
                movieList.filter((movie)=>{
                    return movie.Languages.indexOf(lang) !==-1
                }).map((movie_data)=>{
                    return <M_MovieCard Movie_Data={movie_data}/>
                })
            }
        </Flex>
    </div>

  )
}

export default Movies_Page
