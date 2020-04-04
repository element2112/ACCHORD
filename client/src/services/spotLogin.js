async function spotLogin(accessToken) {
 const res = await fetch('https://api.spotify.com/v1/me', {
  headers: { 'Authorization': 'Bearer ' + accessToken}
  })

  return res.json();
}

export default spotLogin
