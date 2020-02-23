import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Playlist(props) {
  var link = "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
  return (
    <div>
      <iframe src={link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  )
}

export default Playlist
