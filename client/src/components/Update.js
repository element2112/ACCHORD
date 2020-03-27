import React, { Fragment, Component, useState } from 'react'
import { Form, Button, FormLabel } from 'react-bootstrap'
import axios from 'axios'
//import '../styles/Dash.css'
import { Redirect } from 'react-router-dom'

const Update = () => {


const [formData, setFormData] = useState({
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
  updated: false
});

// array destructure for state
const { firstName, lastName, email, password, updated } = formData;

// change the state as input is being typed
const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // sending form data to API on submit
const onSubmit = async e => {
  console.log('in submit');
  e.preventDefault();

  const updatedUser = {
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

    // console.log("test: " + updatedUser);

    localStorage.setItem('password', updatedUser.password);
    localStorage.setItem('firstName', updatedUser.firstName);
    localStorage.setItem('lastName', updatedUser.lastName);

    await axios.put('http://localhost:4000/api/users/updateuser', body, config)
          .then(() => {
            setFormData({updated: true});
          })
                
    console.log('updated: ' + updated)


    // res.Redirect('/account');
    } catch(err) {
      // error catching        
      console.error(err);
    }
  }
      
// render() {
  if (updated)
  {
    return (<Redirect to="/account" />)
  }
  else 
  {
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
          <button type= "submit">Update</button>
        </Form>
      </Fragment>
    )
  }
}
    
export default Update
