import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { SEO } from '../../components'
import { BlogPostQueryData } from '../../types'
import { formatDate, normalizeBlogPost } from '../../utils'

const PageStyles = styled.div`
  max-width: 68rem;
  margin: auto;
  padding-bottom: 6rem;

  line-height: 1.2;

  .gatsby-image-wrapper {
    margin-bottom: 2.5rem;
  }

  h1 {
    margin: 0 0 1.5rem;
    font-size: 4rem;
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 1rem;
    font-size: 2rem;
    font-weight: 400;
  }

  .blog-post {
    &__metadata {
      display: flex;
      justify-content: space-between;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--light-grey);
      font-size: 1.6rem;
    }
  }

  .blog-post__content {
    p,
    li {
      margin-bottom: 2rem;
    }

    a {
      color: var(--grey);
    }

    img {
      width: 100%;
    }

    strong {
      font-weight: 700;
    }
  }
`

interface Props {
  data: {
    blogPost: BlogPostQueryData
  }
}

const BlogPostPage: FC<Props> = ({ data: { blogPost } }) => {
  const {
    title,
    coverImage,
    description,
    createdAt,
    durationInMin,
    content,
  } = normalizeBlogPost(blogPost)

  console.log(content)

  return (
    <>
      <SEO
        title={title}
        // image={coverImage.src}
      />
      <PageStyles>
        <Img fluid={coverImage} />
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className="blog-post__metadata">
          <span>{formatDate(createdAt)}</span>
          <span>{durationInMin} min read</span>
        </div>
        <ReactMarkdown className="blog-post__content">{content}</ReactMarkdown>
      </PageStyles>
    </>
  )
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    blogPost: contentfulPersonalSiteBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      coverImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 680) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      description {
        description
      }
      content {
        content
      }
      createdAt
    }
  }
`

export default BlogPostPage
