import React, { useContext, useState, useRef } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Context } from '~context/Store'
import CartButton from '~components/CartButton'
import { Link } from '~components/Link'
import { Box, Flex, Text } from '~components/base'
import CartDrawer from '~components/CartDrawer'
import InfoDrawer from '~components/InfoDrawer'
import Logo from '~components/Logo'
import styled, { css } from '~style'
import { toggleDrawer } from '~util'

const Header = () => {
  const [state, dispatch] = useContext(Context)

  const { drawersStatus } = state

  const inputEl = useRef(null)

  const headerStyles = css`
    text-align: center;
    line-height: 1.3em;
  `

  const DrawerButton = styled('button')`
    // position: fixed;
    z-index: 1;
    > * {
      width: 1.2em !important;
      height: 1.2em !important;
    }

    &:hover {
      cursor: pointer;
    }
  `

  return (
    <>
      <Box as="header" justifyContent="space-between">
        <Box
          className="header--search"
          pt={['5px']}
          css={`
            position: absolute;
            top: 0px;
            left: 0px;
          `}
        >
          <Link
            to="/cart"
            from="Cart button"
            css={`
              color: black;
              padding: 5px;

              &:hover {
                text-decoration: none;
              }

              svg {
                color: black;
              }
            `}
          >
            <CartButton />
          </Link>
        </Box>
        <Box
          className="header--main"
          css={`
            a:hover {
              text-decoration: none;
            }
          `}
        >
          <Box className="header--logo" maxWidth={['200px']} m={['auto']}>
            <Link to="/" from="header-icon">
              <Logo width={['50px', '100px']} />
            </Link>
          </Box>
          <Link to="/" from="header-text">
            <Text as="h1" css={headerStyles} className="hidden">
              Goldies
            </Text>
            <Text as="h2" fontSize={['1.8em']} css={headerStyles}>
              Natural Beauty
            </Text>
            <Text as="h3" css={headerStyles} fontSize={['1.2em']}>
              Handmade in Rockaway Beach, NYC
            </Text>
          </Link>
        </Box>
        <Box
          className="header--controls"
          pt={['3px']}
          css={`
            position: absolute;
            top: 0px;
            right: 5px;
          `}
        >
          <DrawerButton
            type="button"
            onClick={() =>
              toggleDrawer(
                dispatch,
                drawersStatus,
                !drawersStatus.left,
                'right'
              )
            }
            className="btn--no-style"
          >
            <MenuIcon />
          </DrawerButton>
        </Box>
      </Box>

      <CartDrawer
        inputRef={inputEl}
        open={drawersStatus.left}
        onClose={() => toggleDrawer(dispatch, drawersStatus, false, 'left')}
      />
      <InfoDrawer
        open={drawersStatus.right}
        onClose={() => toggleDrawer(dispatch, drawersStatus, false, 'right')}
      />
    </>
  )
}

export default Header
export { toggleDrawer }
