import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { App } from './11-event-handlers'

const renderer = () => {
  const { rerender } = render(<App />)
  rerender(<App render={rerender} />)
}

describe ('App', () => {
  beforeEach(() => {
    renderer()
  })

  it('handles button click events', () => {
    const button = screen.getByText('Click Me')
    fireEvent.click(button)
    expect(screen.findByText('There have been 1 events')).toBeDefined()

    fireEvent.click(button)
    expect(screen.findByText('There have been 2 events')).toBeDefined()
  })
})
