import React, { FC, ReactNode, useContext } from 'react';
import { useAddItemsToCart } from 'gatsby-theme-shopify-manager';
import { Context } from '~context';
import { Button, Link } from '~components';
import * as S from './AddToCart.styled';

interface AddToCartProps {
  children: ReactNode;
  quantity: number;
  shopifyId: string;
  title: string;
  variant: Object[];
}

export const AddToCart: FC<AddToCartProps> = ({
  children,
  quantity,
  shopifyId,
  title,
  variant,
}) => {
  const [{ modalIsOpen, modalContent }, dispatch] = useContext(Context);

  const addItemsToCart = useAddItemsToCart();

  const handleClose = () => {
    dispatch({ type: 'modalIsOpen', payload: false });
    dispatch({ type: 'modalContent', payload: '' });
  };

  const ModalContent = () => {
    return (
      <>
        <p>
          <strong>{title}</strong> was added to your cart.
        </p>
        <p>
          <Link url="/cart" handleClick={handleClose}>
            Go to cart
          </Link>
          , or <Button>continue shopping</Button>?
        </p>
      </>
    );
  };

  const handleClick = async () => {
    const items = [
      {
        variantId: shopifyId,
        quantity,
      },
    ];

    try {
      await addItemsToCart(items);
      dispatch({ type: 'modalIsOpen', payload: true });
      dispatch({ type: 'modalContent', payload: <ModalContent /> });
    } catch {
      console.warn('There was a problem adding that item to your cart.');
    }
  };

  return (
    <Button onClick={() => handleClick()} variant={variant}>
      {children || 'Add to cart'}
    </Button>
  );
};

export default AddToCart;
