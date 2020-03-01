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

exports.getSongs = () => {
  console.log("CHORDS");
  return axios.get(CHORD_API_URI + 'trends/songs?cp=4,1')
  .then(response => {
    console.log("WE GOT IT");
    console.log(response.data.song);
    console.log(response.data.artist);
  })
  .catch(error => {
    console.log("YIKES");
    console.log(error);
  })
}