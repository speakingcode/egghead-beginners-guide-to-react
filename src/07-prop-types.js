import React from 'react'
import PropTypes from 'prop-types'

export const SayHello = ({firstName, lastName}) => {
  return (
    <div>
      Hello {firstName} {lastName}!
    </div>
  )
}

SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export const element = <SayHello firstName={false} />