import * as React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home'
import Signin from './components/Login_Signup/Signin'
import Login from './components/Login_Signup/Login';
import Movies_Page from './components/MovieCards/Movies_Page';
import ParentContext from './context/ParentContext';

function App() {
  return (

    <ChakraProvider>
      <ParentContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/movies' element={<Movies_Page/>}/>
          </Routes>
        </BrowserRouter>
        <ParentContext/>
      </ParentContext>
    </ChakraProvider>
  )
}

export default App
