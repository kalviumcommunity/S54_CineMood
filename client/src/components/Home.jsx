import React, { useContext, useEffect } from 'react'
import NavBar from './Home/Navbar'
import Carousel from './Home/Carousel'
import SearchMood from './Home/SearchMood'
import Language_card from './Home/Language_card'
import Languages from './Home/Languages'
import M_MovieCard from './MovieCards/M_MovieCard'
import axios from 'axios'
import { AppContext } from '../context/ParentContext'

const Home = () => {
  const {setSignedIn} = useContext(AppContext)

  useEffect(()=>{
    const token = window.localStorage.getItem("token")
    axios.post("http://localhost:3000/userData", {token}, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then(response => {
            setSignedIn(true)
            document.cookie = `UserName=${response.data.data.Name}`;
          })
          .catch(error => {
            console.error('Error:', error);
          });
  },[])

  return (
    <div>
      <NavBar />
      <Carousel />
      <SearchMood />
      <Languages />
    </div>
  )
}

export default Home
