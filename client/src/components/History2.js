import React from 'react'
import { Carousel } from 'react-bootstrap'
import Playlist from '../components/Playlist'

export class History2 extends Component {
  render() {
    if (retrieve == null)
    {
      return (
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
      )
    }
    else
    {
      return (
        <Carousel>
          <Carousel.Item style={{ alignItems: "center" }}>
            <Playlist playlists={retrieve[0]}/>
          </Carousel.Item>
          <Carousel.Item>
            <Playlist playlists={retrieve[1]}/>
          </Carousel.Item>
        </Carousel>
      )
    }
  }
}

export default History2
