import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Playlist(props) {
  // splitting URL
  var parts = `${props.playlists}`.split('/');
  var lastSegment = parts.pop() || parts.pop();

  // link to embedd playlist
  var link = 'https://open.spotify.com/embed/playlist/' + lastSegment;
  
  return (
    <div data-testid="playlist">
      <iframe src={link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  )
}

export default Playlist
