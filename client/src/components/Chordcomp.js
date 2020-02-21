import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export class Chordcomp extends Component {

  constructor() {
    super();
    this.state = {
      chord1: '',
      chord2: '',
      chord3: ''
    }

    this.handleChord1Change = this.handleChord1Change.bind(this);
    this.handleChord2Change = this.handleChord2Change.bind(this);
    this.handleChord3Change = this.handleChord3Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChord1Change(e) {
    e.preventDefault();
    await this.setState({ chord1: e.target.value })
    // console.log(this.state.chord1)
  }

  async handleChord2Change(e) {
    e.preventDefault();
    await this.setState({ chord2: e.target.value })
    // console.log(this.state.chord1)
  }

  async handleChord3Change(e) {
    e.preventDefault();
    await this.setState({ chord3: e.target.value })
    // console.log(this.state.chord1)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    // here we'll fetch
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Row style={{margin: "10px"}}>
            <Col>
              <input type="text" name="chord1" placeholder="chord 1" onChange={this.handleChord1Change} />
              <input  type="text" name="chord2" placeholder="chord 2" onChange={this.handleChord2Change} />
              <input  type="text" name="chord3" placeholder="chord 3" onChange={this.handleChord3Change}/>
              <button type="submit">Get Playlist</button>
            </Col>
          </Row>
      </Form>
      </div>
    )
  }
}

export default Chordcomp
