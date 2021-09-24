import * as I from '~templates/interfaces';
import { PageHeaderProps } from '~components/PageHeader/PageHeader';
// import { PageBodyProps } from '~components/PageBody/PageBody';
import { PageFooterProps } from '~components/PageFooter/PageFooter';
import { getProductParts } from '~utils/';

// import Teasers from '~components/Teasers/Teasers';

export * from '~components/PageHeader/PageHeader';
// export * from '~components/PageBody/PageBody';
export * from '~components/PageFooter/PageFooter';

export * from '~components/Collection/Collection';
export * from '~components/Product/Product';
export * from '~components/Tiles/Tiles';

export interface pageData {
  headerData: PageHeaderProps;
  // bodyData: PageBodyProps;
  footerData: PageFooterProps;
}

/*
 * Page element helper functions.
 */
export const getHeadline = (node: I.pageBase): string | undefined => {
  return node?.headline?.markup;
};

export const getBody = (node: I.pageBase): string | undefined => {
  return node?.body?.markup;
};

export const getNodeTitleDisplay = (node: I.pageBase): boolean => {
  return node?.titleDisplay || false;
};

/*
 * Node helper functions.
 */
export const getNodeImageData = (node) => {
  return node.rels?.media?.rels?.mediaImage?.localFile?.image;
};

export const getNodeUrl = (node) => node.path.alias;

/*
 * Tile helper functions.
 */

export const getTileTeaserNodeUrl = (node) => {
  return node.rels?.reference.path.alias;
};

export const getTileNodeTeaser = (teaser) => {
  return {
    ...teaser,
    image: getNodeImageData(teaser),
    url: getTileTeaserNodeUrl(teaser),
  };
};

export const getTileNodeTeasers = (teasers) => {
  return teasers.map((teaser) => getTileNodeTeaser(teaser));
};

export const getNodeTiles = (tiles) => {
  return tiles.map((tile) => {
    const pageBodyTileTemplate = {
      paragraph__tiles: () => {
        return {
          ...tile,
          teasers: getTileNodeTeasers(tile.rels.teasers),
        };
      },
      paragraph__text: () => {
        return {
          ...tile,
          // teasers: getPageBodyTileTeasers(tile.rels.teasers),
        };
      },
    };
    return tile.internal.type in pageBodyTileTemplate
      ? pageBodyTileTemplate[tile.internal.type]()
      : null;
  });
};

/*
 * Collection functions.
 */
export const getCollectionNodeProduct = (product) => {
  // console.log('🚀 ~ file: index.ts ~ line 93 ~ getCollectionNodeProduct ~ product', product);
  return {
    ...product,
    image: getNodeImageData(product),
    url: getNodeUrl(product),
  };
};

export const getCollectionNodeProducts = (node) => {
  return node.rels?.products
    ? node.rels.products.map((product) => getCollectionNodeProduct(product))
    : [];
};

export const getCollectionNodeData = (node) => {
  return { headline: getHeadline(node), products: getCollectionNodeProducts(node) };
};

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

export const getPageNodeData = (node) => {
  const pageDataTemplate = {
    node__page: () => {
      return { tiles: getNodeTiles(node?.rels.tiles) };
    },
    node__collection: () => {
      return getCollectionNodeData(node);
    },
  };

  return {
    headerData: {
      title: getHeadline(node) || null,
      body: getBody(node) || null,
      display: getNodeTitleDisplay(node),
      children: null,
    },
    bodyData:
      node?.internal.type in pageDataTemplate ? pageDataTemplate[node?.internal.type]() : null,
    footerData: {},
  };
};
