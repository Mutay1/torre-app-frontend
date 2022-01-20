import "twin.macro";
/** @jsxImportSource @emotion/react */
import React, {useState, useCallback} from 'react'
import { split } from "../../utils/split";
import  Flex from "../utils/flex";
import TorreButton from "../Button/torreButton";
import { LocationIcon } from "../Icons/LocationIcon";
import { ExperienceCard } from "./experienceCard";
import { Collapsible } from "../Collapsible/collapsible";
import { NotFoundImage } from "../NotFoundImage/index";
import ConditionalWrap  from "../ConditionalWrap/conditionalWrap";
import { SocialIcon } from "../Icons/SocialIcon";
import { VerifiedIcon } from "../Icons/VerifiedIcon";
import {useParams} from "react-router-dom"
import Accordion from "./accordion"
import {useSkill} from "../../hooks/useBio"
import axios from "axios"
import {
  Card,
  ImageCard,
  LanguageCode,
  LanguageFluency,
  LanguageName,
  LanguagesContainer,
  ListItem,
  Location,
  SectionTitle,
  SocialLink,
  UserHeadline,
  Username,
} from "./styles";


export function Genome({ data }) {
    const {username} = useParams()
    const [id, setId] = React.useState("")
    const [skills, setSkill] = React.useState([])
    //   const res = useSkill(username, id)
    //   const skill = res?.data.data
    //   skills.push({
    //     id: skill.id,
    //     recommendations: skill.stats.recommendations
    //   })
    //   setSkill(skills)
    

      const [isSending, setIsSending] = useState(false)
      const sendRequest = useCallback(async (id) => {
        const index = skills.findIndex(el => el.id === id)
        if (isSending || index !== -1) return
        setIsSending(true)
        const payload = {
          username: username,
          id: id
        }
        const res = await axios.post("/api/bio/skill", payload);
        const result = res.data
        skills.push({
              id: result.data.id,
              recommendations: result.data.stats.recommendations
            })
        setSkill(skills)
        setIsSending(false)
      }, [isSending])
    
  return (
    <>
      <Flex tw="col-span-1" centerV col>
        <ConditionalWrap condition={data.person?.pictureThumbnail}>
          <ImageCard style={{ zIndex: 2 }}>
            {data?.person?.pictureThumbnail ? (
              <img
                src={data?.person?.pictureThumbnail}
                alt={`Picture of ${data.person.name}`}
                tw="inline-block h-24 w-24 rounded-full"
                width={150}
                layout="intrinsic"
                height={150}
              />
            ) : (
              <NotFoundImage tw="inline-block h-24 w-24 rounded-full" />
            )}
          </ImageCard>
        </ConditionalWrap>
        <Card tw="-top-8 pt-8 mb-1">
          <Username>
            {data.person.name} {data.person.verified && <VerifiedIcon />}
          </Username>
          <Flex centerH tw="gap-2 mb-2" wrap={true}>
            {data.person.links.map((link) => (
              <SocialLink
                href={link.address}
                target="_blank"
                rel="noreferrer noopener"
                key={link.id}
              >
                <SocialIcon name={link.name} />
              </SocialLink>
            ))}
          </Flex>
          <ConditionalWrap condition={Boolean(data.person?.location)} name={"genome2"}>
            <Location>
              <LocationIcon tw="text-blue-500" /> {data.person.location.name}
            </Location>
          </ConditionalWrap>
          <UserHeadline>{data.person.professionalHeadline}</UserHeadline>
          <TorreButton
            href={`https://bio.torre.co/en/${data.person.publicId}`}
            target="_blank"
            rel="noreferrer noopener"
            tw="w-full flex mt-2"
          >
            Signal
          </TorreButton>
        </Card>
        <ConditionalWrap condition={data?.interests?.length > 0} name={"genome3"}>
          <Card>
            <h2 tw="font-semibold text-xl mb-2 dark:text-white">Skills s/he wants to develop:</h2>

            <ul>
              {data.interests?.map((interest) => (
                <ListItem key={interest.id}>{interest.name}</ListItem>
              ))}
            </ul>
          </Card>
        </ConditionalWrap>

        <ConditionalWrap condition={data?.strengths?.length > 0} name={"genome4"}>
          <Card>
              
            <h2 tw="font-semibold text-xl mb-2 dark:text-white">Strengths</h2>
            {data?.strengths?.filter(el => el.proficiency === "master").length ?
              <> 
                <h4 tw="text-lg font-semibold dark:text-white">Master/Influencer</h4>
                <ul tw="mb-4">
                  {data?.strengths?.filter(el => el.proficiency === "master").map((strength, i) => (
                      <Accordion strength={strength} i={i} key={strength.id} skills={skills} click={sendRequest}/>))}
                </ul>
              </> : null}
            
            {data?.strengths?.filter(el => el.proficiency === "expert").length ?
              <> 
                <h4 tw="text-lg font-semibold dark:text-white">Expert</h4>
                <ul tw="mb-4">
                  {data?.strengths?.filter(el => el.proficiency === "expert").map((strength, i) => (
                      <Accordion strength={strength} key={strength.id} i={i} skills={skills} click={sendRequest}/>))}
                </ul>
              </> : null}
            {data?.strengths?.filter(el => el.proficiency === "proficient").length ?
              <> 
                <h4 tw="text-lg font-semibold dark:text-white">Proficient</h4>
                <ul tw="mb-4">
                  {data?.strengths?.filter(el => el.proficiency === "proficient").map((strength, i) => (
                      <Accordion strength={strength} i={i} key={strength.id} skills={skills} click={sendRequest}/>))}
                </ul>
              </> : null}
            {data?.strengths?.filter(el => el.proficiency === "novice").length ?
              <> 
                <h4 tw="text-lg font-semibold dark:text-white">Novice</h4>
                <ul tw="mb-4">
                  {data?.strengths?.filter(el => el.proficiency === "novice").map((strength, i) => (
                      <Accordion strength={strength} i={i} key={strength.id} skills={skills} click={sendRequest}/>))}
                </ul>
              </> : null}
            
              {data?.strengths?.filter(el => el.proficiency === "no-experience-interested").length ?
              <> 
                <h4 tw="text-lg font-semibold dark:text-white">No experience, but interested</h4>
                <ul tw="mb-4">
                  {data?.strengths?.filter(el => el.proficiency === "no-experience-interested").map((strength, i) => (
                      <Accordion strength={strength} i={i} key={strength.id} skills={skills} click={sendRequest}/>))}
                </ul>
              </> : null}
  
          </Card>
        </ConditionalWrap>
      </Flex>

      <div tw="col-span-2">
        <ConditionalWrap condition={Boolean(data?.person?.summaryOfBio)} name={"genome5"}>
          <Card>
            <SectionTitle>About {data?.person?.name}</SectionTitle>
            <Collapsible text={data?.person?.summaryOfBio} />
          </Card>
        </ConditionalWrap>

        <Card>
          <SectionTitle>Jobs</SectionTitle>

          <div tw="divide-y divide-gray-300 dark:divide-gray-500">
            <ConditionalWrap condition={Boolean(data?.jobs)}>
              <>
                {data.jobs?.length > 0 ? (
                  data.jobs?.map((job) => <ExperienceCard key={job.id} experience={job} />)
                ) : (
                  <NotFoundImage />
                )}
              </>
            </ConditionalWrap>
          </div>
        </Card>

        <Card>
          <SectionTitle>Education</SectionTitle>

          <div tw="divide-y divide-gray-300 dark:divide-gray-500">
            <ConditionalWrap condition={Boolean(data?.education)}>
              <>
                {data.education?.length > 0 ? (
                  data.education?.map((education) => (
                    <ExperienceCard key={education.id} experience={education} />
                  ))
                ) : (
                  <NotFoundImage />
                )}
              </>
            </ConditionalWrap>
          </div>
        </Card>

        <Card>
          <SectionTitle>Projects</SectionTitle>

          <div tw="divide-y divide-gray-300 dark:divide-gray-500">
            <ConditionalWrap condition={Boolean(data?.projects)}>
              <>
                {data.projects?.length > 0 ? (
                  data.projects?.map((project) => (
                    <ExperienceCard key={project.id} experience={project} />
                  ))
                ) : (
                  <NotFoundImage />
                )}
              </>
            </ConditionalWrap>
          </div>
        </Card>

        <Card>
          <SectionTitle>Awards</SectionTitle>

          <div tw="divide-y divide-gray-300 dark:divide-gray-500">
            <ConditionalWrap condition={Boolean(data?.awards)}>
              <>
                {data?.awards?.length > 0 ? (
                  data.awards?.map((award) => (
                    <ExperienceCard key={award.id} experience={award} />
                  ))
                ) : (
                  <NotFoundImage />
                )}
              </>
            </ConditionalWrap>
          </div>
        </Card>

        <Card>
          <h2 tw="font-semibold text-xl mb-2 dark:text-white">Languages</h2>

          <LanguagesContainer>
            {data?.languages?.length > 0 ? (
              data.languages?.map((lang) => (
                <Flex key={lang.code} centerV justifyStart tw="p-2">
                  <LanguageCode>{lang?.code}</LanguageCode>
                  <p tw="px-2">
                    <LanguageName>{lang?.language}</LanguageName>
                    <LanguageFluency>{split(lang?.fluency ?? "")}</LanguageFluency>
                  </p>
                </Flex>
              ))
            ) : (
              <NotFoundImage tw="inline-block h-24 w-24 rounded-full" />
            )}
          </LanguagesContainer>
        </Card>
      </div>
    </>
  );
}