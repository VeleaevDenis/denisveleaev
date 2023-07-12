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
  options?: Options
}

const defaultOptions: Options = {
  renderText: text => text.split('\n').map((text, i) => [<br key={i} />, text]),
}

const RichTextStyles = styled.div`
  p {
    margin: 0;
  }

  b {
    font-weight: 700;
  }
`

export const RichTextRenderer = ({
  richTextDocument,
  className,
  options = defaultOptions,
}: Props) => (
  <RichTextStyles className={className}>
    {documentToReactComponents(richTextDocument, options)}
  </RichTextStyles>
)
