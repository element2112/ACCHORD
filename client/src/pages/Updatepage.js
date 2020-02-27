import React, { Component } from 'react'
import Navbarcomp from '../components/Navbarcomp'
import { Container} from 'react-bootstrap'
import Update from '../components/Update';

export class Updatepage extends Component {
    render() {
    // dashboard parent layout
        return (
            <>
            <Navbarcomp />
            <Container>
              <Update />
            </Container>
          </>
        )
    }
}

export default Updatepage