import React from 'react'
import { Card } from 'react-bootstrap'
import spotify_logo from '../../public/spotify_logo.png'

function Playlist(props) {
  // splitting URL
  var parts = `${props.playlists}`.split('/');
  var lastSegment = parts.pop() || parts.pop();

  // link to embedd playlist
  var link = 'https://open.spotify.com/embed/playlist/' + lastSegment;
  
  if (!lastSegment)
  {
    return (
      <Card style={{ width: '20rem', border: "rounded"}}>
        <Card.Img variant="top" src={spotify_logo} />
        <Card.Body>
          <Card.Title>
            
            Welcome to Acchord!
            
          </Card.Title>
          <Card.Text>
            <p>
              We wanted to give you some instructions on how to use the site.
              <br></br>
              <br></br>
              Press login with spotify and you will be redirected to the spotiy website to enter in your login credentials. 
              <br></br>
              <br></br>
              If you don't already have a spotify account, create one!
              <br></br>
              <br></br>
              After logging into spotify, use the drop down to select the progression would like to look up and afterwards press submit.
              <br></br>
              <br></br>
              After pressing submit, click "New Playlist" and your new playlist has been generated!
              <br></br>
              <br></br>
              Up to three playlists will be shown in the "History" section.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  else
  {
    return (
      <div data-testid="playlist">
        <iframe src={link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    )
  }
}

export default Playlist
