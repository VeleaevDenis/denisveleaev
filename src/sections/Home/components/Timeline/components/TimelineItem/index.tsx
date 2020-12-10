import { Document } from '@contentful/rich-text-types'
import { format } from 'date-fns'
import React from 'react'
import styled from 'styled-components'
import { RichTextRenderer } from '../../../../../../components'

interface Props {
  source: string
  title: string
  startOn?: Date | null
  endOn?: Date | null
  description: Document | null
}

const formatDate = (date: Date) => format(date, 'MMM yyyy')

const TimelineItemStyles = styled.div`
  display: flex;
  margin-bottom: 4rem;

  @media (max-width: 40em) {
    flex-direction: column;
    margin-bottom: 3rem;
    padding-bottom: 3rem;

    &:not(:last-child) {
      border-bottom: 1px solid var(--light-grey);
    }
  }

  .timeline-item {
    &__additional-info {
      width: 17rem;
      margin-right: 1.5rem;
    }

    &__main-info {
      flex: 1;

      ul {
        padding-left: 2rem;
      }
    }

    &__source,
    &__title {
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
      font-weight: 500;
    }

    &__source {
      @media (max-width: 40em) {
        font-size: 2.2rem;
      }
    }

    &__period {
      font-size: 1.6rem;
    }

    &__circle {
      position: relative;
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      margin-right: 1.5rem;
      border: 2px solid var(--grey);
      border-radius: 100%;
      background-color: white;
      z-index: 1;
    }

    @media (max-width: 40em) {
      &__circle {
        display: none;
      }

      &__additional-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0 0 1rem 0;
      }
    }
  }
`

export const TimelineItem = ({
  source,
  title,
  startOn,
  endOn,
  description,
}: Props) => (
  <TimelineItemStyles>
    <div className="timeline-item__additional-info">
      <div className="timeline-item__source">{source}</div>
      {startOn && (
        <div className="timeline-item__period">
          {formatDate(startOn)} — {endOn ? formatDate(endOn) : 'Present'}
        </div>
      )}
    </div>
    <div className="timeline-item__circle" />
    <div className="timeline-item__main-info">
      <div className="timeline-item__title">{title}</div>
      <div className="timeline-item__description">
        {description && <RichTextRenderer richTextDocument={description} />}
      </div>
    </div>
  </TimelineItemStyles>
)
