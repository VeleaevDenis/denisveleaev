import { Document } from '@contentful/rich-text-types'
import { graphql, useStaticQuery } from 'gatsby'

interface AboutMeQuery {
  contentfulPersonalSiteMainPage: {
    profile: {
      about: {
        raw: string
      }
    }
  }
}

export const useAboutMe = (): Document => {
  const {
    contentfulPersonalSiteMainPage: {
      profile: {
        about: { raw },
      },
    },
  } = useStaticQuery<AboutMeQuery>(graphql`
    query {
      contentfulPersonalSiteMainPage(key: { eq: "denisveleaev" }) {
        profile {
          about {
            raw
          }
        }
      }
    }
  `)

  return JSON.parse(raw)
}
