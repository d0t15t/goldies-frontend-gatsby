/* eslint-disable camelcase */
import { FixedObject, FluidObject } from 'gatsby-image';

declare namespace QueryTypes {
  export interface typeBase {
    id: string;
    internal: {
      type: string;
    };
  }

  export type pageIndex = string;

  export interface pageWrapper {
    data: {
      [node__page: string]: pagePageDataType;
    };
  }

  export interface pageBasicData extends typeBase {
    title: string;
    path: {
      alias: string;
    };
    headline: {
      markup: string;
    };
    body: {
      markup: string;
    };
    titleDisplay: boolean | undefined;
  }

  export type pageBase = pagePageDataType | collectionPageType | productPageType | null;

  export type collectionPageType = pageBasicData;
  export type productPageType = pageBasicData;

  export interface pagePageDataType extends pageBasicData {
    rels: {
      tiles: {
        rels: {
          teasers: {
            headline: string;
            subline: string;
            teaserStyle: string;
            rels: {
              media: {
                id: string;
                rels: {
                  mediaImage: {
                    id: string;
                    internal: {
                      type: string;
                    };
                    localFile: {
                      id: string;
                      publicURL: string;
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  }

  export interface pageTile extends typeBase {
    rels: pageTileTeaser[];
  }

  export interface pageTileTeaser extends typeBase {
    headline: string;
    subline: string;
    teaserStyle: string | null;
    rels: {
      media: mediaItem[];
    };
  }

  export interface mediaItem extends typeBase {
    rels: {
      mediaImage: mediaItemImage;
    };
  }

  export interface mediaItemImage extends typeBase {
    localFile: localFileType;
  }

  export interface localFileType extends typeBase {
    publicUrl: string;
    childImageSharp: childImageSharpType;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface childImageSharpType extends typeBase {
    // fixed: FixedObject;
    // fluid: FluidObject;
  }

  export interface mediaFileBase {
    id: string;
    internal: {
      type: string;
    };
    localFile: {
      id: string;
      publicUrl: string;
    };
  }
}
