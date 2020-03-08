import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
// import Navbarcomp from './Navbarcomp'
import { Redirect } from 'react-router-dom'

export class Messages extends Component {

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
      <>
        <Col>
          <Card id='messages'>
            <Card.Body>
              <Card.Title style={{color: "black"}}>{this.state.firstName}'s messages</Card.Title>
              <Card.Text style={{color: "black"}} >
                This is a message
              </Card.Text>
              <Card.Text style={{color: "black"}} >
                This is a message
              </Card.Text>
              <Card.Text style={{color: "black"}} >
                This is a message
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default Messages

