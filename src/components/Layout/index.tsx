import 'normalize.css'
import React, { FC } from 'react'
import styled from 'styled-components'
import { GlobalStyles, Typography } from '../../styles'

const ContentStyles = styled.main`
  max-width: 120rem;
  padding: 4rem 2rem 0;
  margin: auto;
`

export const Layout: FC = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <ContentStyles>{children}</ContentStyles>
  </>
)
