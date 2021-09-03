import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import * as S from './Collection.styled';

interface CollectionProps {}

export const Collection: FunctionComponent = ({ data }) => {
  console.log('🚀 ~ file: Collection.tsx ~ line 6 ~ data', data);
  return (
    <S.Container>
      <S.Paragraph>Delete this file to start your project.</S.Paragraph>
      <S.Link href="https://github.com/msallent/gatsby-starter-skeleton">Gatsby Skeleton</S.Link>
    </S.Container>
  );
};

export default Collection;

export const query = graphql`
  fragment collectionPageFragment on Query {
    collection: nodeCollection(id: { eq: $id }) {
      id
      title
      path {
        alias
      }
      internal {
        type
      }
      relationships {
        field_products {
          id
          internal {
            type
          }
          title
          path {
            alias
          }
        }
      }
      body {
        processed
      }
    }
  }
`;
