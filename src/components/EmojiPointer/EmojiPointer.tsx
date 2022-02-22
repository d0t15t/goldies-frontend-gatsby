import React, { useState, useEffect } from 'react';
import * as S from './EmojiPointer.styled';

const hands = [
  ['👇', '👇🏻', '👇🏼', '👇🏾', '👇🏿'],
  // ['👇🏻', '👇🏼', '👇🏾', '👇🏿', '👇'],
  // ['👇🏼', '👇🏾', '👇🏿', '👇', '👇🏻'],
];

const hand1 = [['👇', '👇🏻', '👇🏼', '👇🏾', '👇🏿']];

const hand2 = [['👇🏻', '👇🏼', '👇🏾', '👇🏿', '👇']];

export const EmojiPointer = (set) => {
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
      // case 1:
      //   return <span>{hand1[index]}</span>;

      // case 2:
      //   return <span>{hand2[index]}</span>;

      default:
        return hands.map((el) => <span>{el[index]}</span>);
    }
  };
  return (
    <S.Pointer>
      {pointer(set)}
      <span className="shadow" />
    </S.Pointer>
  );
};

export default EmojiPointer;
