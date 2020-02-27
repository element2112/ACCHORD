import React from 'react'
import Account from '../components/Account'
import App from '../app'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitForElement } from '@testing-library/react'

// app renders
it('renders app without crashing', () => {
    const div = document.createElement('div')
    render(<App />, div)
  })

// app renders
it('renders account page without crashing', () => {
    render(<Account />)
  })