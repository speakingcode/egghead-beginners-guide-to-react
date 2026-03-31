import React from 'react'
import { render, screen } from '@testing-library/react'
import { Greeting } from './12-useState-hook.js'

describe ('Greeting', () => {
  it('renders two forms', () => {
    render(<Greeting />)
    expect(screen.getAllByLabelText('Name:')).toHaveLength(2)
  })
})
