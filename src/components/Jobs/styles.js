import tw, { styled } from "twin.macro";

export const Card = tw.article`relative p-4 rounded shadow bg-white dark:bg-gray-800 w-full mb-8`;


export const JobTitle = tw.h4`font-semibold text-base mb-2 dark:text-white`;

export const JobDescription = tw.p`text-gray-500 font-light dark:text-gray-500`;

export const JobSlider = styled.div`
  ${tw`flex items-center gap-4 mt-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap`}
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const JobDetail = tw.span`dark:text-gray-300 text-gray-600 text-sm text-center capitalize`;

export const ButtonsContainer = tw.div`grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2`;