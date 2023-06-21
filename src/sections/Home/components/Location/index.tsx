import React from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'

const LocationStyles = styled.div`
  margin-bottom: 5rem;
`

export const Location = () => (
  <LocationStyles>
    <Heading>Location</Heading>
    <p>Republic of Moldova (available for relocation to Germany)</p>
  </LocationStyles>
)
