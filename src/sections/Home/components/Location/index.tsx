import React from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'

const LocationStyles = styled.div`
  margin-bottom: 5rem;
`

export const Location = () => (
  <LocationStyles>
    <Heading>Location</Heading>
    <p>
      {`I'm currently located in Moldova, but I'm available for relocation to Germany as soon as possible. I graduated from an EU blue card-eligible university.`}
    </p>
  </LocationStyles>
)
