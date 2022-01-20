import tw, { styled } from "twin.macro";
/** @jsxImportSource @emotion/react */

export const Svg = styled.svg`
  ${tw`w-5 h-5 text-gray-600 dark:text-gray-200`}
  ${({ fillCurrent = true }) => (fillCurrent ? tw`fill-current` : tw`stroke-current`)}
`;
