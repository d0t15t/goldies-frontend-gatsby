import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import uuid from 'react-uuid'
import Drawer from '@material-ui/core/Drawer'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from '~components/Link'
import { Box, Text } from '~components/base'
import SearchForm from '~components/SearchForm'
import SearchResults from '~components/SearchResults'

const InfoDrawer = ({
  anchor,
  open,
  placeholder,
  value,
  // onOpen,
  onClose,
  onRequestSearch,
}) => {
  open = true
  const { collectionsMenu, sideBarMenu } = useStaticQuery(graphql`
    query sideBarMenuQuery {
      collectionsMenu: allMenuLinkContentMenuLinkContent(
        filter: { menu_name: { eq: "collections" }, enabled: { eq: true } }
        sort: { fields: weight, order: ASC }
      ) {
        nodes {
          title
          link {
            alias: uri_alias
          }
        }
      }

      sideBarMenu: allMenuLinkContentMenuLinkContent(
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

  const getMenuItems = items => {
    return items?.map(item => {
      return (
        <Box as="li" key={uuid()} pb={[3]}>
          <Link
            to={item?.link?.alias || item.path}
            from="sidebar-menu"
            onClick={onClose}
          >
            <Text as="span" fontSize={[3]} fontStyle="italic">
              {item.title}
            </Text>
          </Link>
        </Box>
      )
    })
  }

  const [searchResults, setSearchResults] = useState([])

  return (
    <Drawer anchor="right" open={open} onClose={onClose} autoFocus={false}>
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
          width: 300px;
          max-width: 300px;
          height: 100vw;
        `}
      >
        <Box p={[2]}>
          <button type="button" className="btn--no-style">
            <CloseIcon onClick={onClose} />
          </button>
        </Box>
        <Box pl={[3]} pr={[3]}>
          <SearchForm onChange={setSearchResults} />
        </Box>
        {searchResults.length > 0 && (
          <Box p={['20px']} textAlign="center">
            <SearchResults
              results={searchResults}
              getMenuItems={getMenuItems}
            />
          </Box>
        )}
        <Box p={['20px']} pt="5px" minWidth={['300px']} textAlign="center">
          <Text as="h6" pb={[4]} fontSize={[2]} fontStyle="italic">
            All collections
          </Text>
          <Box
            as="ul"
            css={`
              margin: 0;

              li {
                list-style: none;
                margin-bottom: 0;

                a {
                  color: grey;
                }
              }
            `}
          >
            {getMenuItems(collectionsMenu?.nodes)}
            <li>~</li>
            <Box pt={[3]}>{getMenuItems(sideBarMenu?.nodes)}</Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

export default InfoDrawer
