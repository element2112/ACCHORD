const fakeData = [
  {
    uris: ['123', '456']
  }
]

async function addTracks(playlistID, username, spotifyToken, uris) {
  return await new Promise((resolve) => {
    resolve(fakeData)
  })
}

export default addTracks