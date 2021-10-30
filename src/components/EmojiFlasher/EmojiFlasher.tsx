import React from 'react';

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
];

const EmojiFlasher = ({ size }) => {
  const emoji = emojiSet[Math.floor(Math.random() * emojiSet.length)];
  return emoji;
};

export default EmojiFlasher;
