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
      serverData: {},
      link: '',
      playlistID: '',
      trackID: '',
      track: 'feelings',
      artist: 'hayley+kiyoko',
      market: 'US',
      uri: ''
    }

    this.handlePlaylists = this.handlePlaylists.bind(this)
  }

  async componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    let res = await fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + accessToken}
    })

    let data = await res.json()
    this.setState({ username: data.display_name, spotifyToken: accessToken });
  }

  async handlePlaylists() {

    await fetch(`https://api.spotify.com/v1/me/playlists`, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.spotifyToken, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": "test playlist",
        "description": "my description",
        "public": true
      })
    }).then((res) => res.json())
      .then((data) => this.setState({ playlistID: data.id, link: data.external_urls.spotify }))

    await fetch(`https://api.spotify.com/v1/search?q=track:${this.state.track}%20artist:${this.state.artist}&type=track`, {
      headers: { 'Authorization': 'Bearer ' + this.state.spotifyToken, 'Content-Type': 'application/json' }
    }).then((res) => res.json())
      .then(data => this.setState({ trackID: data.tracks.items[0].id, uri: data.tracks.items[0].uri }))
      .then(() => console.log('uri ' + this.state.uri))
      .then(() => console.log('state ' + this.state.username))

    await fetch(`https://api.spotify.com/v1/users/${this.state.username}/playlists/${this.state.playlistID}/tracks`, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.spotifyToken, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        "uris": [this.state.uri]
      })
    }).then((res) => res.json())
      .then((data) => this.setState({ playlistID: data.snapshot_id}))
      .then(() => console.log('TEST ' + this.state.link))
    
  }

  render() {
    return (
      <div>
        <Playlist playlists={this.state.link} />
        <Button id="login" onClick={() => window.location = 'http://localhost:8888/spotifylogin'}>Login with Spotify</Button>
        <Button id="playlists" onClick={this.handlePlaylists}>New Playlist</Button>
      </div>
    )
  }
}
