import React from 'react'
import styled from 'styled-components'

import { SEO } from '../../components'
import { BlogPostsList } from './components'

const PageStyles = styled.div`
  max-width: 68rem;
  margin: auto;
  padding-bottom: 6rem;
`

export const BlogPage = () => (
  <PageStyles>
    <SEO title="Blog" />
    <BlogPostsList />
  </PageStyles>
)
