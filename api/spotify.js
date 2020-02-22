




// var http = require('http');


// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);


// var express = require('express');
// var request = require('request')
// var querystring = require('querystring')
// var cookieParser = require('cookie-parser')

// var router = express.Router();
// require('dotenv').config();

// // var SpotifyWebApi = require('spotify-web-api-node');
// // var scopes = ['user-read-private', 'user-read-email','playlist-modify-public','playlist-modify-private'],
// //   redirectUri = 'http://localhost:4000/callback',
// //   clientId: process.env.SPOTIFY_API_ID;



// // var credentials = {
// //   clientId: process.env.SPOTIFY_API_ID,
// //   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
// //   redirectUri: redirectUri
// // }

// // var spotifyApi = new SpotifyWebApi(credentials);

// // var authorizeURL = spotifyApi.createAuthorizeURL(scopes);


// router.get('/callback', function(req, res) {
//   // console.log('res ' + res.access_token)
// })

// // spotifyApi.setAccessToken('<your_access_token>');

// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Express' });
// // });

// // router.get('/login', (req,res) => {
// //   var html = spotifyApi.createAuthorizeURL(scopes)
// //   console.log(html)
// //   res.send(html+"&show_dialog=true")  
// // })

// // router.get('/callback', async (req,res) => {
// //   const { code } = req.query;
// //   console.log(code)
// //   try {
// //     var data = await spotifyApi.authorizationCodeGrant(code)
// //     const { access_token, refresh_token } = data.body;
// //     spotifyApi.setAccessToken(access_token);
// //     spotifyApi.setRefreshToken(refresh_token);

// //     res.redirect('http://localhost:4000');
// //   } catch(err) {
// //     res.redirect('/#/error/invalid token');
// //   }
// // });

// // router.get('/playlists', async (req,res) => {
// //   try {
// //     var result = await spotifyApi.getUserPlaylists();
// //     console.log(result.body);
// //     res.status(200).send(result.body);
// //   } catch (err) {
// //     res.status(400).send(err)
// //   }

// // });

// // module.exports = router;

// for loginspot.js
// var access_token = '';

// const params = {
//   client_id: '0199dfb275e94ee38b6fd208166c334b',
//   redirect_uri: 'http://localhost:4000/api/spotify/callback',
//   response_type: 'token',
//   scopes: 'playlist-modify-private playlist-modify-public'
// };

// const options = {
//   method: 'GET',
//   headers: {
//     'Authorization': 'Bearer ' + access_token,
//   },
//   contentType: 'application/x-www-form-urlencoded',
//   mode: 'cors',
// }

// var esc = encodeURIComponent;
// var query = Object.keys(params)
//     .map(k => `${esc(k)}=${esc(params[k])}`)
//     .join('&');

// fetch(`https://accounts.spotify.com/authorize?${query}`, options)
//   .then(function(res) {
//     // console.log('response,' + JSON.stringify(res))
//     this.setState({ spotifyToken: res.access_token });
//   })
//   .catch(function(err) {
//     console.log(err);
//   })

// module.exports = router;

