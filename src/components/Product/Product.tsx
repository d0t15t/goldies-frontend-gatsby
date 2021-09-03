import React, { Fragment, FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { getGid, getProductParts } from '~src/utils';
import { AddToCart } from '~components/AddToCart/AddToCart';

import * as S from './Product.styled';

export const Product: FunctionComponent = ({ data }) => {
  const { node } = data;

  const { id, relationships, title } = node;
  const [product, variants] = getProductParts(node);

  const Variant = ({ v }) => {
    return (
      <div>
        {v.title} / {v.price} / {v.sku}
        <AddToCart
          // gid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC85ODIyNzg5Nzk="
          variantId={getGid('shopify/ProductVariant', v.shopifyId)}
          quantity={1}
          text="Add to cart"
        />
      </div>
    );
  };

  const List = ({ items }) =>
    items.map((item) => (
      <Fragment key={item.id}>
        <Variant v={item} />
      </Fragment>
    ));

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <List items={variants} />
    </S.Container>
  );
};

export default Product;

export const query = graphql`
  fragment productPageFragment on Query {
    product: nodeProduct(id: { eq: $id }) {
      id
      title
      path {
        alias
      }
      internal {
        type
      }
      relationships {
        product: field_shopify_product {
          shopifyId: product_id
          id
          title
          relationships {
            variants {
              id
              shopifyId: variant_id
              weight
              weight_unit
              sku
              title
              price
            }
          }
        }
      }
    }
  }
`;
