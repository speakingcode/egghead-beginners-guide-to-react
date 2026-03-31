import React from 'react'

const state = {eventCount: 0, username: ''}

export const App = ({render}) => {
  const handleClick = () => {
    setState({eventCount: state.eventCount + 1}, render)
  }

  const handleChange = (event) => {
    setState({username: event.target.value}, render)
  }

  return (
    <div>
      <p>There have been {state.eventCount} events.</p>
      <p>
        <button onClick={handleClick}>Click Me</button>
      </p>
      <p>You typed: {state.username}</p>
      <p>
        <input onChange={handleChange} />
      </p>
    </div>
  )
}

const setState = (newState, render) => {
  Object.assign(state, newState)
  render()
}
