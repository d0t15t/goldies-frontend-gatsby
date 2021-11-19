import React from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';
import Link from '~components/Link/Link';

export const DefaultButton = styled(MuiButton)``;

export const NoStyleButton = styled(MuiButton)`
  ${(props) => {
    let { theme, themeStyle } = props;
    themeStyle ??= 'secondary';
    return `
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;
    color: ${theme.palette[themeStyle]};
  `;
  }}
`;

const basicButtonStyle = ({ theme, themeStyle }) => {
  return `
      background: transparent;
      cursor: pointer;
      outline: none;

      display: inline-flex;
      align-self: center;
      
    `;
};

export const BasicButton = styled(MuiButton)`
  ${(props) => {
    let { theme, themeStyle } = props;
    themeStyle ??= 'secondary';
    return basicButtonStyle({ theme, themeStyle });
  }}
`;

export const LinkButton = styled(Link)`
  background: red;
  ${(props) => {
    let { theme, themeStyle } = props;
    themeStyle ??= 'secondary';
    return 'background: red;';
    // return basicButtonStyle({ theme, themeStyle });
  }}
`;

// export const IconButton = styled(BasicButton)`
//   background: yellow;
// `;
