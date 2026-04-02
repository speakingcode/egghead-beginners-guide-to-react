import React from 'react'

export function tick() {
  const time = new Date().toLocaleTimeString()

  return (
    <>
      <input value={time} readOnly />
      <input value={time} readOnly />
    </>
  )
}