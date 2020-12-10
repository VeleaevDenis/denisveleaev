import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

interface ProfileQuery {
  contentfulPersonalSiteMainPage: {
    profile: {
      firstName: string
      lastName: string
      position: string
      photo: {
        localFile: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
    }
  }
}

export const useProfile = () => {
  const {
    contentfulPersonalSiteMainPage: { profile },
  } = useStaticQuery<ProfileQuery>(graphql`
    query {
      contentfulPersonalSiteMainPage(key: { eq: "denisveleaev" }) {
        profile {
          firstName
          lastName
          position
          photo {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return profile
}
