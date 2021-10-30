import React, { useState, useEffect } from 'react';

const hands = [
  ['👇', '👇🏻', '👇🏼', '👇🏾', '👇🏿'],
  ['👇🏻', '👇🏼', '👇🏾', '👇🏿', '👇'],
  ['👇🏼', '👇🏾', '👇🏿', '👇', '👇🏻'],
];

const hand1 = [['👇', '👇🏻', '👇🏼', '👇🏾', '👇🏿']];

const hand2 = [['👇🏻', '👇🏼', '👇🏾', '👇🏿', '👇']];

const EmojiPointer = (set) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const cur = index + 1 < hands[0].length ? index + 1 : 0;
      setIndex(cur);
    }, 150);
    return () => clearTimeout(timer);
  });

  const pointer = (activeSet) => {
    switch (activeSet) {
      case 1:
        return hand1[index];

      case 2:
        return hand2[index];

      default:
        return hands.map((el) => el[index]);
    }
  };
  return <>{pointer(set)}</>;
};

export default EmojiPointer;
