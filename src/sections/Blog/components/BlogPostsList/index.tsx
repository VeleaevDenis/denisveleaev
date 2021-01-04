import React, { useMemo } from 'react'
import styled from 'styled-components'
import { BlogPostItem } from '../BlogPostItem'
import { useBlogPosts } from './hooks'

const BlogPostListStyles = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin-bottom: 4rem;
  }
`

export const BlogPostsList = () => {
  const blogPosts = useBlogPosts()

  const blogPostElements = useMemo(
    () =>
      blogPosts.map(blogPost => (
        <li key={blogPost.id}>
          <BlogPostItem blogPost={blogPost} />
        </li>
      )),
    [blogPosts]
  )

  return <BlogPostListStyles>{blogPostElements}</BlogPostListStyles>
}
