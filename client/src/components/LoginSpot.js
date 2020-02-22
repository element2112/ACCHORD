import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class LoginSpot extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: '',
      spotifyToken: ''
    }
  }
  
  
  handleClick = () => {
   
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Login with Spotify</Button>
        {/* <a href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}></a> */}
      </div>
    )
  }
}
