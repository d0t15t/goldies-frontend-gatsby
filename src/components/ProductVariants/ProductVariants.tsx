import React, { FC, ReactNode } from 'react';
import { useSelect } from 'downshift';
import { useDimensions } from 'react-hook-dimensions';
import useEventListener from '@use-it/event-listener';
import cls from 'classnames';

import { FormControl, Button, FormLabel, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Dropdown } from '~components';
import * as S from './ProductVariants.styled';
import * as SB from '~components/Buttons/Button.styled';

interface VariantProps {
  id: string;
  image: object;
  price: string;
  shopifyId: string;
  sku: string;
  title: string;
}

interface ProductVariantProps {
  variant: VariantProps;
}

interface ProductVariantsProps {
  items: ProductVariantProps[];
  current: VariantProps;
  updateCurrentId: Function;
}

export const ProductVariants: FC<ProductVariantsProps> = ({ items, current, updateCurrentId }) => {
  const handleSelect = ({ selectedItem }) => {
    if (selectedItem?.shopifyId) {
      updateCurrentId(selectedItem?.shopifyId);
    }
  };
  const itemToString = (selectedItem) => (selectedItem?.title ? selectedItem.title : current);
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    itemToString,
    onSelectedItemChange: handleSelect,
    selectedItem: current,
  });

  const [dropdownTriggerRef, dropdownTriggerStyles, dropdownTriggerCalculate] = useDimensions({
    dependencies: [],
  });

  const getCurrentSelectedTitle = (current) => current.id;

  useEventListener('resize', (e) => dropdownTriggerCalculate());

  const dropdownProps = {
    getItemProps,
    getMenuProps,
    handleItemClick: handleSelect,
    highlightedIndex,
    isOpen,
    items,
    styles: dropdownTriggerStyles,
  };

  return (
    <>
      <FormControl>
        <FormLabel {...getLabelProps()}>Choose size:</FormLabel>
        <Button
          variant="contained"
          color="secondary"
          // labelId="product-variant-select-label"
          id="product-variant-select"
          // value={getCurrentSelectedTitle(selectedItem)}
          label="Product size"
          onChange={handleSelect}
          {...getToggleButtonProps()}
          {...getToggleButtonProps({ ref: dropdownTriggerRef })}
        >
          {selectedItem ? itemToString(selectedItem) : null}
          <ExpandMore />
        </Button>
      </FormControl>
      <Dropdown {...dropdownProps}>
        <List {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => {
              return (
                <ListItem
                  key={item.id}
                  // className={index === highlightedIndex ? classes.highlighted : undefined}
                >
                  <ListItemButton
                    style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
                    {...getItemProps({
                      item,
                      index,
                    })}
                  >
                  <Typography variant="span" className={cls('variant-list-item')}>
                    {itemToString(item)}
                  </Typography>
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      </Dropdown>
    </>
  );
  // return (
  //   <>
  //     <S.Container>
  //       <label
  //         className={cls(['proudct-variants-select-label', 'visually-hidden'])}
  //         {...getLabelProps()}
  //         htmlFor="product-variant-selector-button"
  //       >
  //         Choose a product variant:
  //       </label>
  //       <SB.BasicButton
  //         // themeStyle="secondary"
  //         // theme={{ foo: 'bar' }}
  //         className={cls(['product-variant-selector-button'])}
  //         type="button"
  //         {...getToggleButtonProps({ ref: dropdownTriggerRef })}
  //         name="product-variant-selector-button"
  //         id="product-variant-selector-button"
  //         aria-label="toggle selections"
  //       >
  //         {selectedItem.title}
  //         <BsChevronDown />
  //       </SB.BasicButton>
  //     </S.Container>
  //     <Dropdown
  //       {...dropdownProps}
  //       // target="product-variant-dropdown-portal"
  //     />
  //   </>
  // );
};

export default ProductVariants;
