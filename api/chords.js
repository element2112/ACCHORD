const axios = require('axios');

const CHORD_API_URI = 'https://api.hooktheory.com/v1/';

exports.getSongs = async prog => {
  console.log("CHORDS");
  console.log('PROG ' + prog);
  await axios.post(CHORD_API_URI + 'users/auth', {
    "username": "COPGroup16",
	  "password": "acchord123"
  }).then(async authRes => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + authRes.data.activkey;
    console.log("GOT THE KEY " + axios.defaults.headers.common['Authorization']);
    console.log("PROG = " + prog);
  });

  return await axios.get(CHORD_API_URI + 'trends/songs?cp=' + prog)
    .then(res => {
      console.log("WE GOT IT");
      // console.log(res.data);

      if (res.data.length == 20)
      {
        console.log("There might be another page!");
        // var next = getDiffPage(prog);
        // console.log("And it has: /n" + next.data);
      }

      return res.data;
      // console.log(response.data[1].song);
      // console.log(response.data[1].artist);
    })
    .catch(error => {
      console.log("YIKES");
      console.log(error);
    })
}

getDiffPage = async prog => {
  console.log("CALLING NEXT PAGE");
  return await axios.get(CHORD_API_URI + 'trends/songs?cp=' + prog + '&page=2')
        .then(res => {
          console.log("WE GOT SOMETHING");
          console.log(res.data);
          return res.data;
        })
        .catch(err => {
          console.log("WE DID NOT LIKE THAT");
          console.log(err);
        })
}