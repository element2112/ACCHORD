import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
// import Row from 'react-bootstrap/Row'
// import CenterView from './CenterView'

const headers = {
  'Content-Type': 'application/json'
}

export class Login extends Component {
  
  state = {
    email: "",
    password: ""
  }

  handleSubmit = (e) => {
    let state = this.state;
    fetch("http://localhost:4000/api/users/login",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(state)
    })
    .then(res => res.json())
    .then(res => {
      console.log("login: " + res.login);
      // TODO:
      // handle the response
      // if login successful, go to Dashboard page
      // if login successful, go to Dashboard page
      // also, store data in LocalStorage (figure out how to do this)
      //
      // if login unsuccessful, go to login page with an error
      // TODO in users.js:
      // confirm the source of this request through CORS (if possible)
    });
    e.preventDefault();
  }
  
  update = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch(name){
    case "email":
      // validate the email to prevent some attacks
      break;
    case "password":
      //validate the password to prevent some attacks
      if (value.length > 20) {
        value = value.substr(20);
      }
      break;
    default:
    }
    this.setState({[name]: value});
  }

  render() {
    return (
      <Form style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }} onSubmit={this.handleSubmit}>
        <h1>Login to Acchord</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.update} />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={this.update} />
        </Form.Group>
        <Button variant="primary" type="submit">
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

