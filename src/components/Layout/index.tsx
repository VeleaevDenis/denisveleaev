import 'normalize.css'
import React, { FC } from 'react'
import styled from 'styled-components'
import { GlobalStyles, Typography } from '../../styles'
import { Header } from '../Header'

const ContentStyles = styled.main`
  max-width: 120rem;
  padding: 0 2rem;
  margin: auto;
`

export const Layout: FC = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <ContentStyles>
      <Header />
      {children}
    </ContentStyles>
  </>
)
