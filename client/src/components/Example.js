import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
// import Navbarcomp from './Navbarcomp'

export class Example extends Component {

  constructor(){
    super()
    // original state of component
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      authenticated: false,
      messages: ['This is a default message.']
    }
  }

  componentDidMount() {
    console.log("WE MADE IT INTO COMP DID MOUNT");

    if (localStorage.getItem('authenticated'))
    {
      // changing the state from values in local storage
      this.setState({
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        authenticated: true
      });     
    }
  }

  render() {
    return (
      <>
        <Col>
          <Card id='example'>
            <Card.Body>
              <Card.Title>Not sure what progressions to use? Try these!</Card.Title>
                1->5->6->4 (most popular)
                <ul>
                    <li>'Someone Like You' by Adele</li>
                    <li>'Girlfriend' by Avril Lavigne</li>
                    <li>'Living On A Prayer' by Bon Jovi</li>
                    <li>'Africa' by Toto</li>
                </ul>
                6->5->4->5
                <ul>
                    <li>'My Heart Will Go On' by Celine Dion</li>
                    <li>'Girls Just Want To Have Fun' by Cyndi Lauper</li>
                    <li>'Titanium' by David Guetta feat. Sia</li>
                    <li>'Beat It' by Michael Jackson</li>
                </ul>
                1->6->4->5
                <ul>
                    <li>'She's Everything' by Brad Paisley</li>
                    <li>'Stand By Me' by Ben E King</li>
                    <li>'All I Want For Christmas Is You' by Mariah Carey</li>
                    <li>'Every Breath You Take' by The Police</li>
                </ul>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default Example