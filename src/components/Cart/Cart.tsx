import React, { FC, ReactNode } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import cls from 'classnames';
import {
  useCartItems,
  useCheckoutUrl,
  useRemoveItemFromCart,
  useUpdateItemQuantity,
} from 'gatsby-theme-shopify-manager';
import { Button, CartItem, Link, PaymentMethods } from '~components';
import * as U from '~utils';
import * as S from './Cart.styled';

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
      <form onSubmit={handleSubmit}>
        <S.List>
          {cartItems.map((item) => {
            return (
              <CartItem
                {...item}
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
            );
          })}
        </S.List>
        {/* {checkoutUrl && <Link url={checkoutUrl}>Proceed to Checkout</Link>} */}
        {U.cartIsDefaultViewMode(context) && checkoutUrl && (
          <Button type="submit">Proceed to Checkout</Button>
        )}
      </form>
      {U.cartIsDefaultViewMode(context) && (
        <>
          <p>Checkout will commence on Shopify.com</p>
          <PaymentMethods />
        </>
      )}
    </S.Container>
  );
};

export default Cart;
