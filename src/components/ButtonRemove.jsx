import React, { useState, useContext } from 'react'
import { bool, string } from 'prop-types'
import { Button, Spinner } from 'reactstrap'
import { useRemoveItemsFromCart } from 'gatsby-theme-shopify-manager'
import { Box, Text } from '~components/base'

import { Context } from '~context/Store'
import { theme } from '~style'

const ButtonRemove = ({
  children,
  color,
  disabled,
  outline,
  productName,
  size,
  variantId,
}) => {
  const [status, setStatus] = useState(true)
  const [, dispatch] = useContext(Context)
  const removeItems = useRemoveItemsFromCart()

  const handleClick = async () => {
    setStatus(false)
    try {
      await removeItems([variantId])

      setStatus(true)
    } catch {
      dispatch({
        type: 'MODAL_CONTENT',
        payload: (
          <Text as="p">
            There was a problem removing {productName} from your cart, please
            contact administrator.
          </Text>
        ),
      })
      dispatch({ type: 'MODAL_STATUS', payload: true })
    }
  }

  const attributes = {
    className: 'btn',
    color: color || 'primary',
    disabled: !status || disabled,
    onClick: handleClick,
    outline,
    size,
    type: 'button',
  }

  const buttonText = children ?? 'Remove'
  return (
    <Button {...attributes}>
      <Box as="span" css="">
        <Box
          as="div"
          height={[1]}
          css={`
            visibility: ${status ? 'inherit' : 'hidden'};
          `}
        >
          {buttonText}
        </Box>
        <Box
          as="div"
          css={`
            visibility: ${!status ? 'inherit' : 'hidden'};
          `}
        >
          <Spinner size="sm" />
        </Box>
      </Box>
    </Button>
  )
}

// ButtonRemove.propTypes = {
//   buttonTitle: string,
//   disabled: bool,
//   productName: string.isRequired,
//   variantId: string.isRequired,
// }

// ButtonRemove.defaultProps = {
//   buttonTitle: 'Add to cart',
//   disabled: false,
// }

export default ButtonRemove
