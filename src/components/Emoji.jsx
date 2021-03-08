import React from 'react'
import { number, string, oneOfType } from 'prop-types'
import { Text } from '~components/base'

const emojiSet = [
  '😄',
  '😊',
  '😇',
  '🙂',
  '😉',
  '😌',
  '✌️',
  '😸',
  '🍀',
  '🌞',
  '🌍',
  '🌈',
  '🌏',
  '🐬',
  '🎷',
  '🏆',
  '❤️',
  '🧡',
  '💛',
  '💚',
  '💙',
  '💜',
  '🖤',
  '🤍',
  '🤎',
]

const Emoji = ({ size }) => {
  const emoji = emojiSet[Math.floor(Math.random() * emojiSet.length)]
  return (
    (size && (
      <Text as="span" fontSize={size}>
        {emoji}
      </Text>
    )) ||
    emoji
  )
}

export default Emoji

Emoji.propTypes = {
  size: oneOfType([number, string]),
}

Emoji.defaultProps = {
  size: null,
}
