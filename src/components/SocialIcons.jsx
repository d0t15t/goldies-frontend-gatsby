import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  EmailShareButton,
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
} from 'react-share'
import uuid from 'react-uuid'
import {
  faFacebook,
  faInstagram,
  faShopify,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Box, Flex } from '~components/base'
import { themeGet } from '~style'

const SocialIcons = ({ email, fb, wa, url }) => {
  return (
    <Box m={['0 auto']} textAlign="center" pt={[2]}>
      <Flex
        className="social-icons"
        p={[3]}
        css={`
          justify-content: center;
          button + button {
            margin-left: ${themeGet('space.unit.margin', '10px')};
          }
        `}
      >
        <EmailShareButton {...email} url={url}>
          <FontAwesomeIcon icon={faEnvelope} size="3x" color="green" />
        </EmailShareButton>
        <FacebookShareButton {...fb} url={url}>
          <FontAwesomeIcon icon={faFacebook} size="3x" color="green" />
        </FacebookShareButton>{' '}
        <WhatsappShareButton {...wa} url={url}>
          <FontAwesomeIcon icon={faWhatsapp} size="3x" color="green" />
        </WhatsappShareButton>
      </Flex>
    </Box>
  )
}

export default SocialIcons
