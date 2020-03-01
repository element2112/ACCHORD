import React from 'react'

async function create_playlist(spotifyToken) {
  const res = await fetch(`https://api.spotify.com/v1/me/playlists`, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + spotifyToken, 'Content-Type': 'application/json'},
    body: JSON.stringify({
      "name": "test playlist",
      "description": "my description",
      "public": true
    })
  })

  return res.json();
}

export default create_playlist
