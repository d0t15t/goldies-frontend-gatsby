import React from 'react';
import styled from 'styled-components';
import Link from '~components/Link/Link';

export const DefaultButton = styled.button``;

export const NoStyleButton = styled.button`
  ${(props) => {
    let { theme, themeStyle } = props;
    themeStyle ??= 'secondary';
    return `
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;
    color: ${theme.colors[themeStyle]};
  `;
  }}
`;

const basicButtonStyle = ({ theme, themeStyle }) => {
  return `
      background: transparent;
      cursor: pointer;
      outline: none;
      border: 1px solid ${theme.colors[themeStyle]};
      color: ${theme.colors[themeStyle]};
      display: inline-flex;
      align-self: center;
      padding: ${theme.margins[2]};
      
      svg {
        height: ${theme.iconSizes[1]};
        width: ${theme.iconSizes[1]};
      }
    `;
};

export const BasicButton = styled.button`
  ${(props) => {
    let { theme, themeStyle } = props;
    themeStyle ??= 'secondary';
    return basicButtonStyle({ theme, themeStyle });
  }}
`;

// export const LinkButton = styled(Link)`
//   background: red;
//   ${(props) => {
//     let { theme, themeStyle } = props;
//     themeStyle ??= 'secondary';
//     return 'background: red;';
//     // return basicButtonStyle({ theme, themeStyle });
//   }}
// `;

// export const IconButton = styled(BasicButton)`
//   background: yellow;
// `;
