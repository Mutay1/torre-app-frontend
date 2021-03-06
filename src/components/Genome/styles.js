import tw from "twin.macro";
import React from 'react'
import { CheckIcon } from "../Icons/CheckIcon";
import  Flex from "../utils/flex";

// User data
export const Username = tw.h3`flex items-center justify-center p-4 text-lg font-semibold dark:text-white`;

export const Location = tw.p`dark:text-gray-300 text-gray-600 text-sm text-center mb-2 flex items-center justify-center`;

export const UserHeadline = tw.p`prose dark:text-gray-300`;

export const LanguageCode = tw.span`w-10 h-10 flex items-center justify-center rounded-full text-xl text-blue-100 uppercase bg-gradient-to-r from-indigo-400 to-blue-500`;

export const LanguageName = tw.span`block text-gray-800 text-base dark:text-gray-200`;

export const LanguageFluency = tw.span`block text-gray-600 capitalize text-sm dark:text-gray-400`;

// Additional components
export const SocialLink = tw.a`hover:bg-gray-100 hover:dark:bg-gray-600 p-1 rounded-full`;

export const ImageCard = tw.section`inline-flex justify-center items-center mx-auto w-auto bg-white rounded-full shadow-lg p-1`;

export const Card = tw.article`relative p-4 rounded shadow bg-white dark:bg-gray-800 w-full mb-8`;

export const TextMuted = tw.span`text-gray-600 text-sm dark:text-gray-300`;

export const ExperienceAvatar = tw.span`w-12 h-12 flex items-center justify-center rounded text-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white`;

// export const SectionContainer = tw.article`bg-white p-4 rounded shadow dark:bg-gray-800`;

export const SectionTitle = tw.h3`font-semibold text-xl mb-2 dark:text-white`;

export const LanguagesContainer = tw.div`divide-y divide-gray-300 dark:divide-gray-500 `;

export const ListItem = ({ children, click, id}) => {
  return (
    <Flex alignItemsStart tw="gap-1 mb-1 pl-5 relative">
        <CheckIcon tw="text-green-500 w-4 h-4 absolute left-0" />
        <a tw="text-sm text-gray-800 dark:text-gray-300" onClick={() => click(id)}>{children}</a>
    </Flex>
  )
}


