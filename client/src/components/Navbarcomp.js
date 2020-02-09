import React from 'react'
import { Navbar, FormControl, Button, Form, Nav } from 'react-bootstrap'

function Navbarcomp() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">My Acchord Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Playlists</Nav.Link>
          <Nav.Link href="#pricing">My Friends</Nav.Link>
          <Nav.Link href="#My Account">My Account</Nav.Link>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default Navbarcomp
