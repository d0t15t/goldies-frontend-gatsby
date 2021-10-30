/* eslint-disable camelcase */
import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Link, SocialBlock } from '~components';

//* @var I */ Interfaces */
import * as I from '~templates/interfaces';

//* @var PU */ Page Utilities */
import * as PU from '..';

//* @var S */ Styled components */
import * as S from './Page.styled';

const PageWrapper: FC<I.pageWrapper> = ({ data }) => {
  const node = PU.getNode(data);

  const { headerData, bodyData, footerData } = PU.getPageNodeData(node);
  // console.log('🚀 ~ file: Page.tsx ~ line 20 ~ headerData, bodyData', headerData, bodyData);

  const getPageBodyTemplate = (data, type) => {
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
    <S.Page>
      <PU.PageHeader {...headerData} />
      <div id="main-content">{getPageBodyTemplate(bodyData, node.internal.type)}</div>
      <SocialBlock />
      <PU.PageFooter />
    </S.Page>
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
