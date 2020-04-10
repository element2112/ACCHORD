import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
import { Container } from 'react-bootstrap'
import Dashboardhome from '../components/Dashboardhome';
// import Chordcomp from '../components/Chordcomp';
import LoginSpot from '../components/LoginSpot';
import Example from '../components/Example';
// import History from '../components/History';
//import '../styles/Dash.css';

export class Dashboard extends Component {
  render() {

    // dashboard parent layout
    return (
      <>
        <Navbarcomp />
        <Container>
          <LoginSpot />
        </Container>
        <Container>
          <Dashboardhome />
        </Container>
        <Container>
          <Example />
        </Container>
      </>
    )
  }
}

export default Dashboard
