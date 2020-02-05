import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container>
          <Dashboardhome />
        </Container>
      </div>
    )
  }
}

export default Dashboard
