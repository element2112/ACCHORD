import React from 'react'

async function send_playlist(progression) {
  console.log('prog ' + progression)
  const res = await fetch('http://localhost:4000/api/users/songs', {
    method: 'POST' ,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "cp": "4,1"
    }),
  })

  console.log('res: ' + res);

  return res.json();
}

export default send_playlist
