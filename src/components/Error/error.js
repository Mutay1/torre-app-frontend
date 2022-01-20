import React from 'react'
import "twin.macro";
/** @jsxImportSource @emotion/react */

import Flex from "../utils/flex";
import { ErrorIcon } from "../Icons/index";
import ConditionalWrap  from "../ConditionalWrap/conditionalWrap";

const Error = ({ show, children }) => {
  return (
    <ConditionalWrap condition={show} name={"error"}>
    <Flex tw="col-span-3" centerH>
      <div tw="bg-red-100 text-red-500 p-4 rounded shadow flex items-center w-full max-w-md">
        <ErrorIcon tw="text-red-500 w-6 h-6 dark:text-red-500" />
        {children}
      </div>
    </Flex>
  </ConditionalWrap>
  )
}

export default Error
