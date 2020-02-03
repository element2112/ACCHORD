import React from 'react'
import { Card, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../styles/Dash.css'

export default function Dashboardhome(props) {
  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col md={{ span: 4, offset: 4 }}>
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
      {/* <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </>
  )
}
