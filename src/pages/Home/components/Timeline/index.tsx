import React, { FC } from 'react'
import styled from 'styled-components'
import { TimelineItem } from './components'

interface TimelineWithElements extends FC {
  Item: typeof TimelineItem
}

const TimelineStyles = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 19.6rem;
    height: 100%;
    width: 2px;
    background-color: var(--grey);
    z-index: 0;

    @media (max-width: 40em) {
      content: none;
    }
  }
`

export const Timeline: TimelineWithElements = ({ children }) => (
  <TimelineStyles>{children}</TimelineStyles>
)

Timeline.Item = TimelineItem
