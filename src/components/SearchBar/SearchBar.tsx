import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import cls from 'classnames';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { usePopper } from 'react-popper';
import { Popper, Manager, Reference } from 'react-popper';
import { useFlexSearch } from 'react-use-flexsearch';
import { useQueryParam, StringParam } from 'use-query-params';
import Downshift, { useCombobox } from 'downshift';
import { IconContext } from 'react-icons';
import { BiCart, BiSearchAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { Button, IconButton, Modal } from '~components';
import * as S from './SearchBar.styled';

interface InputItemProps {
  id: string;
  path: string;
  title: string;
}

export const SearchBar = () => {
  // const [paramQ, setParamQ] = useQueryParam('q', StringParam);

  // const [referenceElement, setReferenceElement] = useState(null);
  // const [popperElement, setPopperElement] = useState(null);
  // const [arrowElement, setArrowElement] = useState(null);
  // const { styles, attributes } = usePopper(referenceElement, popperElement, {
  //   modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  // });

  const iconStyles = { color: 'white', className: 'search-icon' };

  const Dropdown = ({ getItemProps, getMenuProps, highlightedIndex, isOpen, items }) => {
    console.log(
      '🚀 ~ file: SearchBar.tsx ~ line 34 ~ Dropdown ~ highlightedIndex',
      highlightedIndex
    );
    return (
      <div
        {...getMenuProps()}
        className={cls(['search-bar__dropdown', 'dropdown'])}
        // ref={setPopperElement}
        // style={styles.popper}
        // {...attributes.popper}
      >
        {isOpen && (
          <S.DropDownMenu>
            {isOpen &&
              Array.isArray(items) &&
              items.map((item, index) => {
                return (
                  <S.DropDownMenuItem
                    style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
                    key={item.id}
                    {...getItemProps({ item, index })}
                  >
                    <Button>{item.title}</Button>
                  </S.DropDownMenuItem>
                );
              })}
          </S.DropDownMenu>
        )}
      </div>
    );
  };

  const ComboBox = (props) => {
    const { queryData } = useStaticQuery(graphql`
      query {
        queryData: localSearchProducts {
          index
          store
        }
      }
    `);

    const { index, store } = queryData;

    const [query, setQuery] = useState('');

    const searchResults = useFlexSearch(query, index, store);

    const searchInput = useRef(null);

    const comboboxStyles = { padding: '20px' };

    const defaultItems = Object.values(store);

    const [inputItems, setInputItems] = useState(defaultItems);
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
      selectItem,
    } = useCombobox({
      items: inputItems,
      onInputValueChange: ({ inputValue }) => {
        setQuery(inputValue);
        setInputItems(searchResults);
      },
      // itemToString: (item: InputItemProps) => (item ? item.title : query),
      itemToString: (item: InputItemProps) => (item ? item.title : ''),
      onSelectedItemChange: (changes: object) =>
        changes?.selectedItem ? handleSelect(changes?.selectedItem) : null,
    });

    const handleSelect = (selectedItem: InputItemProps) =>
      selectedItem?.path ? navigate(selectedItem.path) : null;

    const handleClear = (e) => {
      selectItem(null);
      setQuery('');
      setInputItems(defaultItems);
      return searchInput?.current ? searchInput.current.focus() : null;
    };

    const dropdownProps = {
      getItemProps,
      getMenuProps,
      highlightedIndex,
      isOpen,
      items: inputItems,
    };

    return (
      <>
        <label className="visually-hidden" {...getLabelProps()}>
          Search products:
        </label>
        <form
          style={comboboxStyles}
          {...getComboboxProps()}
          className={cls(['form', 'form__search-bar'])}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={cls(['controls', 'search-bar__controls'])}>
            <button
              className={cls(['search-bar__search-button'])}
              type="button"
              {...getToggleButtonProps()}
              aria-label="toggle dropdown"
            >
              <IconContext.Provider value={iconStyles ?? {}}>
                <BiSearchAlt />
              </IconContext.Provider>
            </button>
            <input {...getInputProps({ ref: searchInput })} onFocus={(e) => e.target.select()} />
            {query ? (
              <button
                className={cls(['search-bar__clear-button'])}
                type="button"
                onClick={handleClear}
                aria-label="clear selection"
              >
                <IconContext.Provider value={iconStyles ?? {}}>
                  <CgClose />
                </IconContext.Provider>
              </button>
            ) : null}
          </div>
          <S.ComboBox className={cls(['combobox', 'search-bar__combobox'])}>
            <Dropdown {...dropdownProps} />
          </S.ComboBox>
        </form>
      </>
    );
  };

  return (
    <S.Container className={cls(['search-bar'])}>
      <ComboBox />
    </S.Container>
  );
};

export default SearchBar;

// <Downshift
// onChange={(selection) => handleSelect(selection)}
// itemToString={(item) => (item ? item.title : query)}
// onInputValueChange={(inputValue: string, stateAndHelpers: object) => {
//   setQuery(inputValue);
// }}
// >
// {({
//   getInputProps,
//   getItemProps,
//   getLabelProps,
//   getMenuProps,
//   isOpen,
//   inputValue,
//   highlightedIndex,
//   selectedItem,
// }) => {
//   console.log('🚀 ~ file: SearchBar.tsx ~ line 66 ~ SearchBar ~ inputValue', inputValue);
//   return (
//     <form action="/" method="get" autoComplete="off" onSubmit={handleFormSubmit}>
//       <IconButton
//         handleClick={handleFormSubmit}
//         iconName="search"
//         iconStyles={iconStyles}
//       />
//       <S.SearchBarLabel className="visually-hidden" {...getLabelProps()}>
//         Search products:
//       </S.SearchBarLabel>
//       <input
//         {...getInputProps({ placeholder: 'Search for a product...' })}
//         // inputValue={query}
//         ref={setReferenceElement}
//         onClick={handleInputClick}
//       />

//       {isOpen ? (
//         // Popper.
//         <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
//           <ul {...getMenuProps()}>
//             {searchResults
//               // .filter((item) => !inputValue || item.title.includes(inputValue))
//               .map((item, index) => (
//                 <li
//                   {...getItemProps({
//                     key: item.id,
//                     index,
//                     item,
//                     style: {
//                       backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
//                       fontWeight: selectedItem === item ? 'bold' : 'normal',
//                       color: 'black',
//                     },
//                   })}
//                 >
//                   {item.title}
//                 </li>
//               ))}
//           </ul>
//           <div ref={setArrowElement} style={styles.arrow} />
//         </div>
//       ) : null}
//     </form>
//   );
// }}
// </Downshift>
// </S.Container>
// );
// };
