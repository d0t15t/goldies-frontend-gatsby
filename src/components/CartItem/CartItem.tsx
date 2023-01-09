import React, { FC, ReactNode, useState } from 'react';
import cls from 'classnames';
import { Box, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Button, Counter, IconButton, Link, Price } from '~components/';
import CartItemControls from './CartItemControls';
import * as U from '~utils';
import * as S from './CartItem.styled';

interface CartItemProps {
  cartItemsCount: integer;
  children: ReactNode;
  classes: string;
  context: string;
  handleRemove: Function;
  handleUpdateQuantity: Function;
  linkPath: string;
  title: string;
  quantity: number;
  variant: object;
}

export const CartItem: FC<CartItemProps> = (props) => {
  const {
    cartItemsCount,
    children,
    classes,
    context,
    handleRemove,
    handleUpdateQuantity,
    linkPath,
    quantity,
    title,
    variant,
  } = props;

  const { id: variantId, image, price, sku, title: variantTitle } = variant;

  const eachPrice = quantity > 1 ? `$${price} each` : ``;

  const getSubTitle = () =>
    U.variantHasTitle(variantTitle)
      ? quantity > 1
        ? `${variantTitle}, ${eachPrice}`
        : variantTitle
      : eachPrice;

  return (
    <S.ListItem className={classes}>
      <Typography variant="h6" className={cls(['cart-item--title'])}>
        {title}
      </Typography>
      {/* This image loads from external CDN, would be a good candidate to lazy load */}
      <S.ListItemCol className={cls(['cart-item--image'])}>
        {image?.src && <S.Image src={image.src} alt={title} />}
      </S.ListItemCol>

      <Box className={cls(['cart-item--subtitle'])}>
        <Typography className={cls(['cart-item--variant-name'])}>{getSubTitle()}</Typography>
      </Box>
      <Box className={cls(['cart-item--quantity'])}>
        <Counter
          currentCount={quantity}
          updateQuantity={handleUpdateQuantity}
          targetId={variantId}
        />
      </Box>
      {/* 
      <Box className={cls(['cart-item--price'])}>
        <Price value={price} />
      </Box>
      */}
      {cartItemsCount > 1 && (
        <Box className={cls(['cart-item--total'])}>
          <Typography variant="span" className={cls(['cart-item--total-arrow'])}>
            ☛
          </Typography>
          <Price value={price * quantity} />
        </Box>
      )}
      <Box className={cls(['cart-item--remove'])}>
        <Button onClick={() => handleRemove(variant.id)}>
          <span className={cls(['cart-item--remove-label'])}>Remove</span>
          <Close />
        </Button>
      </Box>
    </S.ListItem>
  );
};

export default CartItem;
