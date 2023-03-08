import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import login from '../assets/login.jpg'


const Background = () => {
  return (
    <Container style={{ position: "relative"}}>
        <img src={login} alt="login" style={{ width: "100vw", height: '100vh', filter: "brightness(0.5)"
}} />
    </Container>
  )
}

// const container=styled.div;
export default Background
