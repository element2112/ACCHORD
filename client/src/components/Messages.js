import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
// import Navbarcomp from './Navbarcomp'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const headers = {
  'Content-Type': 'application/json'
}

var newMessage;

export class Messages extends Component {

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

  

  componentWillMount() {
    console.log('test ' + localStorage.getItem('authenticated'));
    console.log("WE MADE IT INTO COMP WILL MOUNT");
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
      })

      let state = this.state;

      axios.get("http://localhost:4000/api/users/messages",
      {
        headers: headers,
        body: JSON.stringify(state)
      })
      .then(dbMessages => this.setState({messages: dbMessages}));      
    }
  }

  handleMessageSubmission = () => {
    console.log("refreshing");
    this.setState({refresh: true});
  }

  handleSubmit = (e) => {
    if (this.state.messages[0] == 'This is a default message.')
      this.state.messages[0] = newMessage;
    else
      this.state.messages.push(newMessage);
    
    let currMessages = this.state.messages;
    this.setState({messages: currMessages});
    let state = this.state;
    console.log("messages is now (handleSubmit): " + state.messages);
    fetch("http://localhost:4000/api/users/addmessages",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(state)
    })
    .then(res => res.json())
    //.then(this.handleMessageSubmission);
    e.preventDefault();
  }

  update = (e) => {
    console.log("Changing state!");
    let value = e.target.value;
    console.log("Message so far '" + value + "'");
    newMessage = value;
  }

  render() {
    return (
      <>
        <Col>
          <Card id='messages'>
            <Card.Body>
              <Card.Title style={{color: "black"}}>{this.state.firstName}'s messages</Card.Title>
              <Card.Text style={{color: "black"}} >
                 <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formMessage">
                      <Form.Label>Leave A Message!</Form.Label>
                      <Form.Control type="messages" placeholder="Write your message here!" name="messages" />
                    </Form.Group>
                    <Button data-testid="submitButton" variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
              </Card.Text>
              <Card.Text style={{color: "black"}} >
                {this.state.messages[1]}
              </Card.Text>
              <Card.Text style={{color: "black"}} >
                {this.state.messages[0]}
              </Card.Text>
              <Card.Text>
                This is a default message.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default Messages

