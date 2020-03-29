import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
import { Container, Row, Col } from 'react-bootstrap'
import Dashboardhome from '../components/Dashboardhome';
// import Chordcomp from '../components/Chordcomp';
import LoginSpot from '../components/LoginSpot';
import History from '../components/History';
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
