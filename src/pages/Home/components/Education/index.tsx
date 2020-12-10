import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
import { Timeline } from '../Timeline'
import { useEducation } from './hooks'

const { Item: TimelineItem } = Timeline

const EducationStyles = styled.div`
  margin-bottom: 6rem;
`

export const Education = () => {
  const educationData = useEducation()

  const timelineItemElements = useMemo(
    () =>
      educationData.map(({ description, id, title, source }) => (
        <TimelineItem
          key={id}
          source={source}
          title={title}
          description={description}
        />
      )),
    [educationData]
  )

  return (
    <EducationStyles>
      <Heading>Education</Heading>
      <Timeline>{timelineItemElements}</Timeline>
    </EducationStyles>
  )
}
