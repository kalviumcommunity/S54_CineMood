import * as React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home'
import Signin from './components/Login_Signup/Signin'
import Login from './components/Login_Signup/Login';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
