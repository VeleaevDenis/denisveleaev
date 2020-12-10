import React, { FC } from 'react'
import styled from 'styled-components'

const HeadingStyles = styled.h3`
  margin: 0 0 2rem;
  font-size: 2.5rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
`

export const Heading: FC = ({ children }) => (
  <HeadingStyles>{children}</HeadingStyles>
)
