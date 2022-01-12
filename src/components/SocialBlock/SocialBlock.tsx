import React, { FC, ReactNode } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { useTheme } from '@mui/material/styles';
import * as U from '~utils';
import * as S from './SocialBlock.styled';

export const SocialBlock = () => {
  const theme = useTheme();
  // const items = [{ id: 'email', button: EmailShareButton, icon: EmailIcon, props: {} }];
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const items = [
    { name: 'facebook', url: 'https://www.facebook.com/Goldiessoap/' },
    { name: 'instagram', url: 'https://www.instagram.com/goldiesnaturalbeauty/' },
    { name: 'pinterest', url: 'https://www.pinterest.com/goldiesnatural/' },
  ];
  const Button = ({ item }) => {
    return (
      <SocialMediaIconsReact
        borderColor="rgba(0,0,0,0)"
        roundness={50}
        icon={item.name}
        iconColor={theme.palette.background.default}
        backgroundColor={theme.palette.primary.light}
        url={item.url}
        size="48"
      />
    );
  };
  return (
    <S.SocialItems>
      {items.map((item) => {
        return <Button item={item} key={item.name} />;
      })}
    </S.SocialItems>
  );
};

export default SocialBlock;
