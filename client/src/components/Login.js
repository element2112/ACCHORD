import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
// import Row from 'react-bootstrap/Row'
// import CenterView from './CenterView'

const headers = {
  "Content-Type": "appliaction/json",
}

export class Login extends Component {

  // initial state
  state = {
    email: "",
    password: ""
  }

  // handle submit by sending user info to database
  handleSubmit(e) {

    fetch("http://localhost:4000/api/?",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    . then((res) => res.json())

    e.preventDefault();
    
  }

  render() {
    // rendering component
    return (
      <Form style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }} onSubmit={this.handleSubmit}>
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

