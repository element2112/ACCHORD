async function addTracks(playlistID, username, spotifyToken, uris) {
  const res = await fetch(`https://api.spotify.com/v1/users/${username}/playlists/${playlistID}/tracks`, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + spotifyToken, 'Content-Type': 'application/json'},
    body: JSON.stringify({
      "uris": uris
    })
  })

  return res.json();
}

export default addTracks
