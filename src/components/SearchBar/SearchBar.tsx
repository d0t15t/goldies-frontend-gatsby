import React, { useState } from 'react';
import cls from 'classnames';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { usePopper } from 'react-popper';
import { useFlexSearch } from 'react-use-flexsearch';
import { useQueryParam, StringParam } from 'use-query-params';
import Downshift from 'downshift';
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
  console.log('🚀 ~ file: SearchBar.tsx ~ line 26 ~ SearchBar ~ query', query);
  const searchResults = useFlexSearch(query, index, store);

  const handleSelect = (selection) => (selection?.path ? navigate(selection.path) : null);

  const handleFormSubmit = (e) => e.preventDefault();

  const handleInputClick = (e) => e.target.select();

  const handleClear = (e) => setQuery('');

  const [paramQ, setParamQ] = useQueryParam('q', StringParam);

  const iconStyles = { color: 'white', className: 'search-icon' };

  // Popper props
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <S.Container>
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
        }) => {
          console.log('🚀 ~ file: SearchBar.tsx ~ line 66 ~ SearchBar ~ inputValue', inputValue);
          return (
            <form action="/" method="get" autoComplete="off" onSubmit={handleFormSubmit}>
              <IconButton
                handleClick={handleFormSubmit}
                iconName="search"
                iconStyles={iconStyles}
              />
              <S.SearchBarLabel className="visually-hidden" {...getLabelProps()}>
                Search products:
              </S.SearchBarLabel>
              <input
                {...getInputProps({ placeholder: 'Search for a product...' })}
                // inputValue={query}
                ref={setReferenceElement}
                onClick={handleInputClick}
              />
              <IconButton handleClick={handleClear} iconName="clear" iconStyles={iconStyles} />

              {isOpen ? (
                // Popper.
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
            </form>
          );
        }}
      </Downshift>
    </S.Container>
  );
};

export default SearchBar;
