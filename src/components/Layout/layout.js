import React from 'react'
import Navbar from "../Navbar/navbar"
/** @jsxImportSource @emotion/react */

const layout = (props) =>{
    const title = "Your matching network for work"
    return (
        <>
            <head>
                <title>Torre - {title}</title>
            </head>
            <Navbar />
            <main tw="w-full bg-gray-50 pt-14 dark:bg-gray-900 min-h-screen">{props.children}</main>
        </>
    )
}

export default layout