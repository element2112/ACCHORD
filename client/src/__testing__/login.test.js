import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, queryByAll } from '@testing-library/react'
import Login from '../components/Login'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

// app renders
it('renders login without crashing', () => {
  const div = document.createElement('div')
  render(<BrowserRouter><Login /></BrowserRouter>, div)
})

it('should login', () => {
  const logSpy = jest.spyOn(console, "log");
  const { getByTestId } = render(<BrowserRouter><Login /></BrowserRouter>);
  expect(getByTestId("loginButton")).toBeTruthy();
  fireEvent.submit(getByTestId("login"));
  expect(logSpy).toHaveBeenCalled();
});

// it('should log out', () => {
//   const logSpy = jest.spyOn(console, "log");
//   const { getByText } = render(<Navbarcomp />);
//   expect(getByText("Logout")).toBeTruthy();
//   fireEvent.click(getByText("Logout"));
//   expect(logSpy).toHaveBeenCalled();
// })
