import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import queryString from 'query-string'
import Playlist from './Playlist';
import { Spinner } from 'react-bootstrap'

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
      track: 'yellow',
      artist: 'coldplay',
      market: 'US',
      uri: '',
      loading: false
    }

    this.handlePlaylists = this.handlePlaylists.bind(this)
  }

  // all playlist fetching
  async handlePlaylists() {

    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    await fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + accessToken}
    }).then((res) => res.json())
      .then((data) => this.setState({ username: data.display_name, spotifyToken: accessToken }))
      .then(() => this.setState({ loading: true }))
      .catch((err) => alert(`Cannot login due to ${err}`))
    
    // creating playlist
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
      .catch((err) => alert('Cant create a playlist at this time. Make sure you are logged into spotify: ' + err))

    // searching for track
    await fetch(`https://api.spotify.com/v1/search?q=track:${this.state.track}%20artist:${this.state.artist}&type=track`, {
      headers: { 'Authorization': 'Bearer ' + this.state.spotifyToken, 'Content-Type': 'application/json' }
    }).then((res) => res.json())
      .then(data => this.setState({ trackID: data.tracks.items[0].id, uri: data.tracks.items[0].uri }))
      .catch((err) => alert('Cant create a playlist at this time. Make sure you are logged into spotify: ' + err))

    // adding track to playlist
    await fetch(`https://api.spotify.com/v1/users/${this.state.username}/playlists/${this.state.playlistID}/tracks`, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.spotifyToken, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        "uris": [this.state.uri]
      })
    }).then((res) => res.json())
      .then((data) => this.setState({ playlistID: data.snapshot_id}))
      .then(() => console.log('FETCHING TRACK'))
      .then(() => this.setState({ loading: false }))
      .catch((err) => alert('Cant create a playlist at this time. Make sure you are logged into spotify: ' + err))
    
  }

  // render
  render() {
    if (!this.state.loading)
    {
      return ( 
        <div>
          <Playlist playlists={this.state.link} /> 
          <Button id="login" onClick={() => window.location = 'http://localhost:8888/spotifylogin'}>Login with Spotify</Button>
          <Button data-testid="handleList" id="playlists" onClick={this.handlePlaylists}>New Playlist</Button>
        </div>
      )
    }
    else {
      return (
        <div>
          <Spinner animation="border" role="status" style={{ position:"fixed", top:"20%", left:"50%" }}>
            <span className="sr-only">Loading...</span>
          </Spinner>
          <Playlist /> 
          <Button id="login" onClick={() => window.location = 'http://localhost:8888/spotifylogin'}>Login with Spotify</Button>
          <Button data-testid="handleList" id="playlists" onClick={this.handlePlaylists}>New Playlist</Button>
        </div>
      )
    }
    
  }
}
