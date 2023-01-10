/* eslint-disable camelcase */
import React, { FC, useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import cls from 'classnames';
import { Helmet } from 'react-helmet';
import { useDimensions } from 'react-hook-dimensions';
import { Box, Typography } from '@mui/material';
import { Context, useDispatch } from '~context';
import { useLocation } from '~hooks';
import { useSiteMetadata } from '~hooks/useSiteMetadata';
import { SEO, Breadcrumbs, Link, EmojiPointer, SocialBlock } from '~components';

//* @var PU */ Page Utilities */
import * as PU from './index';

import * as U from '~utils';

//* @var S */ Styled components */
import * as S from './Page.styled';

const PageWrapper: FC<PageWrapper> = ({ data, location }) => {
  const path = location.pathname;

  const isFrontpage = path == '/';
  const [context, dispatch] = useContext(Context);
  const [ref, box] = useDimensions({
    dependencies: [],
  });

  useEffect(() => useDispatch('pageDimensions', box, dispatch), [box, dispatch]);

  const node = PU.getNode(data);

  const { headerData, bodyData, footerData } = PU.getPageNodeData(node);

  const breadcrumbs = PU.getBreadcrumbs(node, path);
  const relatedItems = PU.getRelated(node);

  const getPageBodyTemplate = (data, type) => {
    const pageBodyTemplate = {
      node__page: () => {
        return <PU.Tiles {...data} />;
      },
      node__collection: () => {
        return <PU.Collection {...data} relatedItems={relatedItems} />;
      },
      node__product: () => {
        return <PU.Product {...data} relatedItems={relatedItems} location={location} />;
      },
      taxonomy_term__shopify_tags: () => {
        return <PU.Category {...data} relatedItems={relatedItems} />;
      },
    };
    return type in pageBodyTemplate ? pageBodyTemplate[type]() : null;
  };

  const hasShiftedHeadline = PU.hasShiftedHeadline(path);

  const { title, description, keywords, siteUrl, imageUrl, language, robots, author, copyright } =
    useSiteMetadata();

  const metaDescription = U.getMetaDescription(bodyData?.body || node?.body?.markup || description);

  return node ? (
    <S.Page className="page-root">
      <Helmet title={node.title} titleTemplate={`%s - ${title}`}>
        <html lang={language} />
        <meta name="description" content={isFrontpage ? description : metaDescription} />
        <meta name="keywords" content={(keywords || keywords).join(', ')} />
        <meta name="robots" content={path === '/cart' ? 'noindex' : robots} />
        <meta name="author" content={author} />
        <meta name="copyright" content={copyright} />
        <meta http-equiv="expires" content="43200" />
      </Helmet>
      {/* <SEO location={location} pageMetaData /> */}
      <PU.PageHeader {...headerData} hasShiftedHeadline={hasShiftedHeadline} />

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div id="main-content" ref={ref}>
        {getPageBodyTemplate(bodyData, node.internal.type)}
      </div>
      {path === '/' && (
        <S.PageBreak
          className={cls(
            'page-break'
            // pbHidden && 'hidden'
          )}
        >
          <EmojiPointer />
        </S.PageBreak>
      )}
    </S.Page>
  ) : null;
};

export default PageWrapper;

export const query = graphql`
  query ($id: String) {
    ...categoryPageFragment
    ...pageTilesFragment
    ...collectionPageFragment
    ...productPageFragment
    ...breadcrumbsFragment
  }
`;
