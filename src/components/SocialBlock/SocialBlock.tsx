import React, { FC, ReactNode } from 'react';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';
import * as U from '~utils';
import * as S from './SocialBlock.styled';

export const SocialBlock = () => {
  const items = [{ id: 'email', button: EmailShareButton, icon: EmailIcon, props: {} }];
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const socialItems = items.map((item) => {
    const Button = item.button;
    const Icon = item.icon;
    return (
      <S.Item key={item.id}>
        <Button url={url} />
        <Icon />
      </S.Item>
    );
  });

  return url && <S.SocialItems>{socialItems}</S.SocialItems>;
};

export default SocialBlock;
