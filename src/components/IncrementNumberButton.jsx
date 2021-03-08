import React, { useState } from 'react'
import { func, number, shape } from 'prop-types'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const IncrementNumberButtons = ({ minimum, quantity, update }) => {
  // const [count, setCount] = useState(quantity)
  // const handleClick = value => {
  //   const newQuantity = count + value
  //   setCount(newQuantity)
  //   // update(item.variant.id, count)
  // }
  const displayCounter = quantity > (minimum || 0)
  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      {/* <Button onClick={() => handleClick(1)}>+</Button> */}
      <Button onClick={update.increment}>+</Button>
      <Button disabled>{quantity}</Button>
      {displayCounter && <Button onClick={update.decrement}>-</Button>}
      {/* {displayCounter && <Button onClick={() => handleClick(-1)}>-</Button>} */}
    </ButtonGroup>
  )
}

// IncrementNumberButtons.propTypes = {
//   // item: shape({}).isRequired,
//   quantity: number.isRequired,
//   updateQuantity: func.isRequired,
// }

export default IncrementNumberButtons
