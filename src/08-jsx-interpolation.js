import React from 'react'

export function CharacterCount({text}) {
  return (
    <div>
      {`The text "${text}" has `}
      {text.length ? <strong>{text.length}</strong> : 'No'}
      {' characters'}
    </div>
  )
}

export const element = (
  <>
    <CharacterCount text="Hello World" />
    <CharacterCount text="" />
  </>
)