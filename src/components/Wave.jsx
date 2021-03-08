import React from 'react'
import styled, { themeGet } from '~style'

const WaveStyled = styled('div')`
  // base width must be a factor
  // of 300.
  max-width: 1252px; // can't use typical maxWidth b/c of paddings. See above.
  margin: ${themeGet('space.unit.margin', '13px')} auto;
  position: relative;
  height: 15px;

  @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
    height: 24px;
  }
  background: url('/svg/wave-blue.svg') repeat-x 0%;
  background-size: contain;
  animation: 30s wave linear infinite;

  &::before {
    content: '';
    // background:linear-gradient(90deg, rgba(white,0) 25%, rgba(white,1) 75%);
    height: 100%;
    width: 100%;
    @include absolute(0, 0);
  }
`
const Wave = () => (
  <div className="wave-form">
    <WaveStyled />
  </div>
)

export default Wave
