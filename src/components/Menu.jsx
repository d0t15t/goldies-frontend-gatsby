import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import uuid from 'react-uuid'
import { Link } from '~components/Link'
import { Box, Flex, Text } from '~components/base'
import styled, { themeGet, css } from '~style'
import { ThemeContext } from '~context/ThemeContext'

const Menu = props => {
  const MenuItem = styled(Box)`
    list-style: none;

    padding-left: ${themeGet('space.unit.md', '13px')};
    padding-right: ${themeGet('space.unit.md', '13px')};
    width: 50%;
    text-align: right;
    &:nth-child(even) {
      text-align: left;
    }

    @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
      width: inherit;
      text-align: inherit;
      padding-right: inherit;
      padding-left: inherit;
    }

    + li {
      @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
        padding-left: ${themeGet('space.unit.large', '13px')};
        &: before {
          content: '•';
          color: ${themeGet('colorSchemes.default.highlight', 'green')};
          position: absolute;
          margin-left: -18px;
          margin-top: 2px;
        }
      }
    }

    @keyframes hover-color-trans {
      25% {
        border-bottom-color: ${themeGet(
          'colorSchemes.default.highlight',
          'yellow'
        )};
      }
      50% {
        border-bottom-color: ${themeGet('colorSchemes.default.link', 'green')};
      }
      25% {
        border-bottom-color: ${themeGet(
          'colorSchemes.default.highlight',
          'yellow'
        )};
      }
    }

    * > a {
      border-bottom: 1px solid transparent;
      transition: all 200ms ease-in;
      padding-bottom: ${themeGet('space.unit.small', '10px')};

      &:hover {
        animation: hover-color-trans 5s linear infinite;
        text-decoration: none;
        border-bottom: 1px solid;
        // border-bottom: 1px solid
        //   ${themeGet('colorSchemes.default.highlight', 'green')};
      }
    }
  `

  const { mainMenu } = useStaticQuery(graphql`
    query mainMenuQuery {
      mainMenu: allMenuLinkContentMenuLinkContent(
        filter: { menu_name: { eq: "main" }, enabled: { eq: true } }
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

  return (
    <ThemeContext.Consumer>
      {context => (
        <Flex
          as="ul"
          className="menu"
          flexWrap="wrap"
          css={`
            margin: 0 auto;
            align-items: center;
            justify-content: center;
          `}
        >
          {' '}
          {mainMenu?.nodes &&
            mainMenu.nodes.map(node => {
              return (
                <MenuItem as="li" className="menu-item" key={uuid()}>
                  <Text as="h4">
                    <Link to={node.link.alias} from="main-menu item">
                      {node.title}
                    </Link>
                  </Text>
                </MenuItem>
              )
            })}
        </Flex>
      )}
    </ThemeContext.Consumer>
  )
}

// Menu.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

// Menu.defaultProps = {
//   title: null,
//   description: null,
// }

export default Menu
