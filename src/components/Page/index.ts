import * as I from '~utils/interfaces';

import { PageHeaderProps } from '~components/PageHeader/PageHeader';
import { PageBodyProps } from '~components/PageBody/PageBody';
import { PageFooterProps } from '~components/PageFooter/PageFooter';
import Teasers from '~components/Teasers/Teasers';

export { PageHeader, PageHeaderProps } from '~components/PageHeader/PageHeader';
export { PageBody, PageBodyProps } from '~components/PageBody/PageBody';
export { PageFooter, PageFooterProps } from '~components/PageFooter/PageFooter';

export interface pageData {
  headerData: PageHeaderProps;
  bodyData: PageBodyProps;
  footerData: PageFooterProps;
}

/*
 * Helper functions.
 */
export const getNodeType = (data: I.pageWrapper): string => {
  return Object.values(data).find((e) => e?.internal?.type)?.internal?.type || '';
};

export const getNode = (data: I.pageWrapper): I.pageBase => {
  const type = getNodeType(data);
  return type in data ? data[type] : null;
};

export const getHeadline = (node: I.pageBase): string | undefined => {
  return node?.headline?.processed;
};

export const getBody = (node: I.pageBase): string | undefined => {
  return node?.body?.processed;
};

export const getDisplayFields = (node: I.pageBase): boolean => {
  return node?.titleDisplay || false;
};

export const getPageBodyTileTeaserImage = (teaser) =>
  teaser.rels?.media?.rels?.mediaImage?.localFile?.image?.fluid;

export const getPageBodyTileTeaserUrl = (teaser) => {
  return teaser.rels?.reference.path.alias;
};

export const getPageBodyTileTeaser = (teaser) => {
  const item = {
    ...teaser,
    image: getPageBodyTileTeaserImage(teaser),
    url: getPageBodyTileTeaserUrl(teaser),
  };
  return item;
};

export const getPageBodyTileTeasers = (teasers) => {
  return teasers.map((teaser) => getPageBodyTileTeaser(teaser));
};

export const getPageBodyTiles = (tiles) =>
  tiles.map((tile) => {
    const pageBodyTileTemplate = {
      paragraph__tiles: () => {
        return {
          ...tile,
          teasers: getPageBodyTileTeasers(tile.rels.teasers),
        };
      },
    };
    return pageBodyTileTemplate[tile.internal.type]();
  });

export const getPageData = (node) => {
  const bodyPartsTemplate = {
    node__page: () => {
      return { tiles: getPageBodyTiles(node?.rels.tiles) };
    },
  };

  return {
    headerData: {
      title: getHeadline(node) || null,
      body: getBody(node) || null,
      display: getDisplayFields(node),
      children: null,
    },
    bodyData: bodyPartsTemplate[node?.internal.type](),
    footerData: {},
  };
};
