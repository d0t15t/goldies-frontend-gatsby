import React, { useEffect, useState } from 'react'
import { node } from 'prop-types'
import * as L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Box, Flex, Text } from '~components/base'
import Link from '~components/Link/Link'

const MapMarker = props => {
  return <b lat={59.955413} lng={30.337844} text="My Marker" />
}

const Map = ({
  center,
  description,
  height,
  link,
  scrollWheelZoom,
  zoom,
  zoomControl,
}) => {
  const [lat, lng] = center
  height ||= ['200px', '300px']
  scrollWheelZoom ||= false
  zoom ||= 16
  zoomControl ||= false

  const getExternalLink = () => {
    const defaultLink = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=${zoom}`
    return (
      <Link to={link || defaultLink} from="map-link">
        Go to map
      </Link>
    )
  }

  const LeafIcon = L.Icon.extend({
    options: {},
  })

  const blueIcon = new LeafIcon({
    iconUrl:
      'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF',
  })
  const greenIcon = new LeafIcon({
    iconUrl:
      'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
  })

  const iconPerson = new L.Icon({
    iconUrl: '../img/marker-pin-person.svg',
    iconRetinaUrl: '../img/marker-pin-person.svg',
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon',
  })

  //  Use the state hook:
  const [icon, setIcon] = useState(blueIcon)

  // This function will change the state's icon:

  const changeIconColor = icon => {
    if (icon.options.iconUrl === greenIcon.options.iconUrl) {
      setIcon(current => (current = blueIcon))
    } else {
      setIcon(current => (current = greenIcon))
    }
  }

  const [loaded, setLoaded] = useState(false)
  const getMap = () => {
    return (
      <Box
        height={height}
        css={`
          > * {
            height: 100%;
          }
        `}
      >
        <MapContainer
          center={center}
          scrollWheelZoom={scrollWheelZoom}
          zoom={zoom}
          zoomControl={zoomControl}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          (
          <Marker
            position={center}
            //
            // icon={iconPerson}
          >
            <Popup>
              <>
                {description && (
                  <Box dangerouslySetInnerHTML={{ __html: description }} />
                )}

                {getExternalLink()}
                {/* <button onClick={() => changeIconColor(icon)}>
                    Change Marker Color
                  </button> */}
              </>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    )
  }
  const loadMap = () => {
    return loaded && typeof window !== 'undefined' ? getMap() : null
  }
  useEffect(() => {
    setLoaded(true)
  }, [])

  return loadMap()
}

export default Map
