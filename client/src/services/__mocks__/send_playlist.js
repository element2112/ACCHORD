import React from 'react'

const fakeData = [
  {
    playlistID: 'test',
  }
]

async function create_playlist(spotifyToken) {
  return await new Promise((resolve) => {
    resolve(fakeData)
  })
}