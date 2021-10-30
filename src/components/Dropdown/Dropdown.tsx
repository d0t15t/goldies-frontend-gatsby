import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
import { Button, Portal } from '~components';
import * as S from './Dropdown.styled';

export const Dropdown = ({
  classNames,
  getItemProps,
  getMenuProps,
  handleItemClick,
  highlightedIndex,
  isOpen,
  items,
  styles,
  target,
}) => {
  return (
    <div {...getMenuProps()} className={cls(['dropdown-wrapper', classNames])}>
      {/* <Portal target={target} status={isOpen}> */}

      <S.DropDownMenuWrapper
        className={cls(['search-bar__results', 'portal'])}
        theme={{ ...styles }}
      >
        {isOpen && (
          <S.DropDownMenu>
            {Array.isArray(items) &&
              items.map((item, index) => {
                return (
                  <S.DropDownMenuItem
                    theme={{
                      isHighlighted: highlightedIndex === index,
                      // padding: '8px', // To do: add theme
                    }}
                    key={item.id}
                    {...getItemProps({ item, index })}
                  >
                    <Button>{item.title}</Button>
                  </S.DropDownMenuItem>
                );
              })}
          </S.DropDownMenu>
        )}
      </S.DropDownMenuWrapper>

      {/* </Portal> */}
    </div>
  );
};

export default Dropdown;
