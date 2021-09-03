import React, { FunctionComponent } from 'react';
import * as S from './Overview.styled';

export const Overview: FunctionComponent = () => (
  <S.Container>
    <S.StyledLogo />
    <S.Paragraph>Delete this file to start your project.</S.Paragraph>
    <S.Link href="https://github.com/msallent/gatsby-starter-skeleton">Gatsby Skeleton</S.Link>
  </S.Container>
);
