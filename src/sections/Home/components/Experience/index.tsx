import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
import { Timeline } from '../Timeline'
import { useExperience } from './hooks'

const { Item: TimelineItem } = Timeline

const ExperienceStyles = styled.div`
  margin-bottom: 6rem;
`

export const Experience = () => {
  const experienceData = useExperience()

  const timelineItemElements = useMemo(
    () =>
      experienceData.map(
        ({ description, startOn, endOn, id, workplace, position }) => (
          <TimelineItem
            key={id}
            source={workplace}
            title={position}
            description={description}
            startOn={startOn}
            endOn={endOn}
          />
        )
      ),
    [experienceData]
  )

  return (
    <ExperienceStyles>
      <Heading>Experience</Heading>
      <Timeline>{timelineItemElements}</Timeline>
    </ExperienceStyles>
  )
}
