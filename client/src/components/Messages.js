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

  setMessages = (messages) => {
    console.log("setting messages: " + JSON.stringify(messages));
    this.setState({messages: messages}, ()=> {
      console.log("messages is now (handleSubmit): " + JSON.stringify(this.state.messages));
    });
  } 

  componentDidMount() {
    console.log("WE MADE IT INTO COMP DID MOUNT");
    // this is not an issue
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

      fetch("http://localhost:4000/api/users/messages",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({email: localStorage.getItem('email')})
      })
      .then(res => res.json())
      .then(this.setMessages);      
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();

    // accept only if non-whitespace
    let whitespace = /^\s*$/
    if (!whitespace.test(newMessage))
    {
      let state = {email: this.state.email, newMessage: newMessage};
      fetch("http://localhost:4000/api/users/addmessages",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(state)
      })
      .then(res => res.json())
      .then(this.setMessages);
    }
    
    // reset the input field to empty
    e.target.getElementsByTagName("input")[0].value = "";
    newMessage = "";
  }

  update = (e) => {
    console.log("Changing state!");
    let value = e.target.value;
    console.log("Message so far '" + value + "'");
    newMessage = value;
  }

  removeMessage = (i) => {
    return () => {
      let body = {
        email:this.state.email,
        messageIndex:i
      };

      fetch("http://localhost:4000/api/users/removemessages",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(this.setMessages);
    }
  }

  anotherRender = (i) => {
    if(i < this.state.messages.length)
      return(
        <>
          {this.anotherRender(i+1)} 
          <Card.Text>
            {this.state.messages[i]}
            <Button style={{float: "right"}} onClick={this.removeMessage(i)}>
              Delete
            </Button>
          </Card.Text>
        </>
      )
    else return;
  }

  render() {
    return (
      <>
        <Col>
          <Card id='messages'>
            <Card.Body>
              <Card.Title>{this.state.firstName}'s messages</Card.Title>
              <Card.Text>
                 <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formMessage">
                      <Form.Label>Leave A Message!</Form.Label>
                      <Form.Control type="messages" placeholder="Write your message here!" name="messages" onChange={this.update}/>
                    </Form.Group>
                    <Button data-testid="submitButton" variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
              </Card.Text>
              {this.anotherRender(0)}
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

