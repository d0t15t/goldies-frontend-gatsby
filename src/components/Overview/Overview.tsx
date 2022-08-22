import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cls from 'classnames';
import { Typography } from '@mui/material';
import { Link } from '~components'
import * as U from '~utils'
import * as S from './Overview.styled';

export const Overview = ({ displayName }) => {
  const data = useStaticQuery(graphql`
    query {
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
  const dataSet = data[displayName]?.nodes ?? null; const nodes =
  displayName === 'categories' ? U.getValidCategories(dataSet) : dataSet;
  
  return nodes ? (
    <S.Wrapper className={cls('overview-wrapper', {[`overview-wrapper--${displayName}`]: displayName})}>
      { nodes.map(({id, title, path}) => {
        return (
          <li key={id}>
            <Typography variant="h5">
              <Link to={ path.alias }>{ title }</Link>
            </Typography>
          </li>
        );
      })}
    </S.Wrapper>
  ) : null;
};

export default Overview;
