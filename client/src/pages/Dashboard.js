import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
import { Container } from 'react-bootstrap'
import Dashboardhome from '../components/Dashboardhome';
import Chordcomp from '../components/Chordcomp';
import LoginSpot from '../components/LoginSpot';
import Playlist from '../components/Playlist';

export class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbarcomp />
        <Container>
          <Playlist />
          <LoginSpot />
        </Container>
        <Container>
          <Dashboardhome />
        </Container>
        <Chordcomp />
      </>
    )
  }
}

export default Dashboard
