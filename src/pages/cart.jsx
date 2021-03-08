import React, { useContext, useState } from 'react'
import { arrayOf, node, number, oneOfType, shape, string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import {
  useCart,
  useCartItems,
  useCheckoutUrl,
  useUpdateItemQuantity,
} from 'gatsby-theme-shopify-manager'
import { Context } from '~context/Store'
import Layout from '~components/Layout'
import NewsletterForm from '~components/NewsletterForm'
import CartItems from '~components/CartItems'
import SocialIcons from '~components/SocialIcons'
import { Box, Text } from '~components/base'

import IncrementNumberButtons from '../components/IncrementNumberButton'

const CartPage = () => {
  const [, dispatch] = useContext(Context)
  const [updating, setUpdating] = useState(false)
  const cart = useCart()
  const cartItems = useCartItems()
  console.log('🚀 ~ file: cart.jsx ~ line 24 ~ CartPage ~ cartItems', cartItems)
  const updateItemQuantity = useUpdateItemQuantity()

  const cartItemsCount = {}
  cartItems.map(item => {
    cartItemsCount[item.id] = item.quantity
    return true
  })
  const [quantities, setQuantities] = useState(cartItemsCount)

  async function updateQuantity(variantId, quantity) {
    setUpdating(true)
    try {
      await updateItemQuantity(variantId, quantity)
      setUpdating(false)
    } catch {
      dispatch({
        type: 'MODAL_CONTENT',
        payload: (
          <Text as="p">
            There was a problem adding updating your cart, please contact
            administrator.
          </Text>
        ),
      })
      dispatch({ type: 'MODAL_STATUS', payload: true })
      setUpdating(false)
    }
  }

  // const { products } = useStaticQuery(graphql`
  //   query cartProducts {
  //     products: allShopifyProduct {
  //       nodes {
  //         title
  //         images {
  //           localFile {
  //             childImageSharp {
  //               fixed(width: 100) {
  //                 ...GatsbyImageSharpFixed
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const lineItems = cartItems.map(item => {
    // const images = products.nodes
    //   .filter(product => {
    //     return product.title === item.title
    //   })
    //   .shift()

    // const image = images?.images && images?.images.shift()
    // const imageData = image && image.localFile.childImageSharp.fixed
    const title = `${item.title} ~ ${item.variant.title}`
    const handleUpdate = newQuantity => {
      setQuantities({ ...quantities, [item.id]: newQuantity })
      updateQuantity(item.variant.id, newQuantity)
    }
    const update = {
      increment: () => {
        const newQuantity = quantities[item.id] + 1
        handleUpdate(newQuantity)
      },
      decrement: () => {
        const newQuantity = quantities[item.id] - 1
        handleUpdate(newQuantity)
      },
    }
    return {
      id: item.variant.id,
      imageSrc: item.variant.image.src,
      quantity: quantities[item.id],
      quantityWidget: (
        <IncrementNumberButtons
          quantity={quantities[item.id]}
          update={update}
        />
      ),
      price: `$${item.variant.price}`,
      title,
    }
  })

  return (
    <>
      <Layout>
        <Box
          className="checkout-form"
          pt={[4]}
          width={[1, 5 / 6]}
          margin="auto"
        >
          <Text
            as="h4"
            p={['0 20px']}
            mb={[4]}
            textAlign="center"
            fontSize={[3]}
          >
            {cartItems.length
              ? 'Your cart has the following items:'
              : 'Your cart is empty.'}
          </Text>
          <CartItems cart={cart} lineItems={lineItems} updating={updating} />
        </Box>
        <NewsletterForm />
        <SocialIcons />
      </Layout>
    </>
  )
}

export default CartPage
