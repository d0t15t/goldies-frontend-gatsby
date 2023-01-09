import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: Array<string>;
      siteUrl: string;
      imageUrl: string;
      language: string;
      robots: string;
    };
  };
}

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            imageUrl
            language
            robots
            copyright
            author
          }
        }
      }
    `
  );

  return siteMetadata;
};
