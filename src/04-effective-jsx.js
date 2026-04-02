import React from 'react'

const children = 'Hello World'
const className = 'container'
const props = {children, className}

export const element = <div id="app-root" {...props} className="not-container" />