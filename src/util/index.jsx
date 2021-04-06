import btoa from 'btoa'

const backendUrl = process.env.GATSBY_DRUPAL_ROOT
const frontendUrl = process.env.GATSBY_SITE_BASE

export const getRelativeUrl = url =>
  url && url.replace(process.env.GATSBY_PRODUCTION_URL, '')

export const replaceBackendUrl = url =>
  url && url.replace(backendUrl, frontendUrl)

// export const extractQueryImage = mediaField => {
//   const { relationships } = mediaField
//   const { field_media_image } = relationships
//   const { localFile } = field_media_image
//   const { childImageSharp } = localFile
//   const { fixed, fluid } = childImageSharp
//   return fixed || fluid
// }

export const extractImage = (parent, teaserType) => {
  const { image, media } = parent || {}
  // console.log('extractImage -> media', media)
  if (image) {
    const imageData = image?.localFile?.childImageSharp || {}
    const { fixed, fluid } = imageData
    return fixed || fluid
  }
  if (media) {
    return extractImage(media?.relationships, teaserType)
  }
  Object.keys(parent).forEach(item => {
    // console.log(item, teaserType)
    // console.log(relationships[item])
  })

  // relationships.keys().forEach(item => {
  //   console.log(item)
  // })

  return null
}

export const extractTeasers = nodes => {
  return nodes?.map(node => {
    return {
      ...node,
      title: node.title || node.relationships.content.title,
      image: extractImage(node.relationships),
      uri: node.relationships.content.path.alias,
    }
  })
}

export const toggleDrawer = (dispatch, drawersStatus, newStatus, side) => {
  const drawersStatusUpdate = drawersStatus
  drawersStatusUpdate[side] = newStatus || !drawersStatus[side]
  dispatch({ type: 'DRAWER_STATUS', drawersStatus })
}

/**
 *
 * @param {String} url
 */
export const urlIsExternal = url => {
  const hostname = process.env.GATSBY_BASE_HOSTNAME
  if (typeof url !== 'string') return true
  if (url.length === 0) return true
  if (!hostname) return true
  if (url.indexOf('#') === 0) return false
  if (url.indexOf('/') === 0) return false
  const array = url.split('://')
  if (typeof array[1] !== 'undefined') return true
  return array[1] !== hostname
}

export function getShopifyUuid(shopifyId, type = 'ProductVariant') {
  return btoa(`gid://shopify/${type}/${shopifyId}`)
}
