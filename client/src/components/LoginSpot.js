import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import queryString from 'query-string'
import Playlist from './Playlist';
import { Spinner, Form } from 'react-bootstrap'
import create_playlist from '../services/create_playlist'
import addTracks from '../services/addTracks'
import spotLogin from '../services/spotLogin'
import send_playlist from '../services/send_playlist'

export default class LoginSpot extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      spotifyToken: '',
      link: '',
      playlistID: '',
      trackIDs: [],
      tracks: [],
      artists: [],
      market: 'US',
      uris: [],
      loading: false,
      chord1: '',
      chord2: '',
      chord3: '',
      chord4: ''
    }

    this.handlePlaylists = this.handlePlaylists.bind(this)
    this.search = this.search.bind(this)
    this.handleChord1Change = this.handleChord1Change.bind(this);
    this.handleChord2Change = this.handleChord2Change.bind(this);
    this.handleChord3Change = this.handleChord3Change.bind(this);
    this.handleChord4Change = this.handleChord4Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChord1Change(e) {
    e.preventDefault();
    this.setState({ chord1: e.target.value })
    // console.log(this.state.chord1)
  }

  async handleChord2Change(e) {
    e.preventDefault();
    this.setState({ chord2: e.target.value })
  }

  async handleChord3Change(e) {
    e.preventDefault();
    this.setState({ chord3: e.target.value })
    // console.log(this.state.chord1)
  }

  async handleChord4Change(e) {
    e.preventDefault();
    this.setState({ chord4: e.target.value })
    // console.log(this.state.chord1)
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    const send = await send_playlist([this.state.chord1, this.state.chord2, this.state.chord3, this.state.chord4]);

    for (let i = 0; i < send.length; i++)
    {
      this.setState({ artists: [...this.state.artists, send[i].artist], tracks: [...this.state.tracks, send[i].song] })
    }


    // console.log('send: '+ JSON.stringify(send));

    console.log('ARTISTS: ' + this.state.artists);
    console.log('songs: ' + this.state.tracks);

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
    sessionStorage.setItem('token', this.state.spotifyToken);
    
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
          <Form onSubmit={this.handleSubmit}>
            <select onClick={this.handleChord1Change}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
            </select>
            <select onClick={this.handleChord2Change}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
            </select>
            <select onClick={this.handleChord3Change}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
            </select>
            <select onClick={this.handleChord4Change}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option></option>
            </select>
            <Button type="submit">Submit</Button>
          </Form>
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
