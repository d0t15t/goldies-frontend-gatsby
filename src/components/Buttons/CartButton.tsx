import React, { useContext } from 'react';
import { useCartCount } from 'gatsby-theme-shopify-manager';
import { IconButton } from '@mui/material';
import { LocalMallOutlined } from '@mui/icons-material';
import { Context, useDispatch } from '~context';
import { Cart, Link } from '~components';
import * as S from './CartButton.styled';

export const CartButton = () => {
  const cartCount = useCartCount();

  const [context, dispatch] = useContext(Context);

  const handleChange = (status, content) => {
    useDispatch('modalIsOpen', status, dispatch);
    useDispatch('modalContent', content, dispatch);
  };

  const CartContent = () => {
    return (
      <>
        <p>Your Bag</p>
        <Cart context="menu" />
        <Link url="/cart" handleClick={() => handleChange(false, null)}>
          Go to bag
        </Link>
      </>
    );
  };

  return (
    <>
      <IconButton onClick={() => handleChange(true, <CartContent />)}>
        <LocalMallOutlined />
        <S.Count>{cartCount > 9 ? '9+' : cartCount}</S.Count>
      </IconButton>
    </>
  );
};

export default CartButton;
