import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className: string
  richTextDocument: Document
}

const options: Options = {
  renderText: text =>
    text.split('\n').map((text, i) => [i > 0 && <br key={i} />, text]),
}

const RichTextStyles = styled.div`
  p {
    margin: 0;
  }

  b {
    font-weight: 700;
  }
`

export const RichTextRenderer = ({ richTextDocument, className }: Props) => (
  <RichTextStyles className={className}>
    {documentToReactComponents(richTextDocument, options)}
  </RichTextStyles>
)
