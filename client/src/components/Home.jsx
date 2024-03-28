import React, { useContext, useEffect } from 'react'
import NavBar from './Home/Navbar'
import Carousel from './Home/Carousel'
import SearchMood from './Home/SearchMood'
import Language_card from './Home/Language_card'
import Languages from './Home/Languages'
import M_MovieCard from './MovieCards/M_MovieCard'
import axios from 'axios'
import { AppContext } from '../context/ParentContext'
import UserMovies from './MovieCards/UserMovies'

const Home = () => {
  const { setSignedIn, setUserData } = useContext(AppContext)

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    axios.post("https://cine-mood-server.vercel.app/userData", { token }, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(response => {
        setSignedIn(true)
        setUserData(response.data.data)
        document.cookie = `UserName=${response.data.data.Name}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])

  return (
    <div>
      <NavBar />
      <Carousel />
      <SearchMood />
      <Languages />
      <UserMovies />
    </div>
  )
}

export default Home
