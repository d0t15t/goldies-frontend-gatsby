import React, { Fragment } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { graphql } from 'gatsby'

import Overview from '~components/views'

const components = {
  paragraph__overview: Overview,
  // paragraph__announcement: Announcement,
}

const getParagraph = node => {
  if (Object.prototype.hasOwnProperty.call(components, node?.typeName)) {
    const Component = components[node.typeName]
    return <Component node={node} />
  }

  return node?.typeName ? (
    <p key="unknown-type">Unknown type {node.typeName}</p>
  ) : (
    <p key="paragraph-error">Paragraph Error.</p>
  )
}

export const Paragraphs = ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map(item => {
        const paragraph = getParagraph(item)
        return <Fragment key={item.id}>{paragraph}</Fragment>
      })}
    </>
  )
}

export const fragment = graphql`
  fragment ParagraphsQuery on node__pageRelationships {
    content: field_block {
      typeName: __typename
      # ...ParagraphFancyForm
      # ...ParagraphAccordion
      # ...ParagraphAnnouncement
      # ...ParagraphCards
    }
  }
`

Paragraphs.propTypes = {
  paragraphs: arrayOf(shape({})).isRequired,
}

export default Paragraphs
