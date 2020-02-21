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
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="#features">Playlists</Nav.Link>
          <Nav.Link href="#pricing">My Friends</Nav.Link>
          <Nav.Link href="#My Account">My Account</Nav.Link>
          <Nav.Link href="/" onClick={handleClick} data-testid="logout">Logout</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default Navbarcomp
