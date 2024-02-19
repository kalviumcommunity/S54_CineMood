import React from 'react'
import NavBar from './Home/Navbar'
import Carousel from './Home/Carousel'
import SearchMood from './Home/SearchMood'
import Language_card from './Home/Language_card'
import Languages from './Home/Languages'
import M_MovieCard from './MovieCards/M_MovieCard'

const Home = () => {

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
