import React from 'react'
import { Navbar, FormControl, Button, Form, Nav } from 'react-bootstrap'
// import { Redirect } from 'react-router-dom'

function Navbarcomp() {
  
  // clicking the logout button clears local storage of
  // all user information
  const clear = () => {
    console.log("here")
    localStorage.clear();
    console.log("cleared");
  }

  // clicking the logout button clears local storage of
  // all user information
  const handleClick = () => {
    console.log('logging out')
    localStorage.clear();
  }
  
  // returning element to parent component
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">My Acchord Home</Navbar.Brand>
        <Nav className="mr-auto" data-testid="nav">
          <Nav.Link href={"/dashboard"+"?access_token=" + sessionStorage.getItem('token')}>Home</Nav.Link>
          <Nav.Link href={"/playlists"+"?access_token=" + sessionStorage.getItem('token')}>Playlists</Nav.Link>
          <Nav.Link href={"/friends"+"?access_token=" + sessionStorage.getItem('token')}>My Friends</Nav.Link>
          <Nav.Link href={"/account"+"?access_token=" + sessionStorage.getItem('token')}>My Account</Nav.Link>
          <Nav.Link href={window.location.href.includes('localhost') ? '/' : 'https://acchord.herokuapp.com'} onClick={handleClick} data-testid="logout">Logout</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default Navbarcomp
