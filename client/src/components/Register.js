import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
// import { Redirect, Link } from 'react-router-dom';

export class Register extends Component {
  render() {
    return (
      <>
        <Form style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)', fontWeight:"900"}}>
          <Form.Group controlId="Name">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
            <Form.Label className="formLabel">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="formLabel">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="formLabel">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
       </Form>
      </>
    )
  }
}

export default Register
