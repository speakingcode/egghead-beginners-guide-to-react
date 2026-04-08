import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { element } from './02-react-create-element.js'

describe('element', () => {
  it('should be a React object', () => {
    expect(element["$$typeof"]).toEqual(Symbol.for('react.transitional.element'))
  })

  it('should render a DOM element', () => {
    render(element)
    const domElement = screen.getByText('Hello World')
    
    expect(domElement).toBeDefined()
    expect(domElement.outerHTML).toEqual('<span>Hello World</span>')
  })
})

