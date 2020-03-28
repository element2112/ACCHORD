import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
import { Container } from 'react-bootstrap'
import Dashboardhome from '../components/Dashboardhome';
import Chordcomp from '../components/Chordcomp';
import LoginSpot from '../components/LoginSpot';
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
      </>
    )
  }
}

export default Dashboard
