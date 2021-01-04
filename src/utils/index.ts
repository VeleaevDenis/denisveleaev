import { format } from 'date-fns'
import { BlogPost, BlogPostQueryData } from '../types'

export const formatDate = (date: Date) => format(date, 'MMM yyyy')

const getDuration = (content: string) =>
  Math.ceil(content.split(' ').length / 250)

export const normalizeBlogPost = ({
  coverImage,
  description,
  content,
  createdAt,
  ...blogPost
}: BlogPostQueryData): BlogPost => ({
  ...blogPost,
  coverImage: coverImage.localFile.childImageSharp.fluid,
  description: description.description,
  content: content.content,
  createdAt: new Date(createdAt),
  durationInMin: getDuration(content.content),
})
