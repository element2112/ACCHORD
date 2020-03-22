import React, { Component, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import '../styles/Dash.css'
import { Redirect } from 'react-router-dom'

const Update = () => {

const [formData, setFormData] = useState({
  originalEmail: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  authenticated: false
});

// array destructure for state
const { originalEmail, firstName, lastName, email, password } = formData;

// change the state as input is being typed
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // sending form data to API on submit
const onSubmit = async e => {
  console.log('in submit');
  e.preventDefault();

  const updatedUser = {
    originalEmail,
    firstName,
    lastName,        
    email,
    password
  }

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify(updatedUser);

    console.log("calling route");
    const res = await axios.post('http://localhost:4000/api/users/updateuser', body);
    // console.log("Res is: " + res);

    // update values in local storage to be used in dashboard
    localStorage.setItem("email", email);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("password", password);

    updatedUser.originalEmail = localStorage.getItem('email');
    
    setFormData({authenticated: true});
    localStorage.setItem("authenticated", true);        
    } catch(err) {
      // error catching        
      // console.error(err);
    }
  }
      
      // render() {
          return (
            <Form style={{position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)', fontWeight:"900"}} onSubmit={e => onSubmit(e)} data-testid="form">
              {/* <Form.Group controlId="Name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="New first name" name='firstName' defaultValue={firstName} onChange={e => onChange(e)} required />
                <Form.Label className="formLabel">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" name='lastName' defaultValue={lastName} onChange={e => onChange(e)} required />
              </Form.Group>

            //   <Form.Group controlId="formBasicEmail">
            //     <Form.Label className="formLabel">Email address</Form.Label>
            //     <Form.Control type="email" placeholder="Enter email" name='email' defaultValue={email} onChange={e => onChange(e)} required />
            //   </Form.Group> */}
            
            //   <Form.Group controlId="formBasicPassword">
            //     <Form.Label className="formLabel">Password</Form.Label>
            //     <Form.Control type="password" placeholder="Password" name='password' defaultValue={password} onChange={e => onChange(e)} required />
            //   </Form.Group>

            //   <Button variant="primary" type="submit" data-testid="submitBtn">
            //     Submit
            //   </Button>
            // </Form>
          )
      }
    
    export default Update
