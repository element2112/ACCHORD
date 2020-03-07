import React from 'react'

function send_playlist(progression) {
  const res = await fetch('http://localhost:4000/api/users/songs', {
    method: 'GET' ,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "pos1": `${progression.chord1}`,
      "pos2": `${progression.chord2}`,
      "pos3": `${progression.chord3}`,
      "pos4": `${progression.chord4}`
    }),
  })

  return res.json();
}

export default send_playlist
