import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import "./CSS/index.css"
const App = () => {
  return (


    <Routes>
      <Route exact path="/" element={<Netflix />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>


  )
}

export default App