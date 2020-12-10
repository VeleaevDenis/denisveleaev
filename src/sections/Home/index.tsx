import React from 'react'
import styled from 'styled-components'

import { SEO } from '../../components'
import {
  AboutMe,
  Contacts,
  Education,
  Experience,
  Hobbies,
  Profile,
  Skills,
} from './components'

const PageStyles = styled.div`
  padding-bottom: 6rem;

  .cv-info {
    display: flex;
    border-bottom: 1px solid var(--light-grey);
    margin-bottom: 4rem;

    @media (max-width: 52.5em) {
      flex-direction: column;
    }

    &__contacts-hobbies {
      @media (max-width: 52.5em) and (min-width: 40em) {
        display: flex;
        justify-content: space-between;

        > * {
          width: 48%;
        }
      }
    }

    &__personal-data {
      width: 36rem;
      margin-right: 4rem;

      @media (max-width: 52.5em) {
        width: 100%;
        margin-right: 0;
      }
    }

    &__timelines {
      width: calc(100% - 40rem);

      @media (max-width: 52.5em) {
        width: 100%;
      }
    }
  }
`

export const HomePage = () => (
  <PageStyles>
    <SEO title="CV Front-End Developer" />
    <Profile />
    <div className="cv-info">
      <div className="cv-info__personal-data">
        <AboutMe />
        <div className="cv-info__contacts-hobbies">
          <Contacts />
          <Hobbies />
        </div>
      </div>
      <div className="cv-info__timelines">
        <Experience />
        <Education />
      </div>
    </div>
    <Skills />
  </PageStyles>
)

