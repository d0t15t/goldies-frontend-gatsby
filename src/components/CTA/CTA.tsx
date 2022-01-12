import React, { FC, ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import cls from 'classnames';
import { Button, Typography } from '@mui/material';
import { Link } from '~components/';
import * as S from './CTA.styled';

export const CTA = () => {
  const {
    notices: { nodes },
  } = useStaticQuery(graphql`
    query {
      ...ctaFragment
    }
  `);
  return nodes.map((item) => {
    return (
      <S.Wrapper key={item.id} className={cls(['cta-item'])}>
        <S.Inner>
          <Typography variant="overline">{item.body.markup}</Typography>
          {/* <Button variant="text"> */}
          {/* <Typography variant="overline">
            <Link to={item.link.uri}>{item.link.title}</Link>
          </Typography> */}
          {/* </Button> */}
        </S.Inner>
      </S.Wrapper>
    );
  });
};

export default CTA;
