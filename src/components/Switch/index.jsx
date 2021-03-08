import React from 'react'
import { ThemeContext } from '@config/ThemeContext'
import styled from '@style'
import Radio from '@components/Radio'

const switchGroup = 'switch'
const Switch = ({ themeName }) => {
  // console.log(themeName === 'dark')
  return (
    <Styled onClick={() => console.log(themeName)}>
      {/* <Styled onClick={() => this.props.onChange(!this.props.checked)}> */}
      <input
        id="default-switch"
        defaultChecked={themeName === 'default'}
        name={switchGroup}
        value="default"
        type="radio"

        // onChange={e => handleChange(e, 'dork', context.changeTheme)}
      />
      <input
        id="default-switch"
        defaultChecked={themeName === 'dark'}
        name={switchGroup}
        value="dark"
        type="radio"
        // disabled
        // onChange={e => handleChange(e, 'dark', context.changeTheme)}
      />
      test
    </Styled>
  )
}

export default Switch

const Styled = styled('div')``
