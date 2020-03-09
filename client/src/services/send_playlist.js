import React from 'react'

function send_playlist(progression) {
  console.log('prog ' + progression)
  const res = await fetch('../../api/users/songs', {
    method: 'GET' ,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "cp": `${progression[0]},${progression.chord2[1]}`
    }),
  })

  console.log('res: ' + res);

  return res.json();
}

export default send_playlist
