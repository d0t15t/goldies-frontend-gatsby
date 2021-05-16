import React, { Fragment, useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { node } from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Box, Flex, Text } from '~components/base'
import Map from '~components/Map'
import { Image } from '~components/Image'
import { Link } from '~components/Link'
import { extractImages } from '~util'

const MapMarker = props => {
  return <b lat={59.955413} lng={30.337844} text="My Marker" />
}

const Stockist = ({ address, description, geocode, id, name, link, image }) => {
  const center = Object.entries(geocode).map(([, val]) => val)
  console.log('🚀 ~ file: stockists.jsx ~ line 17 ~ Stockist ~ center', center)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  const loadMap = () => {
    return loaded ? <Map center={center} description={description} /> : null
  }
  return (
    <Box
      width={[1, 1 / 3]}
      p={[0, 2]}
      mb={['50px']}
      key={id}
      textAlign={['center', 'left']}
    >
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
      {loadMap()}
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
          description: field_description {
            value: processed
          }
          link: field_link {
            uri
          }
          geocode: field_geolocation {
            lat
            lng: lon
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
    return nodes.map(item => {
      const data = {
        address: getAddress(item?.address),
        description: item?.description?.value,
        geocode: item?.geocode,
        id: item.id,
        link: item.link?.uri,
        image: extractImages(item.relationships).shift(),
        name: item.title,
      }
      return <Stockist {...data} key={item.id} />
    })
  }
  return (
    <Flex flexWrap="wrap" width={[1]}>
      {getItems(allStockists.nodes)}
    </Flex>
  )
}

export default Stockists
