import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import queryString from 'query-string'
import Playlist from './Playlist';

export default class LoginSpot extends Component {

  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: '',
      spotifyToken: '',
      serverData: {}
    }
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + accessToken}
    }).then((res) => res.json())
      . then(data => this.setState({ username: data.display_name, spotifyToken: accessToken }))
    
    fetch(`https://api.spotify.com/v1/${this.state.username}/playlists`, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json'},
        body: {
          "name": "new playlist",
          "description": "my description",
          "public": true
        }
      }).then((res) => res.json())
        .then(data => console.log(data))

    console.log(parsed);
  }

  render() {
    return (
      <div>
        {/* <Playlist playlists={playlist}/> */}
        <Button onClick={() => window.location = 'http://localhost:8888/spotifylogin'}>Login with Spotify</Button>
      </div>
    )
  }
}
