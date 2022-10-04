import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cls from 'classnames';
import { Typography } from '@mui/material';
import { Link } from '~components'
import { Teasers, ProductTeaser, TeaserSimple } from '~components/Teasers';
import * as U from '~utils'
import * as S from './Overview.styled';

export const Overview = ({ displayName }) => {

  const data = useStaticQuery(graphql`
    query {
      products: allNodeProduct(sort: {fields: title}) {
        nodes {
          ...productOverviewFragment
        }
      }
      collections: allNodeCollection {
        nodes {
          ...collectionOverviewFragment
        }
      }
      categories: allTaxonomyTermShopifyTags {
        nodes {
          ...categoryOverviewFragment
        }
      }
    }
  `);

  const renderMap = [
    {
      id: 'products',
      item_template: ProductTeaser,
    },
  ];

   

  const dataSet = data[displayName]?.nodes ?? null; 
  const nodes = U.getOverviewNodes(displayName, dataSet);
  
  return nodes && Array.isArray(nodes) 
    ? <Teasers teasers={nodes} teaserStyle={'grid'}/>
    : null;
};

export default Overview;
