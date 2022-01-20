import React from 'react'
import tw from "twin.macro";
import useRouter from "../../hooks/router"
/** @jsxImportSource @emotion/react */

const Navlink = (props) => {
    const router = useRouter()
    
  return (
    <a css={[
        tw`transition hover:text-torre-500`,

        props.href === router.pathname
            ? tw`font-medium text-torre-500`
            : tw`font-normal text-gray-500`,
    ]}
        onClick={() => {
          router.history(props.href)}}>
      {props.children}
    </a>
  )
}

export default Navlink
