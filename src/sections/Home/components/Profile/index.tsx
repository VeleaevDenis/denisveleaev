import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useProfile } from './hooks'

const ProfileStyles = styled.div`
  display: flex;
  padding-top: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 52.5em) {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid var(--light-grey);
  }

  .photo,
  .info {
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--light-grey);
  }

  .photo {
    width: 36rem;
    margin-right: 4rem;

    @media (max-width: 52.5em) {
      display: flex;
      justify-content: center;
      margin: 0;
      border-bottom: none;
    }
  }

  .info {
    width: calc(100% - 40rem);

    @media (max-width: 52.5em) {
      width: 100%;
      text-align: center;
    }
  }

  .gatsby-image-wrapper {
    width: 20rem;
    border-radius: 100%;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 7.6rem;
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;

    @media (max-width: 40em) {
      font-size: 5rem;
    }
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
  }
`

export const Profile = () => {
  const { firstName, lastName, position, photo } = useProfile()

  return (
    <ProfileStyles>
      <div className="photo">
        <Img fluid={photo.localFile.childImageSharp.fluid} />
      </div>
      <div className="info">
        <h1>
          {firstName}
          <br />
          {lastName}
        </h1>
        <h2>{position}</h2>
      </div>
    </ProfileStyles>
  )
}
