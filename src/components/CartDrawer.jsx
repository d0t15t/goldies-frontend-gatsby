import React from 'react'
import SearchBar from 'material-ui-search-bar'
import Drawer from '@material-ui/core/Drawer'
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import CloseIcon from '@material-ui/icons/Close'
import { Box, Text } from '~components/base'

const CartDrawer = ({
  anchor,
  open,
  placeholder,
  value,
  // onOpen,
  onClose,
  inputRef,
  onRequestSearch,
}) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box p={[2]}>
        <button type="button" className="btn--no-style">
          <CloseIcon onClick={onClose} />
        </button>
      </Box>
      <Box p={['20px']}>
        <Text as="h6" pb={['10px']} color="rgba(0, 0, 0, 0.6)">
          <small>Ask us anything : )</small>
        </Text>
        <SearchBar
          ref={inputRef}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </Box>
    </Drawer>
  )
}

export default CartDrawer
