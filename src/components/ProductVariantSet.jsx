import React, { useState } from 'react'
import { arrayOf, func, shape, string } from 'prop-types'
import uuid from 'react-uuid'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Emoji from '~components/Emoji'
import IncrementNumberButtons from './IncrementNumberButton'
import { Box, Flex, Text } from '~components/base'
import AddToCart from '~components/AddToCart'
import { themeGet } from '~style'

const ProductVariantSet = ({
  activeId,
  activeItem,
  productName,
  setActiveId,
  setSlideIndex,
  variants,
  handleChange,
}) => {
  // const activeItem = variants[getActiveIndex(activeId)]

  const [count, setCount] = useState(1)

  const getVariantTitle = () => {
    return activeItem.title === 'Default Title'
      ? `${activeItem.weight} ${activeItem.weightUnit.toLowerCase()}`
      : activeItem.title
  }

  const getOptions = () => (
    <FormControl
      variant="outlined"
      className="product-variant--selector"
      // style={{ maxWidth: '50%' }}
    >
      <InputLabel id="variant-options">Options</InputLabel>
      <Select
        labelId="variant-options"
        id="demo-simple-select-outlined"
        value={activeItem?.variantId || 'error'}
        onChange={e => handleChange(e.target.value)}
        label="Options"
      >
        {variants.map(item => {
          return (
            <MenuItem value={item.variantId} key={uuid()}>
              {item.title} ~ ${item.price}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
  const hasVariants = variants.length > 1

  return (
    <>
      {/* Options selector */}
      {hasVariants ? <Box mb={[2]}>{getOptions()}</Box> : '~'}
      <Flex
        mb={[1]}
        css={`
          > * {
            line-height: 40px;
            width: 50%;
            display: ${hasVariants ? 'none' : 'inherit'};
          }
        `}
      >
        <Text fontSize={[3]} mr={[2]} textAlign={['right']}>
          {getVariantTitle()}
        </Text>
        <Text fontSize={[4]} ml={[2]} textAlign={['left']}>
          ${activeItem.price}
        </Text>
      </Flex>
      <Flex mb={[2, 3]} justifyContent={['center', 'left']} pt={[0, 1]}>
        <IncrementNumberButtons
          minimum={1}
          quantity={count}
          update={{
            increment: () => setCount(count + 1),
            decrement: () => setCount(count - 1),
          }}
        />
        <Box
          pl={[3]}
          css={`
            display: none;
            @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
              display: inherit;
            }
          `}
        >
          <Emoji size={4} />
        </Box>
      </Flex>
      <Box
        pt={[1, 0]}
        css={`
          * {
            font-size: 20px;
          }
        `}
      >
        <AddToCart
          color="primary"
          productName={`${productName} - ${activeItem.title}`}
          quantity={count}
          variantId={activeItem.variantId}
        />
      </Box>
      <Box
        css={`
          @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
            display: none;
          }
        `}
      >
        <Emoji size={5} />
      </Box>
    </>
  )
}

// const variantProps = shape({
//   title: string.isRequired,
//   price: string.isRequired,
// })

// ProductVariantSet.propTypes = {
//   activeItem: variantProps.isRequired,
//   productName: string.isRequired,
//   setActiveId: func.isRequired,
//   variants: arrayOf(variantProps).isRequired,
// }

export default ProductVariantSet
