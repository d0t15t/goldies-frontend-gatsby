import React, { useContext, useRef, useState } from 'react';
import cls from 'classnames';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
import { useCombobox } from 'downshift';
import { useDimensions } from 'react-hook-dimensions';
import useEventListener from '@use-it/event-listener';
import { IconContext } from 'react-icons';
import { BiSearchAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { Context, useDispatch } from '~context';
import { Dropdown } from '~components';
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

  /**
   * Searchbar combobox
   * @param props
   * @returns
   */
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
        <label className="visually-hidden" {...getLabelProps()}>
          Search products:
        </label>
        <form
          {...getComboboxProps()}
          className={cls(['form', 'form__search-bar'])}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={cls(['controls', 'search-bar__controls'])} ref={dropdownTriggerRef}>
            <button
              className={cls(['search-bar__search-button', 'no-style'])}
              type="button"
              {...getToggleButtonProps()}
              aria-label="toggle dropdown"
            >
              <BiSearchAlt />
            </button>
            <input {...getInputProps({ ref: searchInputRef })} onFocus={(e) => e.target.select()} />
            {currentSearchInput ? (
              <button
                className={cls(['search-bar__clear-button', 'no-style'])}
                type="button"
                onClick={handleClear}
                aria-label="clear selection"
              >
                <CgClose />
              </button>
            ) : null}
          </div>
          <Dropdown {...dropdownProps} />
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
