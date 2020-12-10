import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
import { useContacts } from './hooks'

const ContactsStyles = styled.div`
  margin-bottom: 4rem;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    font-weight: 400;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  a {
    color: var(--grey);

    &:visited,
    &:link,
    &:active,
    &:hover {
      color: var(--grey);
    }
  }

  img {
    margin-right: 1.8rem;
    width: 2.2rem;
  }
`

export const Contacts = () => {
  const contactsData = useContacts()

  const contactsElements = useMemo(
    () => (
      <ul>
        {contactsData.map(({ id, text, link, icon }) => (
          <li key={id}>
            <img src={icon.localFile.publicURL} alt={text} />
            {link ? (
              <a href={link} target="__blank">
                {text}
              </a>
            ) : (
              text
            )}
          </li>
        ))}
      </ul>
    ),
    [contactsData]
  )

  return (
    <ContactsStyles>
      <Heading>Contacts</Heading>
      {contactsElements}
    </ContactsStyles>
  )
}
