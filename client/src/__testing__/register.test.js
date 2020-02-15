import React from 'react'
import Register from '../components/Register'
import Navbarcomp from '../components/Navbarcomp'
import App from '../app'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitForElement } from '@testing-library/react'

// app renders
it('renders app without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})

// app renders
it('renders without crashing', () => {
  render(<Register />)
})

it('should not submit', () => {

  const logSpy = jest.spyOn(console, "log");
  const { getByTestId } = render(<Register />);
  expect(getByTestId("submitBtn")).toBeTruthy();
  fireEvent.submit(getByTestId("form"));
  expect(logSpy).toHaveBeenCalledTimes(1);
});

it('should log out', () => {
  const logSpy = jest.spyOn(console, "log");
  const { getByText } = render(<Navbarcomp />);
  expect(getByText("Logout")).toBeTruthy();
  fireEvent.click(getByText("Logout"));
  expect(logSpy).toHaveBeenCalled();
  
})
