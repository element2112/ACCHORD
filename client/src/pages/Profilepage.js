import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
import { Container } from 'react-bootstrap'
import Profile from '../components/Profile';

export class Profilepage extends Component {
  render() {
    // dashboard parent layout
    return (
      <>
        <Navbarcomp />
        <Profile />
      </>
    )
  }
}

export default Profilepage
