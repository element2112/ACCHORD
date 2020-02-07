import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Navbarcomp from './Navbarcomp'
import '../styles/Dash.css'

export default function Dashboardhome(props) {
  return (
    <>
      <Navbarcomp />
      <Row>
        <Col md={4}></Col>
        <Col md={{ span: 4, offset: 4 }} style={{marginLeft: "82%"}}>
          <Card id='profile-bio'>
            <Card.Body>
              <Card.Title>props.name goes here</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Idk something else
                </Card.Subtitle>
              <Card.Text>
                This is my bio or something + a picture
              </Card.Text>
              <Card.Link href="#">MY spotify profile</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

