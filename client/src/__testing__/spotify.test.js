import React from 'react'
import Playlist from '../components/Playlist'
import LoginSpot from '../components/LoginSpot'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, getByTestId } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() })

// playlist
it('renders playlist without crashing', () => {
  render(<Playlist />)
})

// login spot
it('renders loginspot without crashing', () => {
  render(<LoginSpot />)
})

it('should handle playlists', () => {
  const logSpy = jest.spyOn(console, "log");
  const { getByTestId } = render(<LoginSpot />);
  expect(getByTestId("handleList")).toBeTruthy();
  fireEvent.click(getByTestId("handleList"));
  expect(logSpy).toHaveBeenCalled();
});

jest.mock('../services/send_playlist')

it ('sends playlist', (done) => {
  const wrapper = shallow(<LoginSpot />)

  const state = wrapper.instance().state
  expect(state.uris).toEqual([]);

  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find("Playlist").length).toEqual(1);
    done();
  })

})

jest.mock('../services/addTracks');

it ('adds track', (done) => {
  const wrapper = shallow(<LoginSpot />)

  const state = wrapper.instance().state
  expect(state.uris).toEqual([]);

  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find("Playlist").length).toEqual(1);
    done();
  })

})

jest.mock('../services/create_playlist')

it('creates a playlist', (done) => {
  const wrapper = shallow(<LoginSpot />)

  const state = wrapper.instance().state
  expect(state.loading).toBeFalsy();

  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find("Playlist").length).toEqual(1);
    done();
  })
})

