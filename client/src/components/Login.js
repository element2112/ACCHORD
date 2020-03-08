import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import { Link, Redirect } from 'react-router-dom';
// import Row from 'react-bootstrap/Row'
// import CenterView from './CenterView'

const headers = {
  'Content-Type': 'application/json'
}

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: false
    }
    this.webpage =  (
      <Form data-testid="login" style={{
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
        
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" name="remember" onChange={this.update} />
        </Form.Group>
        
        <Button data-testid="loginButton" variant="primary" type="submit">
          Login
        </Button>
        <br/>
        <br/>
        <Link to='/register' style={{color: "blue"}}>{"Register an account!"}</Link>
      </Form>
    )
  }
  
  setLocalStorage(obj) {
    for (let p in obj) {
      localStorage.setItem(p, obj[p]);
    }
  }
  
  handleLoginResponse = (res) => {
    if (res.login) {
      // if login successful, go to Dashboard page
      this.webpage = (<Redirect to="/dashboard" />);
      
      // also, store data in localStorage
      let data = res.user;
      data.authenticated = true;
      this.setLocalStorage(res.user);
      
      // Force webpage refresh by changing state.
      this.setState({refresh: true});
    } else {
      // if login unsuccessful, go to login page with an error
      alert('Login unsuccessful. Check the password and the spelling of the email address');
    }
      // TODO in users.js:
      // confirm the source of this request through CORS (if possible)
  }
  
  handleSubmit = (e) => {
    console.log('logging in');
    let state = this.state;
    fetch("http://localhost:4000/api/users/login",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(state)
    })
    .then(res => res.json())
    .then(this.handleLoginResponse);
    e.preventDefault();
  }
  
  update = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "remember")
      value = e.target.checked;
    switch(name){
    // email validation done in form
    case "password":
      //validate the password to prevent some attacks
      if (value.length > 20) {
        value = value.substr(0, 20);
      }
      break;
    default:
    }
    this.setState({[name]: value});
  }
  
  render() {
    return this.webpage;
  }
}

export default Login

