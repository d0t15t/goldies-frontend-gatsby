import React from 'react'
import { graphql } from 'gatsby'
import { Box, Text } from '~components/base'
import SocialIcons from '~components/SocialIcons'
import Layout from '~components/Layout'

import Paragraphs from '~components/paragraphs'
import NewsletterForm from '~components/NewsletterForm'
import { themeGet } from '~style'
import { extractTeasers } from '~util'

const Page = props => {
  const { data } = props
  const { node, seo } = data
  const { title, description, relationships } = node

  const { blocks } = relationships

  return (
    <>
      <Layout menu variant="frontpage" metatags={{ ...seo }}>
        {/* {teasers && <TeasersTiles teasers={teasers} />} */}
        <Paragraphs paragraphs={blocks} />
        <Box mt={[4]}>
          <NewsletterForm />
          <SocialIcons>
            <Text as="h3" fontSize={[5]}>
              😂
            </Text>
            <Text
              as="h4"
              css={`
                color: ${themeGet('colorSchemes.default.grey')};
                font-style: italic;
              `}
            >
              Also these!
            </Text>
          </SocialIcons>
        </Box>
      </Layout>
    </>
  )
}

export default Page

export const query = graphql`
  query($id: String!, $nid: String!) {
    node: nodePage(id: { eq: $id }) {
      title
      description: body {
        value
      }

      relationships {
        blocks: field_blocks {
          ... on paragraph__overview {
            typeName: __typename
            id
            overview: field_view
          }
          ... on paragraph__tiles {
            typeName: __typename
            id
            fieldType: __typename
            relationships {
              teasers: field_teasers {
                title: field_headline
                subtitle: field_subline
                teaserStyle: field_teaser_style
                relationships {
                  content: field_content {
                    ... on node__collection {
                      title
                      path {
                        alias
                      }
                    }
                    ... on node__product {
                      path {
                        alias
                      }
                    }
                  }
                  media: field_media {
                    relationships {
                      image: field_media_image {
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 444) {
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

    seo: nodeMetaTags(drupal_internal__nid: { eq: $nid }) {
      ...Seo
    }
  }
`
