import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { node } from 'prop-types'
import { Box, Flex, Text } from '~components/base'
import { Image } from '~components/Image'
import { Link } from '~components/Link'
import { extractImages } from '~util'

const Stockist = ({ address, children, link, image }) => {
  const item = (
    <Box as="article">
      <Text as="h5">{children}</Text>
      <Box>{address}</Box>
      {image && <Image fluid={image} />}
    </Box>
  )
  return (
    <Box width={[1 / 2, 1 / 3, 1 / 4]}>
      {' '}
      {link ? (
        <Link to={link} from="Stockists page">
          {item}
        </Link>
      ) : (
        <>{item}</>
      )}
    </Box>
  )
}

const Stockists = props => {
  const { allStockists } = useStaticQuery(graphql`
    query stockistsQuery {
      allStockists: allNodeStockist {
        nodes {
          title
          id
          address: field_address {
            address_line1
            country_code
            locality
            postal_code
            organization
            langcode
            administrative_area
            address_line2
          }
          link: field_link {
            uri
          }
          relationships {
            media: field_media {
              relationships {
                image: field_media_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 444) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  function getAddress(obj) {
    function getLine(line) {
      return (
        line && (
          <>
            <span>{line}</span>
            <br />
          </>
        )
      )
    }
    const parts = [
      obj?.address_line1,
      obj?.address_line2,
      `${obj?.locality} ${obj?.administrative_area} ${obj?.postal_code}`,
    ]
    if (!obj) return null
    return parts.map(line => getLine(line))
  }

  const getItems = nodes => {
    return nodes.map(node => {
      const data = {
        address: getAddress(node?.address),
        link: node.link?.uri,
        image: extractImages(node.relationships).shift(),
      }
      return (
        <Stockist key={node.id} {...data}>
          {node.title}
        </Stockist>
      )
    })
  }
  return <Flex width={[1]}>{getItems(allStockists.nodes)}</Flex>
}

export default Stockists
