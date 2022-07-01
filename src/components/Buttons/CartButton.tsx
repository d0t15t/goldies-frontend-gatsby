import React, { useContext } from 'react';
import { useCartCount } from 'gatsby-theme-shopify-manager';
import { IconButton, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
        <p>Your Cart</p>
        <Cart context="menu" />
        <Link url="/cart" handleClick={() => handleChange(false, null)}>
          Go to cart
        </Link>
      </>
    );
  };

  return (
    <S.Wrapper>
      <Link to="/cart">
        <ShoppingCartOutlinedIcon />
        <S.Count>
          <Typography variant="overline">{cartCount > 9 ? '9+' : cartCount}</Typography>
        </S.Count>
        </Link>
    </S.Wrapper>
  );
};

export default CartButton;
