import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createElement } from './01-create-element.js'

describe('createElement', () => {
  it('should create a DOM element', () => {
    const element = createElement()
    expect(element.outerHTML).toEqual('<div class="container">Hello World</div>')
  })
})

