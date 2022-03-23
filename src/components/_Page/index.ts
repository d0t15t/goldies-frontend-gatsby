import { PageHeaderProps } from '~components/PageHeader/PageHeader';
// import { PageBodyProps } from '~components/PageBody/PageBody';
import { PageFooterProps } from '~components/PageFooter/PageFooter';

// import Teasers from '~components/Teasers/Teasers';

export * from '~components/PageHeader/PageHeader';
// export * from '~components/PageBody/PageBody';
// export * from '~components/PageFooter/PageFooter';

export * from '~components/Collection/Collection';
export * from '~components/Product/Product';
export * from '~components/Tiles/Tiles';

import * as U from '~utils';

export interface pageData {
  headerData: PageHeaderProps;
  // bodyData: PageBodyProps;
  footerData: PageFooterProps;
}

/*
 * Page element helper functions.
 */
// export const getHeadline = (node: pageBase): string | undefined => {
//   return node?.headline?.markup;
// };

export const getBody = (node: pageBase): string | undefined => {
  return node?.body?.markup;
};

export const getNodeTitleDisplay = (node: pageBase): boolean => {
  return node?.titleDisplay || false;
};

/*
 * Node helper functions.
 */
export const getNodeImageData = (node) => {
  return node.rels?.media?.rels?.mediaImage?.localFile?.teaserImage;
};

export const getNodeUrl = (node) => node.path.alias;

export const getNodeTitle = (node) => node.title;

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
    link: getTileTeaserNodeUrl(teaser),
    teaserStyle: 'image-only',
  };
};

export const getTileNodeTeasers = (teasers) => {
  return teasers.map((teaser) => getTileNodeTeaser(teaser));
};

export const getNodeTiles = (tiles) => {
  return tiles.map((tile) => {
    const defaultTemplate = {
      ...tile,
    };
    const pageBodyTileTemplate = {
      paragraph__tiles: {
        ...tile,
        teasers: tile?.rels?.teasers ? getTileNodeTeasers(tile.rels.teasers) : [],
      },
      paragraph__text: defaultTemplate,
      paragraph__cart: defaultTemplate,
    };
    return tile.internal?.type in pageBodyTileTemplate
      ? pageBodyTileTemplate[tile.internal.type]
      : defaultTemplate;
  });
};

/*
 * Product functions.
 */

export const getProductNodeShopifyProductImageSet = (productNode) => {
  const getImage = ({ index, localFile }) => {
    return localFile ? { ...localFile, ...localFile[index] } : null;
  };

  const getImageSet = ({ index, set }) => {
    return set.map((item) => getImage({ localFile: item.localFile, index }));
  };

  const getUnique = (array) => {
    return array
      ? Array.from(new Set(array.map((s) => s && s?.id))).map((id) =>
          array.find((s) => s?.id === id)
        )
      : [];
  };

  const getVariantImage = ({ variant, name }) =>
    variant.rels?.image ? getImage({ index: name, localFile: variant.rels.image.localFile }) : null;

  const getVariantsImageSet = ({ variants, name }) =>
    variants.map((variant) => getVariantImage({ variant, name })).filter((e) => e);

  const teaserVariantSet = getVariantsImageSet({
    variants: productNode.rels.variants,
    name: 'teaserImage',
  });
  const thumbnailVariantSet = getVariantsImageSet({
    variants: productNode.rels.variants,
    name: 'thumbnailImage',
  });
  const largeVariantSet = getVariantsImageSet({
    variants: productNode.rels.variants,
    name: 'largeImage',
  });

  return {
    teaserImages: getUnique(
      teaserVariantSet.length
        ? teaserVariantSet
        : getImageSet({ index: 'teaserImage', set: productNode.rels.extraImages })
    ),
    thumbnailImages: getUnique(
      thumbnailVariantSet.length
        ? thumbnailVariantSet
        : getImageSet({ index: 'thumbnailImage', set: productNode.rels.extraImages })
    ),
    largeImages: getUnique(
      largeVariantSet.length
        ? largeVariantSet
        : getImageSet({ index: 'largeImage', set: productNode.rels.extraImages })
    ),
  };
};

export const getProductNodeShopifyProduct = (productNode) => productNode.rels?.shopifyProduct;

export const getProductNodeShopifyProductVariants = (shopifyProductNode) =>
  shopifyProductNode.rels?.variants.map((variant) => {
    return { ...variant, shopifyId: U.getProductVariantGid(variant.shopifyId) };
  }) ?? [];

export const getProductNodeData = (node) => {
  const shopifyProduct = getProductNodeShopifyProduct(node);
  return {
    headline: getNodeTitle(node),
    ...shopifyProduct,
    body: shopifyProduct?.body?.markup,
    variants: getProductNodeShopifyProductVariants(shopifyProduct),
    images: getProductNodeShopifyProductImageSet(shopifyProduct),
  };
};

/*
 * Collection functions.
 */

export const getProductTeaserImageData = (product) => {
  return product?.rels?.product?.rels?.image?.localFile?.teaserImage;
};

export const getProductTeaserVariantData = (product) => {
  const variant = product?.rels?.product?.rels?.variants[0];
  return { ...variant, shopifyId: U.getProductVariantGid(variant.shopifyId) };
};

export const getProductTeaserVariantsData = (product) => {
  return product?.rels?.product?.rels?.variants.map((variant) => {
    return { ...variant, shopifyId: U.getProductVariantGid(variant.shopifyId) };
  });
};

export const getCollectionNodeProduct = (product) => {
  return {
    ...product,
    // teaserStyle: 'product',
    image: getProductTeaserImageData(product),
    link: getNodeUrl(product),
    variant: getProductTeaserVariantData(product),
  };
};

export const getCollectionFeaturedProduct = (product) => {
  return {
    ...product,
    // teaserStyle: 'product',
    image: getProductTeaserImageData(product),
    link: getNodeUrl(product),
    variants: getProductTeaserVariantsData(product),
  };
};

export const getCollectionNodeProducts = (node) => {
  return node.rels?.products
    ? node.rels.products.map((product) => getCollectionNodeProduct(product))
    : [];
};

export const getCollectionFeaturedProducts = (node) => {
  return node.rels?.featured
    ? node.rels.featured.map((product) => getCollectionFeaturedProduct(product))
    : [];
};

export const getCollectionNodeData = (node) => {
  return {
    id: node.id,
    description: node?.description?.markup,
    featured: getCollectionFeaturedProducts(node),
    products: getCollectionNodeProducts(node),
  };
};

/*
 * Helper functions.
 */
export const getNodeType = (data: pageWrapper): string => {
  return Object.values(data).find((e) => e?.internal?.type)?.internal?.type || '';
};

export const getNode = (data: pageWrapper): pageBase => {
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
    node__product: () => {
      return getProductNodeData(node);
    },
  };

  return {
    headerData: {
      body: getBody(node) || null,
      children: null,
      display: getNodeTitleDisplay(node),
      headline: getNodeTitle(node),
      // headline: getHeadline(node) || getNodeTitle(node),
    },
    bodyData:
      node?.internal.type in pageDataTemplate ? pageDataTemplate[node?.internal.type]() : null,
    footerData: {},
  };
};
