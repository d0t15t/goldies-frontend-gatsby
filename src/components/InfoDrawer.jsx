import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import uuid from 'react-uuid'
import Drawer from '@material-ui/core/Drawer'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from '~components/Link'
import { Box, Text } from '~components/base'

const InfoDrawer = ({
  anchor,
  open,
  placeholder,
  value,
  // onOpen,
  onClose,
  onRequestSearch,
}) => {
  const { sideBarMenuItems } = useStaticQuery(graphql`
    query sideBarMenuQuery {
      footerMenu: allMenuLinkContentMenuLinkContent(
        filter: { menu_name: { eq: "sidebar" }, enabled: { eq: true } }
        sort: { fields: weight, order: ASC }
      ) {
        nodes {
          title
          link {
            alias: uri_alias
          }
        }
      }
    }
  `)

  const menuItems = items => {
    return items?.map(item => {
      return (
        <Box as="li" key={uuid()} pb={[3]}>
          <Link to={item.link.uri} from="sidebar-menu">
            <Text as="span" fontSize={[3]} fontStyle="italic">
              {item.title}
            </Text>
          </Link>
        </Box>
      )
    })
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        className="drawer-content-wrapper"
        css={`
          color: grey;
          button,
          a,
          h6,
          li {
            color: grey;
          }
        `}
      >
        <Box p={[2]}>
          <button type="button" className="btn--no-style">
            <CloseIcon onClick={onClose} />
          </button>
        </Box>
        <Box p={['20px']} pt="10px" minWidth={['300px']} textAlign="center">
          <Text as="h6" pb={[4]} fontSize={[4]}>
            All collections
          </Text>
          <Box
            as="ul"
            css={`
              margin: 0;

              li {
                list-style: none;

                a {
                  color: grey;
                }
              }
            `}
          >
            {menuItems(sideBarMenuItems?.nodes)}
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

export default InfoDrawer
