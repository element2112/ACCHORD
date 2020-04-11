async function send_playlist(progression) {

  console.log('progression: ' + progression);

  const new_array = [];

  for (var i = 0; i < progression.length; i++)
  {
    if (progression[i] === '')
      continue;

    new_array.push(progression[i]);
  }

  console.log('new: ' + new_array)

  const res = await fetch('http://localhost:4000/api/users/songs', {
    method: 'POST' ,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "cp": new_array
    }),
  })

  return res.json();
}

export default send_playlist
