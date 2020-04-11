import React, { Component, Fragment } from 'react'
import { Card, Form } from 'react-bootstrap'
// import axios from 'axios'
//import '../styles/Dash.css'
// import { Redirect } from 'react-router-dom'

export class Account extends Component {
    constructor(){
        super()
        // original state of component
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          bio: '',
          authenticated: false
        }
      }

      componentWillMount() {
        localStorage.setItem('authenticated', true);
        console.log('test ' + localStorage.getItem('authenticated'));

        if (localStorage.getItem('authenticated'))
        {
          // changing the state from values in local storage
          this.setState({
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
            bio: localStorage.getItem('bio'),
            authenticated: true
          })
        }
      }
      render() {
          return (          
          <Fragment>
          <Form style={{position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)', fontWeight:"900"}}>
            <Form.Group controlId="Account">
              <Form.Label>User Account Information</Form.Label>
            </Form.Group>
            <Form.Group controlId="firstName">
              <Form.Label>First name: {this.state.firstName}</Form.Label>
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last name: {this.state.lastName}</Form.Label>
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email: {this.state.email}</Form.Label>
            </Form.Group>
            <Form.Group controlId="Bio">
              <Form.Label>Bio: {this.state.bio}</Form.Label>
            </Form.Group>
            <a href="/update" className="btn btn-primary">Update account</a>
            <a href="/delete" className="btn btn-primary">Delete account</a>
          </Form>
          </Fragment>
          )
      }
    }
    
    export default Account
