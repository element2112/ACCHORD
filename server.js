const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
let request = require('request')
let querystring = require('querystring')

const users = require('./api/users');

// const spotify = require('./api/spotify');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// const spotPort = process.env.SPOTPORT || 8888;

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/users', users);
// app.use('/api/spotify', spotify);

// --------------------SPOTIFY SERVER----------------------------- //

let redirect_uri = process.env.REDIRECT_URI || 'http://localhost:8888/callback';

app.get('/spotifylogin', function(req, res) {
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email playlist-modify-public',
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
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000/dashboard'
      res.redirect(uri + '?access_token=' + access_token)
      console.log(`Access token: ${access_token}`)
    })
  })

  let spotPort = process.env.SPOTPORT || 8888


  app.listen(spotPort, () => {
    console.log(`Spotify auth server runnong on port ${spotPort}`)
  })


// -------------------END OF SPOTIFY SERVER------------------------------- //


// ------------------------DATABASE CONENCTION----------------------------//
// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

// db connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});