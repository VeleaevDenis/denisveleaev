import { FluidObject } from 'gatsby-image'

export interface BlogPost {
  id: string
  coverImage: FluidObject
  title: string
  description: string
  content: string
  slug: string
  createdAt: Date
  durationInMin: number
}

export interface BlogPostQueryData {
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
}
