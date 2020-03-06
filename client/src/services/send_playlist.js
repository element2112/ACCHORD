import React from 'react'

function send_playlist(progression ) {
  const res = await fetch('/api/something', {
    method: 'POST' ,
    headers: 'Content-Type': 'application/json',
    body: JSON.stringify({

    })
  })

  return res.json();
}

export default send_playlist
