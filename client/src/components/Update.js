import React, { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
//import '../styles/Dash.css'
import { Redirect } from 'react-router-dom'

const Update = () => {

const [formData, setFormData] = useState({
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
  bio: localStorage.getItem('bio'),
  updated: false
});

// array destructure for state
const {firstName, lastName, email, password, bio, updated } = formData;

// change the state as input is being typed
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // sending form data to API on submit
const onSubmit = async e => {
  console.log('in submit');

  if (password.length < 6) {
    alert('passwords must be at least 6 characters')
  }

  e.preventDefault();

  const updatedUser = {
    firstName,
    lastName,        
    email,
    password,
    bio
  }

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify(updatedUser);

    console.log("test: " + updatedUser);

    localStorage.setItem('password', updatedUser.password);
    localStorage.setItem('firstName', updatedUser.firstName);
    localStorage.setItem('lastName', updatedUser.lastName);
    localStorage.setItem('bio', updatedUser.bio);

    setFormData({updated: true});
    // const res = await axios.put('http://localhost:4000/api/users/updateuser', body, config);
    
    await axios.put('http://localhost:4000/api/users/updateuser', body, config);

    console.log("updated");

    setFormData({authenticated: true});
    localStorage.setItem("authenticated", true);

    } catch(err) {
      // error catching        
      // console.error(err);
    }
  }
      if (!updated) {
        return (
          <Fragment>
          <Form style={{position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)', fontWeight:"900"}} onSubmit={onSubmit} data-testid="form">
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder={localStorage.firstName} name='firstName' defaultValue={firstName} onChange={onChange} />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder={localStorage.lastName} name='lastName' defaultValue={lastName} onChange={onChange} />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder={localStorage.password} name='password' defaultValue="******" onChange={onChange} />
            </Form.Group>
            <Form.Group controlId="Bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" placeholder={localStorage.bio} name='bio' rows="4" defaultValue={bio} onChange={onChange} />
            </Form.Group>
          <button type= "submit">Update</button>
          </Form>
        </Fragment>
        )
    }
    else {
      return (
        <>
          <Redirect to="/account" />
        </>
      )
    }
  }
          
    export default Update
