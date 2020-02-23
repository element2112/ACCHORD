import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Playlist(props) {
  var parts = `${props.playlists}`.split('/');
  var lastSegment = parts.pop() || parts.pop();

  var link = 'https://open.spotify.com/embed/playlist/' + lastSegment;

  console.log('playlist embedded')
  
  return (
    <div data-testid="playlist">
      <iframe src={link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  )
}

export default Playlist
