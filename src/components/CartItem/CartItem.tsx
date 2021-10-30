import React, { FC, ReactNode, useState } from 'react';
import { Counter, IconButton, Link, Price } from '~components/';
import * as U from '~utils';
import * as S from './CartItem.styled';

interface CartItemProps {
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

export const CartItem: FC<CartItemProps> = ({
  children,
  classes,
  context,
  handleRemove,
  handleUpdateQuantity,
  linkPath,
  quantity,
  title,
  variant,
}) => {
  const { id: variantId, image, price, sku, title: variantTitle } = variant;

  return (
    <S.ListItem className={classes}>
      {/* This image loads from external CDN, would be a good candidate to lazy load */}
      <S.ListItemCol>{image?.src && <S.Image src={image.src} alt={title} />}</S.ListItemCol>
      <S.ListItemCol>
        {linkPath && U.cartIsDefaultViewMode(context) ? (
          <strong>
            <Link url={linkPath}>{title}</Link>
          </strong>
        ) : (
          <strong>{title}</strong>
        )}
        {variantTitle && U.variantHasTitle(variantTitle) && <p>{variantTitle}</p>}
        <div className="inner">
          {U.cartIsDefaultViewMode(context) && (
            <S.ListItemCol>
              <div>
                <Price value={price * quantity} />
              </div>
              <div>
                <span>Each: </span> <Price value={price} />
              </div>
            </S.ListItemCol>
          )}
          <S.ListItemCol>
            <Counter
              currentCount={quantity}
              updateQuantity={handleUpdateQuantity}
              targetId={variantId}
            />
          </S.ListItemCol>
          <S.ListItemCol>
            <IconButton iconName="close" onClick={() => handleRemove(variantId)}>
              Remove item
            </IconButton>
          </S.ListItemCol>
          {children && <S.ListItemCol>{children}</S.ListItemCol>}
        </div>
      </S.ListItemCol>
    </S.ListItem>
  );
};

export default CartItem;
