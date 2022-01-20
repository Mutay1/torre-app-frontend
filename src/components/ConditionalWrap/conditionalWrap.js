import React from 'react'
/** @jsxImportSource @emotion/react */

const conditionalWrap = ({condition, children, name}) => {
  return (
    condition ? React.cloneElement(children) : null
  )
}

export default conditionalWrap
