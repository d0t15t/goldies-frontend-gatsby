import React, { FC, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import cls from 'classnames';
import { urlIsExternal } from '~utils/index';
// todo: add handling for external links.
import * as S from './Link.styled';

interface LinkProps {
  children: ReactNode;
  className: string;
  onClick: Function;
  to: string;
}

export const Link: FC<LinkProps> = (props) => {
  const { onClick, to, children, className } = props;
  return to ? (
    <GatsbyLink {...props} to={to} className={cls(['link', className])} onClick={onClick}>
      {children}
    </GatsbyLink>
  ) : null;
};

export default Link;
