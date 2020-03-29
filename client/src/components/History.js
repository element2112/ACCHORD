import React, { useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import Playlist from '../components/Playlist'

function History() {

  const retrieve = JSON.parse(sessionStorage.getItem('playlist'));
  console.log('TEST: ' + retrieve);
  
  let n = retrieve.length;

  if (retrieve == null)
  {
    return (
      <>
        <Carousel>
          <Carousel.Item style={{ alignItems: "center" }}>
            <Playlist />
          </Carousel.Item>
          <Carousel.Item>
            <Playlist />
          </Carousel.Item>
          <Carousel.Item>
            <Playlist />
          </Carousel.Item>
        </Carousel>

      </>
    )
  }
  else
  {
    return (
      <Carousel>
        <Carousel.Item style={{ alignItems: "center" }}>
          <Playlist playlists={retrieve[n-1]}/>
        </Carousel.Item>
        <Carousel.Item>
          <Playlist playlists={retrieve[n-2]}/>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default History

