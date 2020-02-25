import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import queryString from 'query-string'
import Playlist from './Playlist';
import { Spinner } from 'react-bootstrap'

export default class LoginSpot extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      spotifyToken: '',
      link: '',
      playlistID: '',
      trackIDs: [],
      tracks: ['feelings', 'yellow', 'alison', 'tuscan leather', 'gimme'],
      artists: ['hayley kiyoko', 'coldplay', 'elvis costello', 'drake', 'banks'],
      market: 'US',
      uris: [],
      loading: false
    }

    this.handlePlaylists = this.handlePlaylists.bind(this)
    this.search = this.search.bind(this)
  }

  // loops through an array of artists to prepare to add to playlist
  async search() {

    let i = 0;

    for (i; i < this.state.artists.length; i++)
    {
      await fetch(`https://api.spotify.com/v1/search?q=track:${this.state.tracks[i]}%20artist:${this.state.artists[i]}&type=track`, {
      headers: { 'Authorization': 'Bearer ' + this.state.spotifyToken, 'Content-Type': 'application/json' }
      }).then((res) => res.json())
        .then(data => !this.state.trackIDs.includes(data.tracks.items[0].id) ? this.setState({ trackIDs: [...this.state.trackIDs, data.tracks.items[0].id], uris: [...this.state.uris, data.tracks.items[0].uri] }) : console.log('duplicate tracks detected'))
        .catch((err) => alert('Cant create a playlist at this time. Make sure you are logged into spotify: ' + err))
      }
    
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
    await this.search().then(() => console.log('test')).catch((err) => console.log(err))

    // adding track to playlist
    await fetch(`https://api.spotify.com/v1/users/${this.state.username}/playlists/${this.state.playlistID}/tracks`, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.spotifyToken, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        "uris": this.state.uris
      })
    }).then((res) => res.json())
      .then((data) => this.setState({ playlistID: data.snapshot_id}))
      .then(() => console.log('FETCHING TRACK ' + this.state.uris))
      .then(() => this.setState({ loading: false }))
      .catch((err) => alert('Cant create a playlist at this time. Make sure you are logged into spotify: ' + err))
    
  }

  // if loading is set to false, then render the embedded playlist
  // if loading is set to true, render a loading spinner
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
