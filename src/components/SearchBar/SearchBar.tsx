import React, { useState } from 'react';
import cls from 'classnames';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { usePopper } from 'react-popper';
import { useFlexSearch } from 'react-use-flexsearch';
import { useQueryParam, NumberParam, StringParam } from 'use-query-params';
import Downshift from 'downshift';
import { IconContext } from 'react-icons';
import { BiSearchAlt } from 'react-icons/bi';
import { IconButton, Modal } from '~components';
import * as S from './SearchBar.styled';

export const SearchBar = () => {
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

  const handleSelect = (selection) => {
    // console.log('🚀 ~ file: SearchBar.tsx ~ line 26 ~ handleSelect ~ selection', selection);
    return selection?.path ? navigate(selection.path) : null;
  };
  const handleFormSubmit = (e) => e.preventDefault();

  const [paramQ, setParamQ] = useQueryParam('q', StringParam);

  const iconStyles = { color: 'white', className: 'search-icon' };

  // Popper
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <S.Container>
      <form action="/" method="get" autoComplete="off" onSubmit={handleFormSubmit}>
        <IconButton handleClick={handleFormSubmit} iconName="search" iconStyles={iconStyles} />
        <Downshift
          onChange={(selection) => handleSelect(selection)}
          itemToString={(item) => (item ? item.title : query)}
          onInputValueChange={(inputValue: string, stateAndHelpers: object) => {
            setQuery(inputValue);
          }}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            <div>
              <S.SearchBarLabel className="visually-hidden" {...getLabelProps()}>
                Search products:
              </S.SearchBarLabel>
              <input
                {...getInputProps({ placeholder: 'Enter a position' })}
                ref={setReferenceElement}
              />

              {isOpen ? (
                <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                  <ul {...getMenuProps()}>
                    {searchResults
                      // .filter((item) => !inputValue || item.title.includes(inputValue))
                      .map((item, index) => (
                        <li
                          {...getItemProps({
                            key: item.id,
                            index,
                            item,
                            style: {
                              backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                              fontWeight: selectedItem === item ? 'bold' : 'normal',
                              color: 'black',
                            },
                          })}
                        >
                          {item.title}
                        </li>
                      ))}
                  </ul>
                  <div ref={setArrowElement} style={styles.arrow} />
                </div>
              ) : null}
            </div>
          )}
        </Downshift>
      </form>
    </S.Container>
  );
};

export default SearchBar;
