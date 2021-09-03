/**
 * @file utils.ts
 */

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
export const getGid = ( prefix: string, id: string) => btoa(`gid://${prefix}/${id}`);

/**
 *
 * @param node
 * @returns
 */
export const getProductParts = (node) => {
  const product = node?.relationships?.product;
  const variants = node?.relationships?.product?.relationships?.variants;
  return [product, variants];
};
