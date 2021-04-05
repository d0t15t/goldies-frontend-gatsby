import React, { useState } from 'react'
import {
  arrayOf,
  bool,
  func,
  node,
  number,
  oneOfType,
  shape,
  string,
} from 'prop-types'
import { graphql } from 'gatsby'
import cls from 'classnames'
import uuid from 'react-uuid'
import Img from 'gatsby-image'
import ProductVariantSet from '~components/ProductVariantSet'
import SocialIcons from '~components/SocialIcons'
import { Box, Flex, Text } from '~components/base'
import { Link } from '~components/Link'
import { Image } from '~components/Image'
import Layout from '~components/Layout'
import Slider from '~components/Slider'
import ProductCollections from '~components/ProductCollections'
import Seo from '~components/Seo'
import Emoji from '~components/Emoji'
import { theme, themeGet } from '~style'
import { getShopifyUuid } from '~util'

const ProductBreadcrumbs = ({ links }) => {
  return links.length > 0 ? (
    <Box as="ul" css="list-style: none;" m={[0]}>
      {links.map(item => {
        return (
          item.fields?.uri && (
            <Box as="li" key={uuid()}>
              <Box as="span" pr={[2]}>
                <Emoji />
              </Box>{' '}
              <Link
                to={item.fields.uri}
                from="product-page related colelctions link"
              >
                {item.title}
              </Link>
            </Box>
          )
        )
      })}
    </Box>
  ) : null
}

ProductBreadcrumbs.propTypes = {
  links: arrayOf(shape({})).isRequired,
}

const Product = ({ data }) => {
  const [activeId, setActiveId] = useState()

  const [slideIndex, setSlideIndex] = useState(0)

  const { node, seo } = data

  if (!node) return null

  const { description, images, shopifyId, title, variants } = node

  const socialSettings = {
    url: node?.onlineStoreUrl,
    email: {
      subject: `${title} by Goldies Natural Beauty`,
      body: `I thought you might like this: ${title} by Goldies Natural Beauty \n ${node?.onlineStoreUrl}`,
    },
    fb: {
      hashtag: '#GoldiesNaturalBeauty',
      quote: `${title} by Goldies Natural Beauty`,
    },
    wa: {
      title,
    },
  }

  const imageSlides = variants?.map(item => {
    return (
      <Img
        fluid={{ ...item.image.localFile.childImageSharp.fluid }}
        key={uuid()}
      />
    )
  })

  const getActiveIndex = id => {
    return id ? variants.findIndex(item => item.variantId === id) : 0
  }

  const handleChange = value => {
    setActiveId(value)
    setSlideIndex(getActiveIndex(value))
  }

  return (
    <>
      <Layout metatags={{ ...seo }}>
        <Box
          className="product-page"
          // p={[0]}
          pt={[0]}
          mt={[0]}
          maxWidth={['100%']}
        >
          <Text
            className="product-page--headline"
            as="h1"
            fontSize={[4]}
            mb={[3]}
            css={`
              text-align: center;
              display: none;

              @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
                display: inherit;
              }
            `}
          >
            {title}
          </Text>
          <Flex
            flexDirection={['column', 'row']}
            width={[1, 5 / 6]}
            m={['auto']}
          >
            <Box
              className={cls('product-item--inner', 'product-item--image')}
              width={[1, 1 / 2]}
              pr={[0, 3]}
              mb={[3]}
            >
              <Box
                className="product-item--slider"
                css={`
                  .slider-primary .slick-slide {
                    transition: border 100ms;

                    &.slick-active {
                      border: 1px solid rgba(0, 0, 0, 0.25);
                    }
                  }
                `}
              >
                <Slider
                  slides={imageSlides}
                  slideIndex={slideIndex}
                  setSlideIndex={setSlideIndex}
                  enlarge={false}
                />
              </Box>
              <Box
                css={`
                  display: none;
                  @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
                    display: inherit;
                  }
                `}
              >
                <ProductCollections uuid={shopifyId} />
              </Box>
            </Box>
            <Box
              width={[1, 1 / 2]}
              className={cls('product-item--inner', 'product-item--info')}
            >
              <Box textAlign={['center', 'left']}>
                <Text
                  className="product-page--headline"
                  as="h1"
                  fontSize={[4]}
                  css={`
                    text-align: center;

                    @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
                      display: none;
                    }
                  `}
                  pb={[3]}
                >
                  {title}
                </Text>

                <ProductVariantSet
                  activeId={activeId}
                  activeItem={variants[getActiveIndex(activeId)]}
                  setActiveId={setActiveId}
                  setSlideIndex={setSlideIndex}
                  productName={title}
                  variants={variants}
                  handleChange={handleChange}
                />
              </Box>
              <Box
                mt={[3]}
                css={`
                  text-align: center;
                  @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
                    display: none;
                  }
                `}
              >
                <ProductCollections uuid={shopifyId} />
              </Box>

              <Box
                className="description"
                dangerouslySetInnerHTML={{ __html: description }}
                // mt={[1, 0]}
                width={[1]}
                p={[2, 0]}
                pt={[2, 3]}
              />
            </Box>
          </Flex>
        </Box>
        <SocialIcons {...socialSettings} />
      </Layout>
    </>
  )
}

export default Product

export const query = graphql`
  query($nid: String!, $handle: String!) {
    node: shopifyProduct(
      handle: { eq: $handle }
      availableForSale: { eq: true }
    ) {
      shopifyId
      title
      tags
      description: descriptionHtml
      onlineStoreUrl
      images {
        localFile {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      variants {
        price
        priceV2 {
          amount
          currencyCode
        }
        variantId: shopifyId
        title
        sku
        weight
        weightUnit
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    seo: nodeMetaTags(drupal_internal__nid: { eq: $nid }) {
      ...Seo
    }
  }
`
