import React, { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
//import '../styles/Dash.css'
import { Redirect } from 'react-router-dom'

const Delete = () => {

const [formData, setFormData] = useState({
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
  deleted: false
});

// array destructure for state
const { firstName, lastName, email, password, deleted } = formData;

// change the state as input is being typed
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // sending form data to API on submit
const onSubmit = async e => {
  e.preventDefault();

  let userInfo = {
    firstName,
    lastName,        
    email,
    password,
    deleted
  }
  try {
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    userInfo.firstName = localStorage.getItem('firstName');
    userInfo.lastName = localStorage.getItem('lastName');  
    userInfo.email = localStorage.getItem('email');
    userInfo.password = localStorage.getItem('password');

    config.data = JSON.stringify(userInfo);

    // remove information from localStorage
    localStorage.setItem('password', '');
    localStorage.setItem('firstName', '');
    localStorage.setItem('lastName', '');
    localStorage.setItem('email', '');
    localStorage.setItem('bio', '');


    // Let's not worry about what happens when the button is clicked really fast
    axios.delete('http://localhost:4000/api/users/deleteuser', config);

    setFormData({deleted: true});

    } catch(err) {
      // error catching        
      // console.error(err);
    }
  }
      
  if (!deleted) {
    return (
      <Fragment>
      <Form style={{position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)', fontWeight:"900"}} onSubmit={onSubmit} data-testid="form">
        <Form.Group controlId="firstName">
          <Form.Label>Hi, {localStorage.firstName}</Form.Label>
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Are you sure you want to delete your account?</Form.Label>
        </Form.Group>
      <button type= "submit">Delete</button>
      </Form>
    </Fragment>
    )
  }
  else  {
    return (
    <>
      <div role="alert">Welcome</div>
      <Redirect to="/" />
    </>
  
  )
  }
} 
    export default Delete
