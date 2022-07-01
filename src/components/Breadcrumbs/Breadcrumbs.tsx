import React, { FC, ReactNode } from 'react';
import * as S from './Breadcrumbs.styled';

export const Breadcrumbs = ({breadcrumbs, children}) => {
  
  return breadcrumbs ? (
    <S.Breadcrumbs>
      {breadcrumbs.map(item => {
        //const [name, arr] = Object.entries(item)
        Object.values(item).map((e, i) => {
          console.log(i, e);
        })
        Object.entries(item).forEach(([i, e]) => {
          
        });
      })}
      {children}
    </S.Breadcrumbs>

  ) : null;
};

export default Breadcrumbs;
