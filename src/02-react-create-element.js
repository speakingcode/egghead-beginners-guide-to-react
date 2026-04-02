import React from 'react'

export const element = React.createElement(
  'div',
  {
    // children: 'Hello World',
    children: React.createElement('span', null, 'Hello', ' World'),
    className: 'container',
  },
  // 'Hello World', ' Goodbye World'
)