import React, { useContext, useRef, useState } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import cls from 'classnames';
import { useFlexSearch } from 'react-use-flexsearch';
import { useCombobox } from 'downshift';
import { useDimensions } from 'react-hook-dimensions';
import useEventListener from '@use-it/event-listener';
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputBase,
  InputLabel,
  OutlinedInput,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import { Close, Search } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';

import { Context, useDispatch } from '~context';
import { Dropdown, Link } from '~components';
import * as S from './SearchBar.styled';

interface InputItemProps {
  id: string;
  path: string;
  title: string;
}

export const SearchBar = () => {
  const [{ currentSearchInput }, dispatch] = useContext(Context);

  const [dropdownTriggerRef, dropdownTriggerStyles, dropdownTriggerCalculate] = useDimensions({
    dependencies: [],
  });

  useEventListener('resize', (e) => dropdownTriggerCalculate());

  const searchInputRef = useRef();

  const ComboBox = (props) => {
    const {
      queryData: { index, store },
    } = useStaticQuery(graphql`
      query {
        queryData: localSearchProducts {
          index
          store
        }
      }
    `);

    const [query, setQuery] = useState('');

    const searchResults = useFlexSearch(query, index, store);

    const defaultItems = Object.values(store);

    const [inputItems, setInputItems] = useState(defaultItems);

    const itemToString = (item: InputItemProps) => (item ? item.title : '');

    const handleSelect = (selectedItem: InputItemProps) => {
      useDispatch('currentSearchInput', selectedItem, dispatch);
      return selectedItem?.path ? navigate(selectedItem.path) : null;
    };

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
      selectedItem: currentSearchInput,
      onInputValueChange: ({ inputValue }) => {
        setQuery(inputValue);
        setInputItems(searchResults);
      },
      itemToString,
      onSelectedItemChange: (changes: object) =>
        changes?.selectedItem ? handleSelect(changes?.selectedItem) : null,
    });

    const handleClear = (e) => {
      useDispatch('currentSearchInput', '', dispatch);
      selectItem(null);
      setQuery('');
      setInputItems(defaultItems);
      return searchInputRef?.current ? searchInputRef.current.focus() : null;
    };

    const dropdownProps = {
      getItemProps,
      getMenuProps,
      highlightedIndex,
      isOpen,
      items: inputItems,
      // items: inputItems.filter((item) => item.id !== currentSearchInput.id),
      styles: dropdownTriggerStyles,
    };

    return (
      <>
        <FormLabel {...getLabelProps()} sx={visuallyHidden}>
          Search products:
        </FormLabel>
        <form
          {...getComboboxProps()}
          className={cls(['form', 'form__search-bar'])}
          onSubmit={(e) => e.preventDefault()}
        >
          <div ref={dropdownTriggerRef}>
            <div className="search-icon-wrapper">
              <Search />
            </div>
            <FormControl>
              <S.StyledInputLabel htmlFor="search-input">Search...</S.StyledInputLabel>
              <OutlinedInput
                variant="outlined"
                {...getInputProps()}
                id="search-input"
                inputRef={searchInputRef}
                label="Search..."
                onFocus={(e) => {
                  e.target.select();
                }}
              />
            </FormControl>
            {query.length ? (
              <IconButton onClick={handleClear} aria-label="clear selection">
                <Close />
              </IconButton>
            ) : null}
          </div>
          <Dropdown {...dropdownProps}>
            {Array.isArray(inputItems) && (
              <S.List>
                {inputItems.map((item, index) => {
                  return (
                    <ListItem
                      {...getItemProps({ item, index })}
                      key={item.id}
                      className={cls([
                        'search-bar__list-item',
                        { 'search-bar__list-item--highlighted': highlightedIndex === index },
                      ])}
                    >
                      <Link
                        to={item.path}
                        //  onClick={handleSelect}
                      >
                        <ListItemText>{item.title}</ListItemText>
                      </Link>
                    </ListItem>
                  );
                })}
              </S.List>
            )}
          </Dropdown>
        </form>
      </>
    );
  };

  return (
    <S.SearchBar className={cls(['search-bar'])}>
      <ComboBox />
    </S.SearchBar>
  );
};

export default SearchBar;
