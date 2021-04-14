import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { node } from 'prop-types'
import { Box, Flex, Text } from '~components/base'
import { Image } from '~components/Image'
import { Link } from '~components/Link'
import { extractImages } from '~util'

const Stockist = ({ address, id, name, link, image }) => {
  return (
    <Box width={[1 / 2, 1 / 3]} pb={4} key={id}>
      {/* {image && <Image fluid={image} pb={[3]} />} */}
      <Text as="h5" mb={[3]}>
        {name}
      </Text>
      <Box color="black" fontSize={[1]} pr={[3]}>
        {address}
      </Box>
      {link && (
        <Text pt={[2]} fontSize={1}>
          <Link to={link} from="Stockists page" target="_blank">
            {link}
          </Link>
        </Text>
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
          <Fragment key={line}>
            <span>{line}</span>
            <br />
          </Fragment>
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
        id: node.id,
        link: node.link?.uri,
        image: extractImages(node.relationships).shift(),
        name: node.title,
      }
      return <Stockist {...data} key={node.id} />
    })
  }
  return (
    <Flex flexWrap="wrap" width={[1]}>
      {getItems(allStockists.nodes)}
    </Flex>
  )
}

export default Stockists
