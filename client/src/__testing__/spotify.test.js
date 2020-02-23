import React from 'react'
import Register from '../components/Register'
import Navbarcomp from '../components/Navbarcomp'
import Chordcomp from '../components/Chordcomp'
import Playlist from '../components/Playlist'
import LoginSpot from '../components/LoginSpot'

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import Dashboardhome from '../components/Dashboardhome'

// Chord comp
it('renders app without crashing', () => {
  render(<Chordcomp />)
})

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