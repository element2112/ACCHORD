import React, { Component } from 'react';
import Navbarcomp from '../components/Navbarcomp'
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
