import { useState, useEffect } from 'react'
import qs from 'query-string'
import { theme } from '~style'

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

// const getWindowDimensions = () => {
//   if (typeof window !== `undefined`) {
//     const { innerWidth: width, innerHeight: height } = window
//     return {
//       width,
//       height,
//     }
//   }

//   return { width: 900, height: 900 }
// }

// const useWindowDimensions = () => {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   )
//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions())
//     }

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return windowDimensions
// }

// const getViewport = (height, width) => {
//   if (width <= 0) return null
//   let viewportName = 'xs'
//   Object.keys(theme.breakpoints).map((key, value) => {
//     if (!isNaN(key)) return
//     const breakpoint = parseInt(theme.breakpoints[key], 10)
//     if (width > breakpoint) {
//       viewportName = key
//     }
//   })
//   return viewportName ?? null
// }

// const getSearchParams = key => {
//   const values = qs.parse(window.location.search)
//   return key ? values[key] : values
// }

// export const formatPrice = (price, locales, currency) => {
//   return new Intl.NumberFormat(locales, {
//     style: 'currency',
//     currency,
//   }).format(price)
// }

export const toggleDrawer = (dispatch, drawersStatus, newStatus, side) => {
  const drawersStatusUpdate = drawersStatus
  drawersStatusUpdate[side] = newStatus || !drawersStatus[side]
  dispatch({ type: 'DRAWER_STATUS', drawersStatus })
}

// export async function updateQuantity(variantId, quantity) {
//   setUpdating(true)
//   try {
//     await updateItemQuantity(variantId, quantity)
//     setUpdating(false)
//   } catch {
//     dispatch({
//       type: 'MODAL_CONTENT',
//       payload: (
//         <Text as="p">
//           There was a problem adding updating your cart, please contact
//           administrator.
//         </Text>
//       ),
//     })
//     dispatch({ type: 'MODAL_STATUS', payload: true })
//     setUpdating(false)
//   }
// }

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
