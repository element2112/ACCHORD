import React from 'react'

const fakeData = [
  {
    playlistID: 'test',
    link: 'https://www.hello.com'
  }
]

async function create_playlist(spotifyToken) {
  return await new Promise((resolve) => {
    resolve(fakeData)
  })
}

export default create_playlist
