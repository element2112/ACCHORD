import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
import { Container } from 'react-bootstrap'
import Dashboardhome from '../components/Dashboardhome';
import Chordcomp from '../components/Chordcomp';

export class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbarcomp />
        <Container>
          <Dashboardhome />
        </Container>
        <Chordcomp />
      </>
    )
  }
}

export default Dashboard
