import React from 'react'
import uuid from 'react-uuid'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from '~components/Link'
import Logo from '~components/Logo'
import { Box, Flex, Text } from '~components/base'
import { themeGet, css } from '~style'

const Footer = () => {
  const { footerMenu } = useStaticQuery(graphql`
    query footerQuery {
      footerMenu: allMenuLinkContentMenuLinkContent(
        filter: { menu_name: { eq: "footer" }, enabled: { eq: true } }
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
        <Box as="li" key={uuid()}>
          <Link to={item.link.alias} from="footer-link">
            {item.title}
          </Link>
        </Box>
      )
    })
  }

  const headerStyles = css`
    text-align: center;
    line-height: 1.3em;
  `

  const baseClass = 'footer'

  return (
    <Box
      as="footer"
      css={`
        // height: 300px;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          ${themeGet('colorSchemes.default.highlight')},
          gold
        );
        // padding: ${themeGet('space.unit.margin', '50px')};
        // padding-top: 40px;
        // padding-bottom: 40px;
        overflow: hidden;
      `}
      p={[3]}
      pt={['100px']}
      pb={['50px']}
      className={`${baseClass}`}
    >
      <Box
        className={`${baseClass}--inner`}
        css={`
          @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
            display: flex;
          }

          box-sizing: content-box;
          position: relative;
          top: 66%;
          align-items: stretch;
          height: 66%;
          transform: translateY(-66%);
          max-width: ${themeGet('space.unit.maxWidth', '900px')};
          margin: auto;

          > * {
            align-self: flex-end;
            justify-content: center;
            @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
              width: 45%;
            }
          }
        `}
      >
        <Box className={`${baseClass}--inner__text-wrapper`} mb={[3, 0]}>
          <Box
            as="ul"
            css={`
              margin: 0;
              list-style: none;
              display: flex;
              justify-content: center;
              & > * {
                display: inline-block;
                align-self: flex-end;
                margin-bottom: 0;
              }
              & li + li {
                margin-left: ${themeGet('space.unit.margin', '50px')};
              }
              a,
              a:visited {
                color: black;
                transition: color 100ms;
              }
              a:hover {
                color: white;
              }
            `}
          >
            {menuItems(footerMenu?.nodes)}
          </Box>
        </Box>
        <Box
          className={`${baseClass}--inner__icon-wrapper`}
          css={`
            display: flex;
            font-size: 30px;
            @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
              width: 10%;
            }
          `}
        >
          <p
            css={`
              align-self: flex-end;
              @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
                margin-bottom: 0;
              }
            `}
          >
            ☮
          </p>
        </Box>
        <Box className={`${baseClass}--inner__logo-wrapper`}>
          <Box
            className={`${baseClass}--logo`}
            maxWidth={['150px']}
            m={['auto']}
          >
            <Link to="/">
              <Logo width={['50px', '100px']} />
            </Link>
          </Box>
          <Text as="h1" css={headerStyles} className="hidden">
            Goldies
          </Text>
          <Text as="h2" fontSize={['1.8em']} css={headerStyles}>
            Natural Beauty
          </Text>
          <Text as="h3" css={headerStyles} fontSize={['1.2em']}>
            © Goldie's Natural Beauty, {new Date().getFullYear()}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
