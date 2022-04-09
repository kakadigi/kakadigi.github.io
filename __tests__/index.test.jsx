// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a button', () => {
    render(<Home />)

    const heading = screen.getByRole('button', {
      name: /Get Started/i,
    })

    expect(heading).toBeInTheDocument()
  })
})