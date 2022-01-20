import tw, { styled } from "twin.macro";
/** @jsxImportSource @emotion/react */


const flex = styled.div`
  ${tw`flex`}
  ${({ wrap }) => wrap && tw`flex-wrap`}
  ${({ spaceAround }) => spaceAround && tw`justify-around`}
  ${({ spaceBetween }) => spaceBetween && tw`justify-between`}
  ${({ justifyEnd }) => justifyEnd && tw`justify-end`}
  ${({ justifyStart }) => justifyStart && tw`justify-start`}
  ${({ alignItemsStart }) => alignItemsStart && tw`items-start`}
  ${({ center }) => center && tw`items-center justify-center`}
  ${({ centerH }) => centerH && tw`justify-center`}
  ${({ centerV }) => centerV && tw`items-center`}
  ${({ fullW }) => fullW && tw`w-full`}
  ${({ col }) => col && tw`flex-col`}`

export default flex




