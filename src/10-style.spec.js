import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { element } from './10-style.js'

describe('element', () => {
  it('renders the correct class names', () => {
    render(element)
    const smallBlueBox = screen.getByText('small lightblue box')
    expect(smallBlueBox.className).toBe('box  box--small')

    const medPinkBox = screen.getByText('medium pink box')
    expect(medPinkBox.className).toBe('box  box--medium')

    const lrgOrangeBox = screen.getByText('large orange box')
    expect(lrgOrangeBox.className).toBe('box  box--large')

    const sizelessBox = screen.getByText('sizeless box')
    expect(sizelessBox.className).toBe('box  ')
  })

  it('renders the correct styles', () => {
    render(element)
    const smallBlueBox = screen.getByText('small lightblue box')
    console.log(smallBlueBox)
    expect(smallBlueBox.style.backgroundColor).toBe('lightblue')
    expect(smallBlueBox.style.fontStyle).toBe('italic')

    const medPinkBox = screen.getByText('medium pink box')
    expect(medPinkBox.style.backgroundColor).toBe('pink')
    expect(medPinkBox.style.fontStyle).toBe('italic')

    const lrgOrangeBox = screen.getByText('large orange box')
    expect(lrgOrangeBox.style.backgroundColor).toBe('orange')
    expect(lrgOrangeBox.style.fontStyle).toBe('italic')

    const sizelessBox = screen.getByText('sizeless box')
    expect(sizelessBox.style.backgroundColor).toBe('')
    expect(sizelessBox.style.fontStyle).toBe('italic')
  })
})
