import React from 'react'
import styled from 'styled-components'
import { RichTextRenderer } from '../../../../components'
import { Heading } from '../Heading'
import { useAboutMe } from './hooks'

const AboutMeStyles = styled.div`
  margin-bottom: 4rem;
`

export const AboutMe = () => {
  const aboutData = useAboutMe()

  return (
    <AboutMeStyles>
      <Heading>About me</Heading>
      <RichTextRenderer richTextDocument={aboutData} />
    </AboutMeStyles>
  )
}
