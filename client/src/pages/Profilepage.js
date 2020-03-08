import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
import { Container } from 'react-bootstrap'
import Profile from '../components/Profile';
import Chordcomp from '../components/Chordcomp';
import LoginSpot from '../components/LoginSpot';

export class Profilepage extends Component {
  render() {
    // dashboard parent layout
    return (
      <>
        <Navbarcomp />
        <Container>
          <LoginSpot />
        </Container>
        <Container>
          <Profile />
        </Container>
        <Chordcomp />
      </>
    )
  }
}

export default Profilepage
