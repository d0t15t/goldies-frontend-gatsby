import { graphql } from 'gatsby';

export const breadcrumbsFragment = graphql`
  fragment breadcrumbsFragment on Query {
    node__product: nodeProduct(id: { eq: $id }) {
      breadcrumb__node__product: relationships {
        Collections: node__collection {
          title
          id
          path {
            alias
          }
        }
        Categories: field_tags {
          title: name
          id
          path {
            alias
          }
        }
      }
    }
  }
`;

export const pageTilesFragment = graphql`
  fragment pageTilesFragment on Query {
    node__page: nodePage(id: { eq: $id }) {
      id
      title
      internal {
        type
      }
      path {
        alias
      }
      headline: field_headline {
        markup: value
      }
      body {
        markup: value
      }
      titleDisplay: field_bool
      rels: relationships {
        tiles: field_blocks {
          ... on paragraph__text {
            id
            internal {
              type
            }
            body: field_body {
              markup: processed
            }
          }
          ... on paragraph__tiles {
            ...tilesFragment
          }
          ... on paragraph__cart {
            ...cartFragment
          }
          ... on paragraph__overview {
            ...overviewFragment
          }
        }
      }
    }
  }
`;
export const overviewFragment = graphql`
  fragment overviewFragment on paragraph__overview {
    id
    internal {
      type
    }
    displayName: field_view
  }
`;

export const productOverviewFragment = graphql`
  fragment productOverviewFragment on node__product {
    id
    internal {
      type
    }
    path {
      alias
    }
    title
    ...productTeaserFragment
  }
`;

export const collectionOverviewFragment = graphql`
  fragment collectionOverviewFragment on node__collection {
    id
    internal {
      type
    }
    path {
      alias
    }
    title
  }
`;

export const cartFragment = graphql`
  fragment cartFragment on paragraph__cart {
    id
    internal {
      type
    }
  }
`;

export const tilesFragment = graphql`
  fragment tilesFragment on paragraph__tiles {
    id
    internal {
      type
    }
    rels: relationships {
      teasers: field_teasers {
        ...tileTeaserFragment
      }
    }
  }
`;

export const tileTeaserFragment = graphql`
  fragment tileTeaserFragment on paragraph__teaser {
    id
    internal {
      type
    }
    title: field_headline
    subTitle: field_subline
    rels: relationships {
      reference: field_content {
        id
        internal {
          type
        }
        path {
          alias
        }
      }
      media: field_media {
        ...teaserMediaFragment
      }
    }
  }
`;

export const categoryPageFragment = graphql`
  fragment categoryPageFragment on Query {
    taxonomy_term__shopify_tags: taxonomyTermShopifyTags(id: { eq: $id }) {
      id
      internal {
        type
      }
      title: name
      rels: relationships {
        products: node__product {
          ...productTeaserFragment
        }
      }
    }
  }
`;

export const categoryOverviewFragment = graphql`
  fragment categoryOverviewFragment on taxonomy_term__shopify_tags {
    name
    id
    internal {
      type
    }
    path {
      alias
    }
    rels: relationships {
      products: node__product {
        id
      }
    }
  }
`;

export const collectionPageFragment = graphql`
  fragment collectionPageFragment on Query {
    node__collection: nodeCollection(id: { eq: $id }) {
      id
      internal {
        type
      }
      path {
        alias
      }
      body {
        markup: value
      }
      displayFeatured: field_display_header
      featuredDescription: field_featured_description {
        markup: value
      }
      description: field_description {
        markup: value
      }
      title
      rels: relationships {
        media: field_media {
          rels: relationships {
            image: field_media_image {
              localFile {
                ...largeImageFragment
              }
            }
          }
        }
        featured: field_featured_products {
          ...productTeaserFragment
        }
        products: field_products {
          ...productTeaserFragment
        }
      }
    }
  }
`;

export const productPageFragment = graphql`
  fragment productPageFragment on Query {
    node__product: nodeProduct(id: { eq: $id }) {
      id
      title
      internal {
        type
      }
      path {
        alias
      }
      rels: relationships {
        # media: field_media {
        #   ...teaserMediaFragment
        # }
        shopifyProduct: field_shopify_product {
          ...shopifyProductFragment
        }
      }
    }
  }
`;

export const shopifyProductVariantFragment = graphql`
  fragment shopifyProductVariantFragment on shopify_product_variant__shopify_product_variant {
    id
    internal {
      type
    }
    grams
    inventory_quantity
    inventory_policy
    old_inventory_quantity
    price
    requires_shipping
    sku
    title
    taxable
    shopifyId: variant_id
    weight
    weight_unit
    rels: relationships {
      image {
        id
        internal {
          type
        }
        localFile {
          id
          internal {
            type
          }
          ...teaserImageFragment
          ...thumbnailImageFragment
          ...largeImageFragment
        }
      }
    }
  }
`;

export const shopifyTagFragment = graphql`
  fragment shopifyTagFragment on taxonomy_term__shopify_tags {
    id
    internal {
      type
    }
    name
    relationships {
      node__product {
        id
        internal {
          type
        }
        title
        path {
          alias
        }
        relationships {
          field_shopify_product {
            relationships {
              image {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const shopifyProductFragment = graphql`
  fragment shopifyProductFragment on shopify_product__shopify_product {
    id
    internal {
      type
    }
    handle
    body: body_html {
      markup: value
    }
    title
    product_id
    rels: relationships {
      variants {
        ...shopifyProductVariantFragment
      }
      thumbnailImage: image {
        localFile {
          ...thumbnailImageFragment
        }
      }
      teaserImage: image {
        localFile {
          ...teaserImageFragment
        }
      }
      largeImage: image {
        localFile {
          ...largeImageFragment
        }
      }
      extraImages: extra_images {
        id
        internal {
          type
        }
        localFile {
          ...thumbnailImageFragment
          ...teaserImageFragment
          ...largeImageFragment
        }
      }
    }
  }
`;

export const productTeaserFragment = graphql`
  fragment productTeaserFragment on node__product {
    id
    title
    internal {
      type
    }
    path {
      alias
    }
    rels: relationships {
      product: field_shopify_product {
        rels: relationships {
          image {
            localFile {
              ...teaserImageFragment
            }
          }
          variants {
            ...shopifyProductVariantFragment
          }
        }
      }
    }
  }
`;

export const teaserMediaFragment = graphql`
  fragment teaserMediaFragment on media__image {
    id
    internal {
      type
    }
    rels: relationships {
      mediaImage: field_media_image {
        id
        internal {
          type
        }
        localFile {
          ...teaserImageFragment
        }
      }
    }
  }
`;

export const thumbnailImageFragment = graphql`
  fragment thumbnailImageFragment on File {
    id
    internal {
      type
    }
    thumbnailImage: childImageSharp {
      gatsbyImageData(
        width: 100
        placeholder: BLURRED
        formats: [WEBP]
        transformOptions: { fit: CONTAIN }
      )
    }
  }
`;

export const teaserImageFragment = graphql`
  fragment teaserImageFragment on File {
    id
    internal {
      type
    }
    teaserImage: childImageSharp {
      gatsbyImageData(width: 500, placeholder: BLURRED, formats: [WEBP])
    }
  }
`;

export const largeImageFragment = graphql`
  fragment largeImageFragment on File {
    id
    internal {
      type
    }
    largeImage: childImageSharp {
      gatsbyImageData(width: 900, placeholder: BLURRED, formats: [WEBP])
    }
  }
`;

export const menuLinkFragment = graphql`
  fragment menuLinkFragment on MenuItems {
    id
    internal {
      type
    }
    title
    url
    weight
    parent {
      id
    }
  }
`;

export const menuFooterMenuFragment = graphql`
  fragment menuFooterMenuFragment on Query {
    footerMenuItems: allMenuItems(
      filter: { menu_name: { eq: "footer" } }
      sort: { fields: weight, order: ASC }
    ) {
      nodes {
        ...menuLinkFragment
      }
    }
  }
`;

export const menuFooterContactMenuFragment = graphql`
  fragment menuFooterContactMenuFragment on Query {
    footerContactMenuItems: allMenuItems(
      filter: { menu_name: { eq: "footer-1" } }
      sort: { fields: weight }
    ) {
      nodes {
        ...menuLinkFragment
      }
    }
  }
`;

export const menuSidebarMenuFragment = graphql`
  fragment menuSidebarMenuFragment on Query {
    sidebarMenuItems: allMenuItems(
      filter: { menu_name: { eq: "main" } }
      sort: { fields: weight }
    ) {
      nodes {
        ...menuLinkFragment
      }
    }
  }
`;

/**
export const ctaFragment = graphql`
  fragment ctaFragment on Query {
    notices: allNodeCta {
      nodes {
        id
        internal {
          type
        }
        body {
          markup: value
        }
        link: field_link {
          title
        }
      }
    }
  }
`;
*/
