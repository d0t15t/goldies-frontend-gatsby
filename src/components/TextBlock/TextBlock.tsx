import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
import * as S from './TextBlock.styled';

export const TextBlock = ({ text }) => {
  return <S.Wrapper dangerouslySetInnerHTML={{__html: text}} className={cls('text-block--wrapper')}/>;
};

export default TextBlock;
