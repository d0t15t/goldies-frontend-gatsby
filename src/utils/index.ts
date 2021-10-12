/**
 * @file utils.ts
 */

// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 *
 * @param url
 * @param basePath
 * @returns
 */
export const getRelativePath = (url: string, basePath: string) => url.replace(basePath, '');

/**
 *
 * @param id
 * @param prefix
 * @returns
 */
export const getGid = (prefix: string, id: string) =>
  Buffer.from(`gid://${prefix}/${id}`).toString('base64');

/**
 *
 * @param node
 * @returns
 */
// export const getProductParts = (node) => {
//   const product = node?.rels?.product;
//   const variants = node?.rels?.product?.relationships?.variants;
//   return [product, variants];
// };

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
