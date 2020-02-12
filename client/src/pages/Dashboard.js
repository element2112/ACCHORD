import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
import { Container } from 'react-bootstrap'
import Dashboardhome from '../components/Dashboardhome';

export class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbarcomp />
        <Container>
          <Dashboardhome />
        </Container>
      </>
    )
  }
}

export default Dashboard
