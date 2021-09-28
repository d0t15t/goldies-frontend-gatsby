import React, { FunctionComponent } from 'react';
import { useAddItemsToCart, useCartCount } from 'gatsby-theme-shopify-manager';
import * as S from './AddToCart.styled';

export const AddToCart: FunctionComponent = ({ variantId, quantity, children }) => {
  const addItemsToCart = useAddItemsToCart();
  const handleClick = async () => {
    const items = [
      {
        variantId,
        quantity,
      },
    ];

    try {
      await addItemsToCart(items);
    } catch {
      console.log('There was a problem adding that item to your cart.');
    }
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleClick}>
          {children}
        </button>
      </div>
      <p>Your cart has {useCartCount()} items.</p>
    </>
  );
};

// export default AddToCart;
