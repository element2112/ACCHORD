import React from 'react'
import spotify_logo from '../images/spotify_logo.png'
import {Card} from 'react-bootstrap'

function Playlist(props) {
  // splitting URL
  var parts = `${props.playlists}`.split('/');
  var lastSegment = parts.pop() || parts.pop();

  if (!lastSegment)
  {
    return (
            <Card id="spotify" style={{ width: '20rem', border: "rounded", borderTopLeftRadius: "10rem", borderTopRightRadius: "10rem", margin: "10px"}}>
              <Card.Img className="spotifylogo" variant="top" src={spotify_logo} style={{height: "18rem", width: "18rem", margin: "1rem", borderRadius: "50%"}}/>
              <Card.Body >
                <Card.Title>
                  
                  Welcome to Acchord!
                  
                </Card.Title>
                <Card.Text>
                  We wanted to give you some instructions on how to use the site.
                  <br/>
                  <br/>
                  Press login with spotify and you will be redirected to the spotiy website to enter in your login credentials. 
                  <br/>
                  <br/>
                  If you don't already have a spotify account, create one!
                  <br/>
                  <br/>
                  After logging into spotify, use the drop down to select the progression would like to look up and afterwards press submit.
                  <br/>
                  <br/>
                  After pressing submit, click "New Playlist" and your new playlist has been generated!
                  <br/>
                  <br/>
                  Up to two playlists will be shown in the "History" section.
                </Card.Text>
              </Card.Body>
            </Card>
          )
  }
  else
  {
    // link to embedd playlist
    var link = 'https://open.spotify.com/embed/playlist/' + lastSegment;
    return (
      <div data-testid="playlist" margin="20px">
        <iframe src={link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    )
  }
}

export default Playlist
