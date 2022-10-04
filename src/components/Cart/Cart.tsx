import React, { FC, ReactNode, Fragment } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import cls from 'classnames';
import {
  useCartItems,
  useCheckoutUrl,
  useRemoveItemFromCart,
  useUpdateItemQuantity,
} from 'gatsby-theme-shopify-manager';
import { Typography } from '@material-ui/core';
import { Button, CartItem, Link, PaymentMethods, Price } from '~components';
import * as U from '~utils';
import * as S from './Cart.styled';
import { Box } from '@mui/material';
import { log } from 'util';

interface CartProps {
  children: ReactNode;
}

export const Cart: FC<CartProps> = ({ children, context }) => {
  const {
    variant: { variantNodes },
  } = useStaticQuery(graphql`
    query {
      variant: allShopifyProductVariantShopifyProductVariant {
        variantNodes: nodes {
          variantId: variant_id
          rels: relationships {
            product: shopify_product__shopify_product {
              rels: relationships {
                page: node__product {
                  path {
                    alias
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const cartItems = useCartItems();

  const checkoutUrl = useCheckoutUrl();

  const removeItemFromCart = useRemoveItemFromCart();

  const getCartTotal = (cartItems) => {
    return cartItems.reduce((acc, i) => acc + (i.quantity * i.variant.price), 0);
  };

  const handleRemove = async (variantId) => {
    
    if (cartItems.length < 1) {
      return;
    }
    try {
      await removeItemFromCart(variantId);
      console.log('Successfully removed an item from your cart!');
    } catch {
      console.warn('There was a problem removing that item from your cart.');
    }
  };

  const updateItemQuantity = useUpdateItemQuantity();

  interface handleUpdateQuantityProps {
    targetId: string;
    quantity: number;
  }
  const handleUpdateQuantity = async ({ targetId, quantity }: handleUpdateQuantityProps) => {
    if (targetId === null) {
      return;
    }
    try {
      await updateItemQuantity(targetId, quantity);
      console.log('Successfully updated the item quantity!');
    } catch {
      console.warn("There was a problem updating that item's quantity.");
    }
  };

  const handleSubmit = () => checkoutUrl && navigate(checkoutUrl);

  return (
    <S.Container>
      <form onSubmit={handleSubmit} className={'cart--form'}>
        <hr className={'cart--line'}/>
        <S.List>
          {cartItems.map((item, i) => {
            return (
              <Fragment key={i}>
                {i ? <hr className={'cart--line'}/> : null}
                <CartItem
                  {...item}
                  cartItemsCount={cartItems.length}
                  context={context}
                  key={item.id}
                  handleRemove={handleRemove}
                  handleUpdateQuantity={handleUpdateQuantity}
                  linkPath={U.getVariantProductNodePathAlias({
                    variants: variantNodes,
                    current: item,
                  })}
                  classes={cls(['cart-item', `cart-item--${context}`])}
                />
              </Fragment>
            );
          })}
        </S.List>
        <hr className={'cart--line'}/>
        <Box className={cls(['cart--total'])}>
          <Typography variant={'overline'} className={cls(['cart-subtotal'])}>Subtotal:</Typography>
          <Price value={getCartTotal(cartItems)} />  
        </Box>

        {/* {checkoutUrl && <Link url={checkoutUrl}>Proceed to Checkout</Link>} */}
        <Box className={'cart--actions'}><Button type="submit" className={'cart--button-checkout'}>Proceed to Checkout</Button></Box>
      </form>
      <Box className={'cart--lower'}>
        <Typography className={'cart--lower__info'}>Checkout will commence on Shopify.com</Typography>
        <PaymentMethods />
      </Box>
    </S.Container>
  );
};

export default Cart;
