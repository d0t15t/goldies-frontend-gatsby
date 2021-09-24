/* eslint-disable camelcase */
import React, { FC } from 'react';
import { graphql } from 'gatsby';

//* @var I */ Interfaces */
import * as I from '~templates/interfaces';

//* @var PU */ Page Utilities */
import * as PU from '..';

//* @var S */ Styled components */
import * as S from './Page.styled';

const PageWrapper: FC<I.pageWrapper> = ({ data }) => {
  const node = PU.getNode(data);

  const { headerData, bodyData, footerData } = PU.getPageNodeData(node);

  const getPageBodyTemplate = (data, type) => {
    const pageBodyTemplate = {
      node__page: () => {
        return <PU.Tiles {...data} />;
      },
      node__collection: () => {
        return <PU.Collection {...data} />;
      },
      node__product: () => {
        return <PU.Product {...data} />;
      },
    };
    return type in pageBodyTemplate ? pageBodyTemplate[type]() : null;
  };

  return node ? (
    <S.Container>
      <PU.PageHeader {...headerData} />
      {getPageBodyTemplate(bodyData, node.internal.type)}
      <PU.PageFooter />
    </S.Container>
  ) : null;
};

export default PageWrapper;

export const query = graphql`
  query ($id: String) {
    ...pageTilesFragment
    ...collectionPageFragment
    # ...productPageFragment
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
            id
            internal {
              type
            }
            rels: relationships {
              teasers: field_teasers {
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
            }
          }
        }
      }
    }
  }
`;

export const collectionPageFragment = graphql`
  fragment collectionPageFragment on Query {
    node__collection: nodeCollection(id: { eq: $id }) {
      id
      title
      internal {
        type
      }
      path {
        alias
      }
      body {
        markup: processed
      }
      headline: field_headline {
        markup: processed
      }
      rels: relationships {
        products: field_products {
          ...productTeaserFragment
        }
      }
    }
  }
`;

export const productPageFragment = graphql`
  fragment productPageFragment on node__product {
    node__product: nodeProduct(id: { eq: $id }) {
      id
      title
      internal {
        type
      }
      path {
        alias
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
      media: field_media {
        id
        internal {
          type
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
          id
          internal {
            type
          }
          publicURL
          image: childImageSharp {
            gatsbyImageData(width: 500, placeholder: BLURRED, formats: [WEBP])
          }
        }
      }
    }
  }
`;
