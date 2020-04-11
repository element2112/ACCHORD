import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
// import { Redirect } from 'react-router-dom'
//import '../styles/Nav.css'

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
    sessionStorage.clear();
  }
  
  // returning element to parent component
  return (
    <>
      <Navbar>
        <Navbar.Brand style={{color: "#FD7", fontWeight: "500"}} href="#home">My Acchord Home</Navbar.Brand>
        <Nav data-testid="nav">
          <Nav.Link style={{color: "#899"}} href={"/dashboard"+"?access_token=" + sessionStorage.getItem('token')}>Home</Nav.Link>
          <Nav.Link style={{color: "#899"}} href={"/profile"+"?access_token=" + sessionStorage.getItem('token')}>Profile</Nav.Link>
          <Nav.Link style={{color: "#899"}} href={"/friends"+"?access_token=" + sessionStorage.getItem('token')}>My Friends</Nav.Link>
          <Nav.Link style={{color: "#899"}} href={"/account"+"?access_token=" + sessionStorage.getItem('token')}>My Account</Nav.Link>
          <Nav.Link style={{color: "#899"}} href={"/"} onClick={handleClick} data-testid="logout">Logout</Nav.Link>
          {/* <Nav.Link style={{color: "#999"}} href={window.location.href.includes('localhost') ? '/' : 'https://acchord.herokuapp.com'} onClick={handleClick} data-testid="logout">Logout</Nav.Link> */}
        </Nav>
      </Navbar>
    </>
  )
}

export default Navbarcomp
