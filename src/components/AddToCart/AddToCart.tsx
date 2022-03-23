import React, { FC, ReactNode, useContext, useEffect } from 'react';
import { useAddItemsToCart } from 'gatsby-theme-shopify-manager';
import { Box, Typography } from '@mui/material';
import { Context } from '~context';
import { Button, Link } from '~components';
import * as S from './AddToCart.styled';

interface AddToCartProps {
  children: ReactNode;
  image: ReactNode;
  quantity: number;
  shopifyId: string;
  title: string;
  variant: Object[];
  url: string;
}

export const AddToCart: FC<AddToCartProps> = ({
  children,
  image,
  quantity,
  shopifyId,
  title,
  variant,
  url,
}) => {
  const [{ modalIsOpen, modalContent }, dispatch] = useContext(Context);

  const addItemsToCart = useAddItemsToCart();

  const handleClose = () => {
    dispatch({ type: 'modalIsOpen', payload: false });
    dispatch({ type: 'modalContent', payload: '' });
  };

  const ModalContent = () => {
    return (
      <S.ModalWrapper className="modal--added-to-cart">
        <Typography>
          <Link to="url">{title}</Link> was added to your cart.
        </Typography>
        <Box
        // sx={{ width: 200 }}
        >
          {image}
        </Box>
        <Typography>
          <Link to="/cart" handleClick={handleClose}>
            Go to cart
          </Link>
          <Button onClick={handleClose}>Continue shopping</Button>
        </Typography>
      </S.ModalWrapper>
    );
  };

  const handleClick = async () => {
    const items = [
      {
        variantId: shopifyId,
        quantity: quantity ?? 1,
      },
    ];

    try {
      await addItemsToCart(items);
      dispatch({ type: 'modalIsOpen', payload: true });
      dispatch({ type: 'modalContent', payload: <ModalContent /> });
    } catch (error) {
      console.warn('There was a problem adding that item to your cart.');
      console.error(error);
    }
  };

  return (
    <Button onClick={() => handleClick()} variant={variant || 'contained'} color="primary">
      {children || 'Add to cart'}
    </Button>
  );
};

export default AddToCart;
