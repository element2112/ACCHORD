import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import '../styles/Dash.css'
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
        // localStorage.setItem('authenticated', true);
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
            <div>
                <p>User Account Information:</p>
                <p>First name: {this.state.firstName}</p>
                <p>Last name: {this.state.lastName}</p>
                <p>Email: {this.state.email}</p>
                {/* <p>Password: {this.state.password}</p> */}
            </div>
          )
      }
    }
    
    export default Account

