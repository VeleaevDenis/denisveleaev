import React, { ReactNode, useMemo } from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
import { useLanguages } from './hooks'

const LanguagesStyles = styled.div`
  margin-bottom: 4rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h4 {
    font-weight: 500;
    margin: 0 0 0.5rem 0;
  }

  li {
    display: flex;
    gap: 1rem;
  }

  .language-details {
    display: flex;
    flex-direction: column;
    font-weight: 300;
  }
`

export const Languages = () => {
  const languagesData = useLanguages()

  const languagesElements = useMemo(
    () => (
      <ul>
        {languagesData.map(({ name, level }) => (
          <li key={name}>
            <span>•</span>
            <div className="language-details">
              <h4>{name}</h4>
              <span>{level}</span>
            </div>
          </li>
        ))}
      </ul>
    ),
    [languagesData]
  )

  return (
    <LanguagesStyles>
      <Heading>Languages</Heading>
      {languagesElements}
    </LanguagesStyles>
  )
}
