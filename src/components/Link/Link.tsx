import React, { FC, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import cls from 'classnames';
import { urlIsExternal } from '~utils/index';
// todo: add handling for external links.
import * as S from './Link.styled';

interface LinkProps {
  children: ReactNode;
  classNames: string;
  handleClick: Function;
  url: string;
}

export const Link: FC<LinkProps> = ({ handleClick, url, children, classNames }) => {
  return (
    <GatsbyLink to={url} className={cls(['link', classNames])} onClick={handleClick}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
