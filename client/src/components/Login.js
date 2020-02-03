import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Redirect, Link } from 'react-router-dom';
// import Row from 'react-bootstrap/Row'
// import CenterView from './CenterView'

export class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Form style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <h1>Login to Acchord</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleClick}>
          Login
        </Button>
        <br/>
        <br/>
        <Link to='/register' style={{color: "blue"}}>{"Register an account!"}</Link>
      </Form>
    )
  }
}

export default Login

