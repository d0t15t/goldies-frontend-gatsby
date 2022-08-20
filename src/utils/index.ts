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
  return `${title}, ${variant.title}`;
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
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: arrayToTree(items, item.id) }))
    .sort((a, b) => a.weight - b.weight);
};

const decorateTree = (tree, depth = 0) => {
  return tree.map(item => { 
    const d = { depth, ...item };
    if (d?.children.length) {
      decorateTree(d?.children, depth++);
    }
    return d;
  });
};

export const getMenuItems = (menuItems) => {
  const flattened = menuItems.nodes.map(item => {
    return {
      ...item, parent_id: item?.parent?.id ?? null,
    }
  });
  const tree = arrayToTree(flattened);
  return decorateTree(tree);
};

export const stripTags = (str: string) => str.replace(/(<([^>]+)>)/gi, '');

export const getCategoryPath = (node) => {
  const slug = `${node.name}`.toLocaleLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
  const alias = `/category/${slug}`
  return { alias }
};

