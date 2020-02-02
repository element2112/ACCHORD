import React, { Component } from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import Login from '../components/Login';

export class Homepage extends Component {
  render() {
    return (
      <Container >
        <Login />
      </Container>
    )
  }
}

export default Homepage
