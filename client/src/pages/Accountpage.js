import React, { Component } from 'react'
import Navbarcomp from '../components/Navbarcomp'
import { Container} from 'react-bootstrap'
import Account from '../components/Account';

export class Accountpage extends Component {
    render() {
    // dashboard parent layout
        return (
            <>
            <Navbarcomp />
            <Container>
              <Account />
            </Container>
          </>
        )
    }
}

export default Accountpage