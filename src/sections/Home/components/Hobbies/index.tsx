import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
import { useHobbies } from './hooks'

const HobbiesStyles = styled.div`
  margin-bottom: 5rem;

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

export const Hobbies = () => {
  const hobbiesData = useHobbies()

  const hobbiesElements = useMemo(
    () => (
      <ul>
        {hobbiesData.map(({ id, text, icon }) => (
          <li key={id}>
            <img src={icon.localFile.publicURL} alt={text} />
            {text}
          </li>
        ))}
      </ul>
    ),
    [hobbiesData]
  )

  return (
    <HobbiesStyles>
      <Heading>Hobbies</Heading>
      {hobbiesElements}
    </HobbiesStyles>
  )
}
