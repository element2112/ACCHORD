import React, { Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import queryString from 'query-string'
import Playlist from './Playlist';
import { Spinner, Carousel } from 'react-bootstrap'
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
      chord4: '',
      storage: [],
      length: 0
    }

    this.handlePlaylists = this.handlePlaylists.bind(this)
    this.search = this.search.bind(this)
    this.handleChord1Change = this.handleChord1Change.bind(this);
    this.handleChord2Change = this.handleChord2Change.bind(this);
    this.handleChord3Change = this.handleChord3Change.bind(this);
    this.handleChord4Change = this.handleChord4Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAlert = this.getAlert.bind(this);
    // this.showHistory = this.showHistory.bind(this)
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
  }
  async handleChord4Change(e) {
    e.preventDefault();
    this.setState({ chord4: e.target.value })
  }

  async handleSubmit() {
    //e.preventDefault();
    console.log(this.state);

    const send = await send_playlist([this.state.chord1, this.state.chord2, this.state.chord3, this.state.chord4]);

    const art_arr = [];
    const track_arr = [];

    for (let i = 0; i < send.length; i++)
    {

      art_arr.push(send[i].artist);
      track_arr.push(send[i].song);
      // this.setState({ artists: [...this.state.artists, send[i].artist], tracks: [...this.state.tracks, send[i].song] })
    }

    this.setState({ artists: art_arr, tracks: track_arr, trackIDs: [],  uris: []});

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
        .then(data => data.tracks.items.length==0? console.log('song '+ this.state.tracks[i] +'::'+ this.state.artists[i] +' not found in spotify') : !this.state.trackIDs.includes(data.tracks.items[0].id) ? this.setState({ trackIDs: [...this.state.trackIDs, data.tracks.items[0].id], uris: [...this.state.uris, data.tracks.items[0].uri] }) : console.log('duplicate tracks detected'))
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
    sessionStorage.setItem('token', accessToken);
    
    // this.reset();
    console.log('hereeeeeeeeeee')
    console.log('arrayyy: ' + this.state.tracks);

    // creating playlist
    try {
      const create = await create_playlist(this.state.spotifyToken, this.state.chord1+"->"+this.state.chord2+"->"+this.state.chord3+"->"+this.state.chord4)
      this.setState({ playlistID: create.id, link: create.external_urls.spotify })
      this.setState({ storage: [... this.state.storage, this.state.link] })
      this.setState({ length: this.state.storage.length })
      // sessionStorage.setItem('playlist', JSON.stringify(this.state.storage));

      // searching for track
      await this.search().then(() => console.log('test')).catch((err) => console.log(err))

      // adding track to playlist
      const add = await addTracks(this.state.playlistID, this.state.username, this.state.spotifyToken, this.state.uris)
      
      this.setState({ playlistID: add.snapshot_id})
      this.setState({ loading: false })
      this.setState({ chord1: '', chord2: '', chord3: '' , chord4: '' })

    } catch (err) {
      console.log('error creating playlist, make sure you are logged into spotify')
      this.setState({ loading: false })
      alert("error creating playlist, make sure you are logged into spotify")
    }
    
  }

  getAlert()
  {
    if (this.state.chord2 === '')
    {
      alert(`GET YOUR PLAYLIST NOW! You've chosen ${this.state.chord1}`)
    }
    else if (this.state.chord3 === '')
    {
      alert(`GET YOUR PLAYLIST NOW! You've chosen ${this.state.chord1} -> ${this.state.chord2}`)
    }
    else if (this.state.chord4 === '')
    {
      alert(`GET YOUR PLAYLIST NOW! You've chosen ${this.state.chord1} -> ${this.state.chord2} -> ${this.state.chord3}`)
    }
    else
    {
      alert(`GET YOUR PLAYLIST NOW! You've chosen ${this.state.chord1} -> ${this.state.chord2} -> ${this.state.chord3} -> ${this.state.chord4}`)
    }
    this.handleSubmit();
  }
  renderHistory(i) {
    if (this.state.length >= 2) {
      return (
        <Col>
          <Carousel>
            <Carousel.Item style={{ alignItems: "center" }}>
              <Playlist playlists={this.state.storage[this.state.length-2]}/>
            </Carousel.Item>
            <Carousel.Item>
              <Playlist playlists={this.state.storage[this.state.length-3]}/>
            </Carousel.Item>
          </Carousel>
        </Col>
      )
    }
    return;
  }
  // if loading is set to false, then render the embedded playlist
  // if loading is set to true, render a loading spinner
  render() {
    if (!this.state.loading)
    {
      return (
        <div width="50%">
          <Row style={{margin: "10px", justifyContent: "center"}}>
            <Playlist playlists={this.state.link} /> 
            <Button id="loginSee" style={{margin: "10px"}} onClick={() => {window.location = window.location.href.includes('localhost') ? 'http://localhost:8888/spotifylogin' : 'https://acchord-backend.herokuapp.com/spotifylogin'}}>Login with Spotify</Button>
          </Row>
          <Row style={{margin: "10px", width: "30rem", justifyContent: "center"}}>
              <select id="chord1" onClick={this.handleChord1Change}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
              </select>
              <select id="chord2" onClick={this.handleChord2Change}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
              </select>
              <select id="chord3" onClick={this.handleChord3Change}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
              </select>
              <select id="chord4" onClick={this.handleChord4Change}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
              </select>
              <pre>   </pre>
              <Button onClick={this.getAlert}>Submit</Button>
              <pre>   </pre>
              <Button data-testid="handleList" id="playlists" onClick={this.handlePlaylists}>New Playlist</Button>
          </Row>
          <Row>
            {this.renderHistory()}
          </Row>
        </div>
      )
    }
    else {
      return (
        <div>
          <Spinner animation="border" role="status" style={{ position:"fixed", top:"20%", left:"50%" }}>
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )
    }
    
  }
}
