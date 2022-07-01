import React, { FC, ReactNode, useState } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import cls from 'classnames';
import { Typography } from '@material-ui/core';
import { Button, CartItem, Link, PaymentMethods, Counter, IconButton } from '~components';
import * as U from '~utils';
import * as S from '~components/CartItem/CartItem.styled';
import { Box } from '@mui/material';

export const CartItemControls = (props) => {
  const { title, variantId, handleRemove, handleUpdateQuantity, linkPath, quantity } = props;
  const [ editState, setEditState ] = useState(false);
  console.log('🤯 ~ CartItemControls.tsx ll.13 ~ props ', props);
  

  const handleControllerButtonClick = (e) => { 
    e.preventDefault();
    setEditState(!editState);
  };

    return (
      <S.ListItemControlsWrapper>
        <Button 
          onClick={handleControllerButtonClick} 
          name={`#controls-${variantId}`} 
          variant={'outlined'}
          className={cls(['cart-item--controlls--toggle-on', !editState && 'cart-item--controlls--toggle-on-on'])}
        >
          <span>Edit this item</span>
        </Button>
        <S.ListItemControls 
          className={cls(['cart-item--controls', editState && 'cart-item--controls__visibile'])} 
          id={ `controls-${variantId}`}
        >
          <Link to={linkPath} classNames={cls(['cart-item--controls-link'])}>
            <Typography variant={'body2'}>Go to: </Typography><Typography variant={'overline'}>{title}</Typography>
          </Link>
          <Box className={cls(['cart-item--controls-inner'])}>
            <Counter
              currentCount={quantity} 
              updateQuantity={handleUpdateQuantity} 
              targetId={variantId}
            /> 
            <IconButton 
              iconName="close" 
              variant='outlined'
            >
              <span>Remove</span>
            </IconButton>
          </Box>
          <Button 
            onClick={handleControllerButtonClick} 
            name={`#controls-${variantId}`} 
            variant={'outlined'}
            className={cls(['cart-item--controlls--toggle-off'])}
          >
            <span>Done</span>
          </Button>
        </S.ListItemControls>
      </S.ListItemControlsWrapper>
    )
  }

  export default CartItemControls;
