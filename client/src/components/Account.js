import React, { Component, Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import axios from 'axios'
//import '../styles/Dash.css'
import { Redirect } from 'react-router-dom'

export class Account extends Component {

    constructor(){
        super()
        // original state of component
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
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
            authenticated: true
          })
        }
      }
      render() {
          return (
            <Card style={{ width: '100rem' }}>
            <Card.Body>
              <Card.Title>User Account Information</Card.Title>
                <Card.Text >
                    First name: {this.state.firstName}
                </Card.Text>
                <Card.Text >
                    Last name: {this.state.lastName}
                </Card.Text>
                <Card.Text >
                    Email: {this.state.email}
                </Card.Text>
              <a href="/update" className="btn btn-primary">Update account</a>
              <a href="/dashboard" className="btn btn-primary">Delete account</a>
            </Card.Body>
          </Card>
          )
      }
    }
    
    export default Account
