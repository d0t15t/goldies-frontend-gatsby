import { graphql } from 'gatsby';

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
        markup: processed
      }
      body {
        markup: processed
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
        }
      }
    }
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
    teaserStyle: field_teaser_style
    rels: relationships {
      reference: field_content {
        ... on node__collection {
          id
          internal {
            type
          }
          path {
            alias
          }
        }
        ... on node__product {
          id
          internal {
            type
          }
          path {
            alias
          }
        }
      }
      media: field_media {
        ...teaserMediaFragment
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
        markup: processed
      }
      headline: title
      rels: relationships {
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

export const shopifyProductFragment = graphql`
  fragment shopifyProductFragment on shopify_product__shopify_product {
    id
    internal {
      type
    }
    handle
    body: body_html {
      markup: processed
    }
    title
    product_id
    rels: relationships {
      tags {
        name
      }
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
      gatsbyImageData(width: 100, placeholder: BLURRED, formats: [WEBP])
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
  fragment menuLinkFragment on menu_link_content__menu_link_content {
    id
    internal {
      type
    }
    title
    langcode
    link {
      alias: uri_alias
    }
    menuName: menu_name
    parent {
      id
    }
  }
`;

export const menuFooterMenuFragment = graphql`
  fragment menuFooterMenuFragment on Query {
    footerMenuItems: allMenuLinkContentMenuLinkContent(
      filter: { menu_name: { eq: "footer" } }
      sort: { fields: weight }
    ) {
      nodes {
        ...menuLinkFragment
      }
    }
  }
`;

export const menuFooterContactMenuFragment = graphql`
  fragment menuFooterContactMenuFragment on Query {
    footerContactMenuItems: allMenuLinkContentMenuLinkContent(
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
    sidebarMenuItems: allMenuLinkContentMenuLinkContent(
      filter: { menu_name: { eq: "sidebar" } }
      sort: { fields: weight }
    ) {
      nodes {
        ...menuLinkFragment
      }
    }
  }
`;

export const ctaFragment = graphql`
  fragment ctaFragment on Query {
    notices: allNodeCta {
      nodes {
        id
        internal {
          type
        }
        body {
          markup: processed
        }
        link: field_link {
          title
          uri
        }
      }
    }
  }
`;
