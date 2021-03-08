import React, { useState, useContext } from 'react'
import { bool, string } from 'prop-types'
// import { navigate } from 'gatsby-link'
import { Button, Spinner } from 'reactstrap'
import { useAddItemToCart, useCheckoutUrl } from 'gatsby-theme-shopify-manager'
import { OutboundLink } from 'react-ga'
import { Box, Text } from '~components/base'
import Link from '~components/Link/Link'
import Emoji from '~components/Emoji'
import { Context } from '~context/Store'
import { toggleDrawer } from '~util'
import { theme } from '~style'

const AddToCart = ({
  buttonTitle,
  color,
  disabled,
  productName,
  quantity,
  variantId,
}) => {
  const [status, setStatus] = useState(true)
  const [, dispatch] = useContext(Context)
  const addItemToCart = useAddItemToCart()
  const ModalContent = () => {
    return (
      <Box>
        <Text as="h3">
          {productName} <Emoji />
        </Text>
        <Text as="h4" pb={[3]}>
          has been added to your cart.
        </Text>
        <Text as="h4">
          <Link to="/cart" from="Add to cart modal.">
            View your cart
          </Link>{' '}
          <Text as="small">or</Text>
        </Text>

        <Text as="h4">
          <OutboundLink
            to={useCheckoutUrl()}
            from="Add to cart modal."
            eventLabel="go to checkout"
          >
            proceed to checkout.
          </OutboundLink>
        </Text>
      </Box>
    )
  }

  const handleClick = async () => {
    setStatus(false)
    try {
      await addItemToCart(variantId, quantity || 1)

      dispatch({
        type: 'MODAL_CONTENT',
        payload: <ModalContent />,
      })
      dispatch({ type: 'MODAL_STATUS', payload: true })
      setStatus(true)
    } catch {
      dispatch({
        type: 'MODAL_CONTENT',
        payload: (
          <Text as="p">
            There was a problem adding {productName} to your cart, please
            contact us.
          </Text>
        ),
      })
      dispatch({ type: 'MODAL_STATUS', payload: true })
      setStatus(true)
    }
  }

  const attributes = {
    type: 'button',
    color: color || 'primary',
    onClick: handleClick,
    disabled: !status || disabled,
    className: 'btn',
  }

  const buttonText = buttonTitle ?? 'Add to cart'
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

AddToCart.propTypes = {
  buttonTitle: string,
  disabled: bool,
  productName: string.isRequired,
  variantId: string.isRequired,
}

AddToCart.defaultProps = {
  buttonTitle: 'Add to cart',
  disabled: false,
}

export default AddToCart
