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
    cursor: pointer;
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
    return basicButtonStyle({ theme, themeStyle });
  }}
`;

// export const IconButton = styled(BasicButton)`
//   background: yellow;
// `;
