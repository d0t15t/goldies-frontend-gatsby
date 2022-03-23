import React, { useState, useEffect, useRef } from 'react';
import { useEventListener } from 'usehooks-ts';
import cls from 'classnames';
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
  const [active, setActive] = useState(true);
  const ref = useRef();

  useEffect(() => {
    // cycle
    const timer = setTimeout(() => {
      const cur = index + 1 < hands[0].length ? index + 1 : 0;
      setIndex(cur);
    }, 150);
    return () => clearTimeout(timer);
  }, [index]);

  const pointer = (activeSet) => {
    switch (activeSet) {
      default:
        // eslint-disable-next-line react/no-array-index-key
        return hands.map((el, i) => <span key={`${i}-emoji`}>{el[index]}</span>);
    }
  };

  const onScroll = (event: Event) => {
    const hide = setTimeout(() => {
      setActive(false);
    }, 150);

    return () => {
      clearTimeout(hide);
    };
  };

  useEventListener('scroll', onScroll);

  return (
    <S.Pointer ref={ref} className={cls({ hidden: !active })}>
      {pointer(set)}
      <span className="shadow" />
    </S.Pointer>
  );
};

export default EmojiPointer;
