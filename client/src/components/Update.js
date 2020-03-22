import React, { Fragment, Component, useState } from 'react'
import { Form, Button, FormLabel } from 'react-bootstrap'
import axios from 'axios'
import '../styles/Dash.css'
import { Redirect } from 'react-router-dom'

const Update = () => {

const [formData, setFormData] = useState({
  originalEmail: localStorage.getItem('email'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
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

    updatedUser.originalEmail = localStorage.getItem('email');

    const body = JSON.stringify(updatedUser);

    console.log("calling route");
    const res = await axios.put('http://localhost:4000/api/users/updateuser', body, config);
    // console.log("Res is: " + res);

    // update values in local storage to be used in dashboard/account
    localStorage.setItem("email", email);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("password", password);

    setFormData({authenticated: true});
    localStorage.setItem("authenticated", true);
    res.Redirect('/account');
    } catch(err) {
      // error catching        
      // console.error(err);
    }
  }
      
      // render() {
          return (
            <Fragment>
            {/* <form action = "/Users/localStorage.getItem('email')?_method=PUT"
            method = "POST">
              <FormLabel>First Name</FormLabel>
              <input type="text" name = "name" defaultValue={firstName} onChange={e => onChange(e)} required }></input>
              <a href = "/account">Cancel</a>
              <button type= "submit">Update</button>
            </form> */}
            <Form style={{position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)', fontWeight:"900"}} onSubmit={e => onSubmit(e)} data-testid="form">
            <Form.Group controlId="Name">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder={localStorage.firstName} name='firstName' defaultValue={firstName} onChange={e => onChange(e)} required />
            </Form.Group>
            <button type= "submit">Update</button>
            </Form>
          </Fragment>
          )
      }
    
    export default Update
