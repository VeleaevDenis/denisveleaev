import { graphql, useStaticQuery } from 'gatsby'

interface ContactsQuery {
  contentfulPersonalSiteMainPage: {
    contacts: Array<{
      id: string
      text: string
      link: string
      icon: {
        localFile: {
          publicURL: string
        }
      }
    }>
  }
}

export const useContacts = () => {
  const {
    contentfulPersonalSiteMainPage: { contacts },
  } = useStaticQuery<ContactsQuery>(graphql`
    query {
      contentfulPersonalSiteMainPage(key: { eq: "denisveleaev" }) {
        contacts {
          id
          text
          icon {
            localFile {
              publicURL
            }
          }
          link
        }
      }
    }
  `)

  return contacts
}
