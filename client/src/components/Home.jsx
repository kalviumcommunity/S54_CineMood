import React from 'react'
import NavBar from './Home/Navbar'
import Carousel from './Home/Carousel'
import SearchMood from './Home/SearchMood'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Carousel/>
      <SearchMood/>
    </div>
  )
}

export default Home
