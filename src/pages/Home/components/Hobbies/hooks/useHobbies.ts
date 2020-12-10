import { graphql, useStaticQuery } from 'gatsby'

interface HobbiesQuery {
  contentfulPersonalSiteMainPage: {
    hobbies: Array<{
      id: string
      text: string
      icon: {
        localFile: {
          publicURL: string
        }
      }
    }>
  }
}

export const useHobbies = () => {
  const {
    contentfulPersonalSiteMainPage: { hobbies },
  } = useStaticQuery<HobbiesQuery>(graphql`
    query {
      contentfulPersonalSiteMainPage(key: { eq: "denisveleaev" }) {
        hobbies {
          id
          text
          icon {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)

  return hobbies
}
