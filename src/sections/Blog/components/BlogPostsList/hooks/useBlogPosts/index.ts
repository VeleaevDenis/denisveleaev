import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { BlogPost } from '../../../../../../types'
import { normalizeBlogPost } from '../../../../../../utils'

interface BlogPostsQuery {
  allContentfulPersonalSiteBlogPost: {
    nodes: Array<{
      id: string
      title: string
      slug: string
      coverImage: {
        localFile: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
      description: {
        description: string
      }
      content: {
        content: string
      }
      createdAt: string
    }>
  }
}

export const useBlogPosts = (): BlogPost[] => {
  const {
    allContentfulPersonalSiteBlogPost: { nodes: blogPosts },
  } = useStaticQuery<BlogPostsQuery>(graphql`
    query {
      allContentfulPersonalSiteBlogPost {
        nodes {
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
    }
  `)

  return blogPosts.map(normalizeBlogPost)
}
