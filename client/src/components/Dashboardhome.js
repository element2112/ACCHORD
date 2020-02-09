import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Navbarcomp from './Navbarcomp'
import '../styles/Dash.css'

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

  componentDidMount() {
    console.log('test ' + localStorage.getItem('email'));
    this.setState({
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password'),
      authenticated: true
    })
  }

  

  render() {
    return (
      <>
        <Navbarcomp />
        <Row>
          <Col md={4}></Col>
          <Col md={{ span: 4, offset: 4 }} style={{marginLeft: "82%"}}>
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
}

export default Dashboardhome

