const express = require('express');
const cors = require('cors');
let request = require('request')
let querystring = require('querystring')

// const users = require('./api/users');

// const spotify = require('./api/spotify');

require('dotenv').config();

const app = express();
// const port = process.env.PORT || 4000;

// const spotPort = process.env.SPOTPORT || 8888;

app.use(cors());
app.use(express.json());

// ------------------------------------------------- //

let redirect_uri = process.env.REDIRECT_URI || 'http://localhost:8888/callback';

app.get('/spotifylogin', function(req, res) {
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'playlist-modify-public playlist-read-public playlist-read-private playlist-modify-private',
      redirect_uri
    }))
})

app.get('/callback', function(req, res) {
    let code = req.query.code || null
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(
          process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64'))
      },
      json: true
    }
    request.post(authOptions, function(error, response, body) {
      var access_token = body.access_token
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
      res.redirect(uri + '?access_token=' + access_token)
      console.log(`response: ${response.body}`)
    })
  })

  let spotPort = process.env.SPOTPORT || 8888


  app.listen(spotPort, () => {
    console.log(`Spotify auth server running on port ${spotPort}`)
  })