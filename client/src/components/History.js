import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import Playlist from './Playlist'

export class History extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Playlist playlists={sessionStorage.getItem('playlist')}/>
        </Carousel.Item>
        <Carousel.Item>
          <Playlist playlists={sessionStorage.getItem('playlist')}/>
        </Carousel.Item>
        <Carousel.Item>
          <Playlist playlists={sessionStorage.getItem('playlist')}/>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default History
