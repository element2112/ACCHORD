const axios = require('axios');

const CHORD_API_URI = 'https://api.hooktheory.com/v1/';

// router.get('/songs', function(req, res, next) {
//   request({
//     uri: '',
//     cp: req.params.chords,
//     function(error, response, body) {
//       if (!error && response.statusCode === 200) {
//         console.log(body);
//       }
//     }
//   });
// });

exports.getSongs = async prog => {
  console.log("CHORDS");
  await axios.post(CHORD_API_URI + 'users/auth', {
    "username": "COPGroup16",
	  "password": "acchord123"
  }).then(async res => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.activkey;
    console.log("GOT THE KEY " + axios.defaults.headers.common['Authorization']);
    console.log("PROG = " + prog);
  });

  return await axios.get(CHORD_API_URI + 'trends/songs?cp=' + prog)
    .then(response => {
      console.log("WE GOT IT");
      console.log('test: ' + prog);
      // console.log(response.data);
      return response.data
      // console.log(response.data[1].song);
      // console.log(response.data[1].artist);
    })
    .catch(error => {
      console.log("YIKES");
      console.log(error);
    })
}