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
      {`I am currently based in Augsburg, Germany, and hold an EU passport. I have full work and residency rights across the EU.`}
    </p>
  </LocationStyles>
)
