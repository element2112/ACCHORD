import React from 'react'
import Account from '../components/Account'
import Update from '../components/Update'
import App from '../app'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitForElement } from '@testing-library/react'

// app renders
it('renders app without crashing', () => {
    const div = document.createElement('div')
    render(<App />, div)
  })

// account page renders
it('renders account page without crashing', () => {
    render(<Account />)
  })

  // update page renders
it('renders account page without crashing', () => {
    render(<Update />)
  })