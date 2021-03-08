import React, { useEffect, useState, useRef } from 'react'
import { Box, Flex, Text } from '@base'
import { Button } from '@components/Button'
import ChevronRight from '@components/icons/ChevronRight'
import { v4 as uuidv4 } from 'uuid'
import { theme } from '@style'

const Dropdown = ({
  value,
  options,
  placeholder = 'Select',
  onChange,
  children,
}) => {
  const node = useRef()

  const [open, setOpen] = useState(false)

  const handleClickOutside = e => {
    console.log('clicking anywhere')
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setOpen(false)
  }

  const handleChange = selectedValue => {
    onChange(selectedValue)
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <Box ref={node} className="dropdown">
      <Button className="dropdown-toggler" onClick={e => setOpen(!open)}>
        <Flex>
          <Text as="small" mr={[2]}>
            {value || placeholder}
          </Text>
          <Box
            style={{ transform: open ? 'rotate(90deg)' : 'rotate(0)' }}
            css={`
              position: relative;
              transform: inherit;
              transition: transform 100ms ease-in;
              .svg-wrapper {
                position: relative;
                top: 50%;
                transform: translateY(-50%);
              }
            `}
          >
            <ChevronRight width={[`${theme.space.unit.base}`]} />
          </Box>
        </Flex>
      </Button>
      {open && (
        <Box className="dropdown-menu">
          {/* {options.map(opt => (
            <Box
              key={uuidv4()}
              as="li"
              className="dropdown-menu-item"
              onClick={e => handleChange(opt)}
            >
              {opt}
            </Box>
          ))} */}
          {children}
        </Box>
      )}
    </Box>
  )
}

export default Dropdown
