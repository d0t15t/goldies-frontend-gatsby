/* eslint-disable camelcase */
import React, { FC } from 'react';
import { graphql } from 'gatsby';

//* @var I */ Interfaces */
import * as I from '~templates/interfaces';

//* @var PU */ Page Utilities */
import * as PU from '..';

//* @var S */ Styled components */
import * as S from './Page.styled';

const PageWrapper: FC<I.pageWrapper> = ({ data }) => {
  const node = PU.getNode(data);

  const { headerData, bodyData, footerData } = PU.getPageNodeData(node);

  const getPageBodyTemplate = (data, type) => {
    console.log('🚀 ~ file: page.tsx ~ line 20 ~ getPageBodyTemplate ~ data', data);
    const pageBodyTemplate = {
      node__page: () => {
        return <PU.Tiles {...data} />;
      },
      node__collection: () => {
        return <PU.Collection {...data} />;
      },
      node__product: () => {
        return <PU.Product {...data} />;
      },
    };
    return type in pageBodyTemplate ? pageBodyTemplate[type]() : null;
  };

  return node ? (
    <S.Container>
      <PU.PageHeader {...headerData} />
      {getPageBodyTemplate(bodyData, node.internal.type)}
      <PU.PageFooter />
    </S.Container>
  ) : null;
};

export default PageWrapper;

export const query = graphql`
  query ($id: String) {
    ...pageTilesFragment
    ...collectionPageFragment
    ...productPageFragment
  }
`;
