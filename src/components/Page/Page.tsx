/* eslint-disable camelcase */
import React, { FC } from 'react';
import { graphql } from 'gatsby';
//* @var I */ Interfaces */
import * as I from '~utils/interfaces';
//* @var PU */ Page Utilities */
import * as PU from '.';
//* @var S */ Styled components */
import * as S from './Page.styled';

export const Page: FC<I.pageWrapper> = ({ data }) => {
  const nodeType = PU.getNodeType(data);
  const node = PU.getNode(data);
  const { headerData, bodyData, footerData } = PU.getPageData(node);

  return node ? (
    <S.Container>
      <PU.PageHeader {...headerData} />
      <PU.PageBody {...bodyData} type={node.internal.type} />
      <PU.PageFooter />
    </S.Container>
  ) : null;
};

export default Page;

export const query = graphql`
  query ($id: String) {
    ...pagePageFragment
    ...collectionPageFragment
    ...productPageFragment
  }
  fragment pagePageFragment on Query {
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
        processed
      }
      body {
        processed
      }
      titleDisplay: field_bool
      rels: relationships {
        tiles: field_blocks {
          id
          internal {
            type
          }
          rels: relationships {
            teasers: field_teasers {
              id
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
                  id
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
                          fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
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
