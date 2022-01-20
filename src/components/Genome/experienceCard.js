import "twin.macro";
import React from 'react'
/** @jsxImportSource @emotion/react */

import  Tag  from "../Tag/tag";
import  Flex from "../utils/flex";
import { AwardIcon } from "../Icons/AwardIcon";
import ConditionalWrap  from "../ConditionalWrap/conditionalWrap";
import { ExperienceAvatar, ListItem, TextMuted } from "./styles";


export const ExperienceCard = ({ experience }) => {
    const organizationPicture = experience?.organizations?.filter(
      (org) => org?.picture !== undefined || org?.picture !== null
    );
    return (
        <Flex alignItemsStart justifyStart tw="p-4">
          <div tw="mr-2">
            {organizationPicture.length > 0 && organizationPicture[0]?.picture ? (
              <img
                src={organizationPicture[0].picture}
                width={50}
                height={50}
                layout="fixed"
                tw="rounded"
              />
            ) : (
              <ExperienceAvatar>
                {experience.category === "awards" ? <AwardIcon /> : experience.name.substring(0, 1)}
              </ExperienceAvatar>
            )}
          </div>
          <div tw="w-full">
            <p tw="dark:text-gray-300">{experience.name}</p>
            {experience?.organizations?.length > 0 && <Tag>{experience.organizations[0]?.name}</Tag>}
            <p>
              <ConditionalWrap condition={Boolean(experience.fromMonth && experience.fromYear)}>
                <TextMuted>
                  {experience.fromMonth} {experience.fromYear}
                </TextMuted>
              </ConditionalWrap>
    
              <TextMuted>
                {experience?.toMonth && experience?.toYear
                  ? " - " + experience?.toMonth + " " + experience?.toYear
                  : " - Current"}
              </TextMuted>
            </p>
    
            <div tw="mt-2">
              {experience.responsibilities &&
                experience?.responsibilities?.map((responsibility, index) => (
                  <ListItem key={`responsibility-${index}`}>{responsibility}</ListItem>
                ))}
            </div>
          </div>
        </Flex>
      );
}

