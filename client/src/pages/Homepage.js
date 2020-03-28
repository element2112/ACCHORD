import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import Login from '../components/Login';
import '../styles/Welcome.css';

export class Homepage extends Component {
  render() {
    // landing page parent layout
    return (
      <Container>
        <Login />
      </Container>
    )
  }
}

export default Homepage
