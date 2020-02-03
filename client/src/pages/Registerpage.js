import React, { Component } from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import Register from '../components/Register';

export class Homepage extends Component {
  render() {
    return (
      <Container>
        <Register />
      </Container>
    )
  }
}

export default Register
