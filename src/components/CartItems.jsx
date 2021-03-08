import React from 'react'
import { arrayOf, node, number, oneOfType, shape, string } from 'prop-types'
import uuid from 'react-uuid'
import CloseIcon from '@material-ui/icons/Close'
import { Button, Spinner } from 'reactstrap'
import { useCheckoutUrl } from 'gatsby-theme-shopify-manager'
import Wave from '~components/Wave'
import { OutBoundLink } from '~components/Link'
import ButtonRemove from '~components/ButtonRemove'
import { Box, Flex, Hr, Text } from '~components/base'

const LineItem = ({ id, imageSrc, quantity, quantityWidget, price, title }) => {
  return (
    <>
      <Flex flexDirection={['row']} className="line-item" pb={[3]} pt={[3]}>
        <Box
          className="li-1 li-1_a"
          width={[1 / 3]}
          css={`
            text-align: right;
            img {
              width: auto;
              max-height: 100px;
            }
          `}
        >
          {(imageSrc && <img src={imageSrc} alt={title} />) || ' '}
        </Box>
        <Box className="li-1 li-1_b" width={[2 / 3]} pl={[3]}>
          <Box pb={[2]}>
            <Text as="h6" pt={[1]}>
              {title}
            </Text>
          </Box>
          <Flex pb={[3]}>
            <Text as="span">{quantity} x </Text>
            <Text as="strong" pl={[2]}>
              {price}
            </Text>
          </Flex>
          <Flex>
            <Box>{quantityWidget}</Box>

            <Box
              className="cart-line-item--remove-button"
              css={`
                color: grey;
                opacity: 0.5;
                transition: opacity 100ms;

                svg {
                  top: -1px;
                  position: relative;
                }

                &:hover {
                  opacity: 1;
                  * {
                    text-decoration: none !important;
                  }
                }
              `}
            >
              <ButtonRemove color="link" size="sm" variantId={id}>
                <CloseIcon fontSize="small" /> <Box as="span">Remove</Box>
              </ButtonRemove>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Hr margin="auto" mt={[3]} mb={[3]} width={['75%']} textAlign="middle" />
    </>
  )
}

LineItem.propTypes = {
  id: string.isRequired,
  imageSrc: string,
  price: string.isRequired,
  quantity: number.isRequired,
  quantityWidget: node.isRequired,
  title: string.isRequired,
}

LineItem.defaultProps = {
  imageSrc: null,
}

const CartItems = ({ cart, lineItems, updating }) => {
  return (
    <Box className="line-items-header" m={['auto']}>
      {lineItems && (
        <Box>
          {lineItems.map(lineItem => {
            return <LineItem {...lineItem} key={uuid()} />
          })}
        </Box>
      )}
      <Flex
        mt={[4]}
        mb={[4]}
        justifyContent="center"
        css={`
          > * {
            padding: 0 10px;
            line-height: 35px;
          }
        `}
      >
        <Box>Subtotal: </Box>
        <Box>
          {updating ? <Spinner /> : <strong>${cart.totalPrice}</strong>}
        </Box>
        <Box
          css={`
            a {
              color: white !important;
            }
          `}
        >
          <Button color="primary">
            <OutBoundLink to={useCheckoutUrl()} from="cart-to-checkout">
              Checkout
            </OutBoundLink>
          </Button>
        </Box>
      </Flex>
      <Wave />
    </Box>
  )
}

export default CartItems
