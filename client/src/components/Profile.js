import React, { Component } from 'react'
import { Card, Row } from 'react-bootstrap'
// import Navbarcomp from './Navbarcomp'
import { Redirect } from 'react-router-dom'
import Messages from './Messages'

export class Profile extends Component {

  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      authenticated: false,
      bio: 'This is where you can describe yourself to other users!'
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
      // TODO: get the bio from db record
    }
  }

  render() {
    if (this.state.authenticated === true)
    {
      // jsx returned to show on screen
      return (
        <>
          <Row>
            <Card id='profile-bio'>
              <Card.Body>
                <Card.Title style={{color: "black"}}>{this.state.firstName}</Card.Title>
                <Card.Text style={{color: "black"}}>
                  BIO: {this.state.bio}
                </Card.Text>
              </Card.Body>
            </Card>
            <Messages />
          </Row>
        </>
      )
    }
    else
    {
      return(<Redirect to={window.location.href.includes('localhost') ? '/' : 'https://acchord.herokuapp.com'} />)
    }
  }
}

export default Profile

