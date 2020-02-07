import React, { Fragment, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: ''
  });

  const { firstName, lastName, email, password1, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password1 !== password2)
    {
      alert('passwords do not match');
    } else {
      console.log(formData);
    }
  }
  return (
    <Fragment>
      <Form style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)', fontWeight:"900"}} onSubmit={e => onSubmit(e)} >
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
            <Form.Control type="password" placeholder="Password" name='password1' defaultValue={password1} onChange={e => onChange(e)} required />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="formLabel">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" name='password2' defaultValue={password2} onChange={e => onChange(e)} required />
          </Form.Group>
          <Button variant="primary" type="submit"  >
            Submit
          </Button>
       </Form>
    </Fragment>
  )
}

export default Register
