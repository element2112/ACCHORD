import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
// import Navbarcomp from './Navbarcomp'
import '../styles/Dash.css'
import { Redirect } from 'react-router-dom'

export class Dashboardhome extends Component {

  constructor(){
    super()
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
    if (this.state.authenticated == true)
    {
      return (
        <>
          <Row>
            <Col md={4}></Col>
            <Col md={{ span: 4, offset: 9 }} style={{marginLeft: "82%"}}>
              <Card id='profile-bio'>
                <Card.Body>
                  <Card.Title>{this.state.firstName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                  </Card.Subtitle>
                  <Card.Text>
                    BIO
                  </Card.Text>
                  <Card.Link href="#">MY spotify profile</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )
    }
    else
    {
      return(<Redirect to="/" />)
    }
  }
}

export default Dashboardhome

