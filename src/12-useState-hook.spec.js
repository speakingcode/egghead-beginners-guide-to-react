import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Greeting } from './12-useState-hook.js'

describe ('Greeting', () => {
  beforeEach(() => {
    render(<Greeting />)
  })

  it('renders two inputs with label "Name:"', () => {
    expect(screen.getAllByLabelText('Name:')).toHaveLength(2)
  })

  it('greets each name uniquely', async () => {
    fireEvent.change(screen.getAllByLabelText('Name:')[0], {target: {value: 'john'}})
    fireEvent.change(screen.getAllByLabelText('Name:')[1], {target: {value: 'doe'}})

    const greeting1 = await screen.findByText('Hello john')
    const greeting2 = await screen.findByText('Hello doe')

    expect(greeting1).toBeDefined()
    expect(greeting2).toBeDefined()
  })
})
