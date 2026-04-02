import React from 'react'

export const Message = (props) => <div className="message">{props.children}</div>

export const element = (
  <div className="container">
    <Message>Hello World</Message>
    <Message>Goodbye World</Message>
  </div>
)