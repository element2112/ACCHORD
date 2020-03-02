import React, { Component, Fragment, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Register = () => {
  // initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    authenticated: false
  });
 
  // array destructure for state
  const { firstName, lastName, email, password, password2, authenticated } = formData;

  // change the state as input is being typed
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // sending form data to API on submit
  const onSubmit = async e => {
    console.log('submitting');
    e.preventDefault();
    if (password !== password2)
    {
      alert('passwords do not match');
    } else if (password.length < 6) {
      alert('passwords must be at least 6 characters')
    } else {
      const newUser = {
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

        const body = JSON.stringify(newUser);

        const res = await axios.post('http://localhost:4000/api/users/registeruser', body, config);
        // setting values to local storage to be used in dashboard
        localStorage.setItem("email", email);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("password", password);
    
        setFormData({authenticated: true});
        localStorage.setItem("authenticated", true);
        
        // console.log(res.data);
        
      } catch(err) {
        // error catching

        alert('Email is not unique');
        
        console.error(err);
      }
    }
  }

  // checks if user is authenticated before routing to dashbaord
  if (authenticated)
  {
    return (
      <>
        <div role="alert">Welcome</div>
        <Redirect to="/dashboard" />
      </>
    
    )
  } else {

    // returning component
    return (
      <Fragment>
        <Form style={{position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)', fontWeight:"900"}} onSubmit={e => onSubmit(e)} data-testid="form">
            <Form.Group controlId="Name">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name='firstName' defaultValue={firstName} onChange={e => onChange(e)} required />
              <Form.Label className="formLabel">Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" name='lastName' defaultValue={lastName} onChange={e => onChange(e)} required />
            </Form.Group>
          
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="formLabel">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' defaultValue={email} onChange={e => onChange(e)} required />
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="formLabel">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' defaultValue={password} onChange={e => onChange(e)} required />
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="formLabel">Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" name='password2' defaultValue={password2} onChange={e => onChange(e)} required />
            </Form.Group>
            <Button variant="primary" type="submit" data-testid="submitBtn">
              Submit
            </Button>
        </Form>
      </Fragment>
    )
  }
}

export default Register
