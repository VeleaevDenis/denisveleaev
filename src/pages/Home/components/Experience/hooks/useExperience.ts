import { graphql, useStaticQuery } from 'gatsby'
import { Document } from '@contentful/rich-text-types'

interface ExperienceQuery {
  contentfulPersonalSiteMainPage: {
    experience: Array<{
      id: string
      workplace: string
      position: string
      description: {
        raw: string
      }
      startOn: string
      endOn: string | null
    }>
  }
}

export const useExperience = () => {
  const {
    contentfulPersonalSiteMainPage: { experience },
  } = useStaticQuery<ExperienceQuery>(graphql`
    query {
      contentfulPersonalSiteMainPage(key: { eq: "denisveleaev" }) {
        experience {
          id
          workplace
          position
          description {
            raw
          }
          startOn
          endOn
        }
      }
    }
  `)

  return experience.map(exp => ({
    ...exp,
    description: JSON.parse(exp.description.raw) as Document,
    startOn: new Date(exp.startOn),
    endOn: exp.endOn !== null ? new Date(exp.endOn) : null,
  }))
}
