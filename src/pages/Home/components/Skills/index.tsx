import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
import { useSkills } from './hooks'

const SkillsStyles = styled.div`
  margin-bottom: 4rem;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .skills-lists {
    display: flex;
    justify-content: space-between;

    > * {
      width: 48%;
    }

    @media (max-width: 52.5em) {
      flex-direction: column;

      > * {
        width: 100%;
      }
    }
  }

  li {
    display: flex;
    margin-bottom: 1.5rem;

    &::before {
      content: '';
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      margin-right: 1.5rem;
      border: 2px solid var(--grey);
      border-radius: 100%;
    }
  }
`

export const Skills = () => {
  const skillsData = useSkills()

  const skillsElements = useMemo(
    () => (
      <div className="skills-lists">
        <ul>
          {skillsData
            .slice(0, Math.floor(skillsData.length / 2))
            .map(({ id, text: { text } }) => (
              <li key={id}>{text}</li>
            ))}
        </ul>
        <ul>
          {skillsData
            .slice(Math.floor(skillsData.length / 2))
            .map(({ id, text: { text } }) => (
              <li key={id}>{text}</li>
            ))}
        </ul>
      </div>
    ),
    []
  )

  return (
    <SkillsStyles>
      <Heading>Skills</Heading>
      {skillsElements}
    </SkillsStyles>
  )
}
