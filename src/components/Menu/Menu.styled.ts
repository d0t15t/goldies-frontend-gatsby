import styled from 'styled-components';

export const Menu = styled.ul`
  ${({ orientation }) => {
    return `
      display: ${orientation === 'vertical' ? 'flex' : 'inherit'};
    `;
  }}}
`;

export const MenuItem = styled.li`
  padding: ${({ theme }) => theme.margins[1]};
`;
