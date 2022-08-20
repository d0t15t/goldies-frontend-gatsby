import React, { FC, ReactNode } from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { Link } from '~components'
import * as S from './Breadcrumbs.styled'

//@todo: add categories - they are already in query.
export const Breadcrumbs = ({breadcrumbs, children}) => {
  

return breadcrumbs.length ? (
    <S.Breadcrumbs>
      { breadcrumbs.map(item => {

        return (
          <li key={item.id}>
            { item?.label 
              ? ( item?.path?.alias ) 
                ? <Link to={item.path.alias}><Typography variant="span">{ item.label }:</Typography></Link>
                : <Typography variant="span"> { item.label }:</Typography> 
              : null }
            <ul>
              { item.items && item.items.map(subItem => {
                return (
                  <li key={ subItem.id }>
                    { subItem?.path?.alias 
                      ? <Link to={ subItem.path.alias }>{ subItem?.title }</Link> 
                      : <Typography variant='caption'>{subItem.title}</Typography> }
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
      {children}
    </S.Breadcrumbs>

  ) : null;
};

export default Breadcrumbs;
