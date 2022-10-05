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

  const renderMap = {
    products: {
      listStyle: 'grid',
      itemTemplate: ProductTeaser,
    },
    collections: {
      listStyle: 'basic',
      itemTemplate: ProductTeaser,
      itemTemplate: TeaserSimple,
    },
    categories: {
      listStyle: 'basic',
      itemTemplate: ProductTeaser,
      itemTemplate: TeaserSimple,
    },
  };

  const dataSet = data[displayName]?.nodes ?? null; 
  const nodes = U.getOverviewNodes(displayName, dataSet);
  
  return nodes && Array.isArray(nodes) 
    ? <Teasers 
      teasers={nodes} listStyle={renderMap[displayName].listStyle} itemTemplate={renderMap[displayName].itemTemplate}/>
    : null;
};

export default Overview;
