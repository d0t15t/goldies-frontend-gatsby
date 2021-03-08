import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image } from '@components/Image'

const FallbackImage = ({ getData }) => {
  const data = useStaticQuery(graphql`
    query FallbackImageQuery {
      file(relativePath: { eq: "bomb.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const file = data.file.childImageSharp.fluid
  return getData ? file : <Image fluid={data.file.childImageSharp.fluid} />
}

export default FallbackImage
