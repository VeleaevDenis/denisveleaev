import React from 'react'
import styled from 'styled-components'

import { SEO } from '../../components'

const PageStyles = styled.div`
  margin: auto;
`

export const PageNotFound = () => (
  <PageStyles>
    <SEO title="Page Not Found" />
    Page not found :)
  </PageStyles>
)
