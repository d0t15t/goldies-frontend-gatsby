/**
 * @file utils.ts
 */

// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 *
 * @param string url
 * @param string basePath
 * @returns string
 */
export const getRelativePath = (url: string, basePath: string): string => url.replace(basePath, '');

/**
 *
 * @param id string
 * @param prefix string
 * @returns string
 */
export const getGid = (prefix: string, id: string): string =>
  Buffer.from(`gid://${prefix}/${id}`).toString('base64');

/**
 *
 * @param id string
 * @returns string
 */
export const getProductVariantGid = (id: string): string => getGid(`shopify/ProductVariant`, id);

/**
 * @param items Variant[]
 * @param currentId string
 * @returns Variant
 */
export const getCurrentVariant = (items, currentId: string) =>
  items.find((item) => item.shopifyId === currentId);

/**
 * @param title string
 * @param variant
 * @returns string
 */
export const getProductVariantTitle = (title, variant): string => {
  const test = variant.title.localeCompare('Default Title', undefined, { sensitivity: 'accent' });
  return test === 0 ? title : `${title}, ${variant.title}`;
};

/**
 * @param String foo
 * @returns bool
 */
export const variantHasTitle = (s: string): boolean => s !== 'Default Title';

/**
 * @param context string | undefined | null
 * @returns bool
 */
export const cartIsDefaultViewMode = (context: string | undefined | null): boolean =>
  context === '' || context === undefined || context === null || context === 'default';

/**
 * @param e
 * @param buttonId string
 * @param dropdownRef ref
 * @returns bool
 */
export const isCartButtonClick = (e, buttonId, dropdownRef): boolean =>
  dropdownRef?.current?.contains(e.target) ||
  e?.target?.parentNode?.id === 'cart-button' ||
  e.target.id === 'cart-button';

/**
 * @param {}
 * @returns string
 */
export const getVariantProductNodePathAlias = ({ variants, current }): string =>
  variants.find((item) => {
    return getProductVariantGid(item.variantId) === current.variant.id;
  })?.rels?.product[0]?.rels?.page[0]?.path?.alias;

/**
 * @param {String} url
 */
export const urlIsExternal = (url: string): boolean => {
  const hostname = process.env.GATSBY_BASE_HOSTNAME;
  if (typeof url !== 'string') return true;
  if (url.length === 0) return true;
  if (!hostname) return true;
  if (url.indexOf('#') === 0) return false;
  if (url.indexOf('/') === 0) return false;
  const array = url.split('://');
  if (typeof array[1] !== 'undefined') return true;
  return array[1] !== process.env.GATSBY_BASE_HOSTNAME;
};

export const arrayToTree = (items, id = null, link = 'parent_id') => {
  return items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: arrayToTree(items, item.id) }))
    .sort((a, b) => a.weight - b.weight);
};

const decorateTree = (tree, depth = 0) => {
  return tree.map((item) => {
    const d = { depth, ...item };
    if (d?.children.length) {
      decorateTree(d?.children, depth++);
    }
    return d;
  });
};

export const getMenuItems = (menuItems) => {
  const flattened = menuItems.nodes.map((item) => {
    return {
      ...item,
      parent_id: item?.parent?.id ?? null,
    };
  });
  const tree = arrayToTree(flattened);
  return decorateTree(tree);
};

export const stripTags = (str: string) => str.replace(/(<([^>]+)>)/gi, '');

export const getMetaDescription = (str: string) => {
  const string = stripTags(str).replace(/[\r\n]/gm, '');

  return string.length > 160 ? `${stripTags(str).slice(0, 157).trim()}...` : string.trim();
};

export const getCategoryPath = (node) => {
  const slug = `${node.name}`
    .toLocaleLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
  const alias = `/category/${slug}`;
  return { alias };
};

export const getCategoryNodeData = (node) => {
  return {
    id: node.id,
    //image: getCollectionImage(node),
    path: getCategoryPath(node),
    products: getCategoryProducts(node),
    title: node.name,
  };
};

export const getProductTeaserImageData = (product) => {
  return product?.rels?.product?.rels?.image?.localFile?.teaserImage;
};

export const getNodeUrl = (node) => {
  return node.path.alias;
};

export const getProductTeaserVariantData = (product) => {
  const variant = product?.rels?.product?.rels?.variants[0];
  return { ...variant, shopifyId: getProductVariantGid(variant.shopifyId) };
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

export const getCategoryProducts = (node) => {
  return node?.rels?.products || [];
};

export const getValidCategories = (nodes) => {
  const items = nodes.filter((node) => getCategoryProducts(node).length);
  return items.map((node) => getCategoryNodeData(node));
};

export const getValidProductNodes = (nodes) => {
  return nodes.map((node) => getCollectionNodeProduct(node));
};

export const getOverviewNodes = (displayName, dataSet) => {
  switch (displayName) {
    case 'categories':
      return getValidCategories(dataSet);
    case 'products':
      return getValidProductNodes(dataSet);
    default:
      return dataSet;
  }
};
