import { Document } from '@contentful/rich-text-types'
import { graphql, useStaticQuery } from 'gatsby'

interface SkillsQuery {
  contentfulPersonalSiteMainPage: {
    skills: Array<{
      id: string
      text: {
        text: string
      }
    }>
  }
}

export const useSkills = () => {
  const {
    contentfulPersonalSiteMainPage: { skills },
  } = useStaticQuery<SkillsQuery>(graphql`
    query {
      contentfulPersonalSiteMainPage(key: { eq: "denisveleaev" }) {
        skills {
          id
          text {
            text
          }
        }
      }
    }
  `)

  return skills
}
