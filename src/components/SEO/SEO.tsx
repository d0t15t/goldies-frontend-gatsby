import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
//import Favicon from '../../assets/favicon.ico';

export interface SEOProps {
  location: Location;
  pageMetadata?: {
    title?: string;
    description?: string;
    keywords?: Array<string>;
    imageUrl?: string;
    language?: string;
    type?: string;
  };
}

export const SEO: FunctionComponent<SEOProps> = ({ location, pageMetadata }) => {
  console.log('🚀 ~ file: SEO.tsx:19 ~ pageMetadata', pageMetadata);
  const { title, description, keywords, siteUrl, imageUrl, language, robots } = useSiteMetadata();

  return (
    <Helmet title={pageMetadata?.title} defaultTitle={title} titleTemplate={`${title} - %s`}>
      <html lang={pageMetadata?.language || language} />
      <meta name="description" content={pageMetadata?.description || description} />
      <meta name="keywords" content={(pageMetadata?.keywords || keywords).join(', ')} />
      <meta name="robots" content={pageMetadata?.keywords || robots} />
    </Helmet>
  );
};

export default SEO;
