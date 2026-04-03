import React from 'react'

export const tick = () => {
  const time = new Date().toLocaleTimeString()

  return (
    <>
      <input value={time} readOnly />
      <input value={time} readOnly />
    </>
  )
}