import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import queryString from 'query-string'
import Playlist from './Playlist';
import { Spinner } from 'react-bootstrap'
import create_playlist from '../services/create_playlist'
import addTracks from '../services/addTracks'
import spotLogin from '../services/spotLogin'

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
        .catch((err) => console.log('Cant create a playlist at this time. Make sure you are logged into spotify: ' + err))
      }
    
  }

  // all playlist fetching
  async handlePlaylists() {
    console.log('handling playlists')
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    // login to spotify with access token
    const login = await spotLogin(accessToken);
    this.setState({ username: login.display_name, spotifyToken: accessToken });
    this.setState({ loading: true });
    
    // creating playlist
    try {
      const create = await create_playlist(this.state.spotifyToken)
      this.setState({ playlistID: create.id, link: create.external_urls.spotify })


      // searching for track
      await this.search().then(() => console.log('test')).catch((err) => console.log(err))

      // adding track to playlist
      const add = await addTracks(this.state.playlistID, this.state.username, this.state.spotifyToken, this.state.uris)
      this.setState({ playlistID: add.snapshot_id})
      this.setState({ loading: false })
    
    } catch (err) {
      console.log('error creating playlist, make sure you are logged into spotify')
      alert("error creating playlist, make sure you are logged into spotify")
    }
    
  }

  // if loading is set to false, then render the embedded playlist
  // if loading is set to true, render a loading spinner
  render() {
    if (!this.state.loading)
    {
      return (
        <div>
          <Playlist playlists={this.state.link} /> 
          <Button id="loginSee" onClick={() => window.location = window.location.href.includes('localhost') ? 'http://localhost:8888/spotifylogin' : 'https://acchord-backend.herokuapp.com/spotifylogin'}>Login with Spotify</Button>
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
          <Button id="login" onClick={() => {window.location = window.location.href.includes('localhost') ? 'http://localhost:8888/spotifylogin' : 'https://acchord-backend.herokupp.com/spotifylogin'}}>Login with Spotify</Button>
          <Button data-testid="handleList" id="playlists" onClick={this.handlePlaylists}>New Playlist</Button>
        </div>
      )
    }
    
  }
}
