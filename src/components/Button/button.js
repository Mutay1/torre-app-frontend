/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

import React from 'react'

const Button = (props) => {
  return (
    <a css={[
        tw`inline-flex items-center justify-center px-6 py-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none`,

        props.secondary
            ? tw`text-gray-600 bg-gray-300 hover:bg-gray-400 hover:text-gray-700 focus:ring-gray-600`
            : tw`text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-600`,
        props.small ? tw`px-3 py-1` : tw`px-6 py-3`,
    ]} onClick={props.click}>
      {props.children}
    </a>
  )
}

export default Button
