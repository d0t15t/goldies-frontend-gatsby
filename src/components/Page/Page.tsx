import React, { Fragment, FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Header from '~components/Header/Header';

import * as S from './Page.styled';

export const Page: FunctionComponent = ({ data }) => {
  console.log('🚀 ~ file: Page.tsx ~ line 7 ~ data', data);
  const { node } = data;

  return (
    <S.Container>
      <Header pageTitle={data.page.title} />
    </S.Container>
  );
};

export default Page;

export const query = graphql`
  fragment pagePageFragment on Query {
    page: nodePage(id: { eq: $id }) {
      id
      title
      path {
        alias
      }
      internal {
        type
      }
      body {
        processed
      }
    }
  }
  query ($id: String) {
    ...pagePageFragment
    ...collectionPageFragment
    ...productPageFragment
  }
`;
