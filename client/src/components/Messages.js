import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
// import Navbarcomp from './Navbarcomp'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const headers = {
  'Content-Type': 'application/json'
}

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
      messages: ''
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
        messages: localStorage.getItem('messages'),
        authenticated: true
      })
    }
  }

  handleCommentSubmission = () => {
    console.log("refreshing");
    this.setState({refresh: true});
  }

  handleSubmit = (e) => {
    console.log('leaving comment');
    let state = this.state;
    fetch("http://localhost:4000/api/users/updateuser",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(state)
    })
    .then(res => res.json())
    .then(this.handleCommentSubmission);
    e.preventDefault();
  }

  update = (e) => {
    console.log("Changing state!");
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  render() {
    return (
      <>
        <Col>
          <Card id='messages'>
            <Card.Body>
              <Card.Title style={{color: "black"}}>{this.state.firstName}'s messages</Card.Title>
              <Card.Text style={{color: "black"}} >
                 <Form>
                    <Form.Group controlId="formMessage">
                      <Form.Label>Leave A Message!</Form.Label>
                      <Form.Control type="messages" placeholder="Write your message here!" name="messages" onChange={this.update} />
                    </Form.Group>
                    <Button data-testid="submitButton" variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
              </Card.Text>
              <Card.Text style={{color: "black"}} >
                {this.state.messages}
              </Card.Text>
              <Card.Text style={{color: "black"}} >
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

