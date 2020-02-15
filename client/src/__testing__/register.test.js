import React from 'react'
import Register from '../components/Register'
import App from '../app'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

// app renders
it('app renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})

// app renders
it('renders without crashing', () => {
  render(<Register />)
})

it('onSubmit is called', () => {

  const logSpy = jest.spyOn(console, "log");
  const { getByTestId } = render(<Register />);
  expect(getByTestId("submitBtn")).toBeTruthy();
  fireEvent.submit(getByTestId("form"));
  expect(logSpy).toHaveBeenCalledTimes(1);
});