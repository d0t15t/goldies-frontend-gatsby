import React from 'react'
import CartIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useCartCount } from 'gatsby-theme-shopify-manager'
import { Text } from '~components/base'

const CartButton = () => {
  const cartCount = useCartCount()
  return (
    <>
      <CartIcon />
      {Boolean(cartCount + 1) && (
        <Text
          as="small"
          fontSize={[2]}
          css={`
            color: red;
          `}
        >
          {cartCount}
        </Text>
      )}
    </>
  )
}

export default CartButton
