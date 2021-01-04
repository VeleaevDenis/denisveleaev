import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC } from 'react'
import styled from 'styled-components'
import { BlogPost } from '../../../../types'
import { formatDate } from '../../../../utils'
interface Props {
  blogPost: BlogPost
}

const BlogPostItemStyles = styled(Link)`
  color: var(--grey);
  text-decoration: none;

  .gatsby-image-wrapper {
    margin-bottom: 2.5rem;
  }

  h2 {
    margin: 0 0 1.5rem;
    font-size: 4rem;
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 1rem;
    font-size: 2rem;
    font-weight: 400;
  }

  &:hover {
    h2 {
      text-decoration: underline;
    }
  }

  .blog-post {
    &__metadata {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6rem;
      font-size: 1.6rem;
    }
  }
`

export const BlogPostItem: FC<Props> = ({
  blogPost: { coverImage, title, description, slug, durationInMin, createdAt },
}) => (
  <BlogPostItemStyles to={slug}>
    <Img fluid={coverImage} />
    <h2>{title}</h2>
    <h3>{description}</h3>
    <div className="blog-post__metadata">
      <span>{formatDate(createdAt)}</span>
      <span>{durationInMin} min read</span>
    </div>
  </BlogPostItemStyles>
)
