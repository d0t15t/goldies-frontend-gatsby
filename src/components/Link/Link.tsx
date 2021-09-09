import React, { FC, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { urlIsExternal } from '~utils/index';
// todo: add handling for external links.
import * as S from './Link.styled';

interface LinkProps {
  url: string;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ url, children }) => {
  return (
    <S.Container>
      <GatsbyLink to={url}>{children}</GatsbyLink>
    </S.Container>
  );
};

export default Link;
