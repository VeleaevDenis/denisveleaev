import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

interface LinkGetProps {
  isCurrent: boolean
  isPartiallyCurrent: boolean
}

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-around;
  margin-bottom: 4rem;
`

const LinkStyles = styled.span`
  margin: 2rem;

  a {
    color: var(--grey);
    font-size: 2.2rem;
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;

    &.active,
    &:hover {
      text-decoration: underline;
    }
  }
`

const getExactLinkProps = ({ isCurrent }: LinkGetProps) =>
  isCurrent ? { className: 'active' } : {}

const getPartialLinkProps = ({ isPartiallyCurrent }: LinkGetProps) =>
  isPartiallyCurrent ? { className: 'active' } : {}

export const Header = () => (
  <HeaderStyles>
    <LinkStyles>
      <Link getProps={getExactLinkProps} to="/">
        About me
      </Link>
    </LinkStyles>
    <LinkStyles>
      <Link getProps={getPartialLinkProps} to="/blog">
        Blog
      </Link>
    </LinkStyles>
  </HeaderStyles>
)
