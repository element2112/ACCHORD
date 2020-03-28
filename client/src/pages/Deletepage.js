import React, { Component } from 'react'
import Navbarcomp from '../components/Navbarcomp'
import { Container} from 'react-bootstrap'
import Delete from '../components/Delete';

export class Deletepage extends Component {
    render() {
    // dashboard parent layout
        return (
            <>
            <Navbarcomp />
            <Container>
              <Delete />
            </Container>
          </>
        )
    }
}

export default Deletepage