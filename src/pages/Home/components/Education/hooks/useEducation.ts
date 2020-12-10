import { Document } from '@contentful/rich-text-types'
import { graphql, useStaticQuery } from 'gatsby'

interface EducationQuery {
  contentfulPersonalSiteMainPage: {
    education: Array<{
      id: string
      source: string
      title: string
      description: {
        raw: string
      }
    }>
  }
}

export const useEducation = () => {
  const {
    contentfulPersonalSiteMainPage: { education },
  } = useStaticQuery<EducationQuery>(graphql`
    query {
      contentfulPersonalSiteMainPage(key: { eq: "denisveleaev" }) {
        education {
          id
          source
          title
          description {
            raw
          }
        }
      }
    }
  `)

  return education.map(item => ({
    ...item,
    description:
      item.description !== null
        ? (JSON.parse(item.description.raw) as Document)
        : null,
  }))
}
