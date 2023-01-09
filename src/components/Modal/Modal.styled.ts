import styled from 'styled-components';
import { Box, Modal as MuiModal } from '@mui/material';

export const Modal = styled(MuiModal)`
  padding: ${({ theme }) => theme.spacing(5)};
`;

export const Inner = styled(Box)`
  ${({ theme }) => {
    return `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      border: 2px solid #aaa;
      box-shadow: 24;
      background-color: ${theme.palette.background.paper};
      padding: ${theme.spacing(2)};

      ${theme.breakpoints.up('sm')} {
        width: 400px;
      }
    `;
  }}
`;

export const CloseButtonWrapper = styled.div`
  ${(props) => {
    const { theme, position } = props;

    return `
      position: absolute;
      left: ${position?.left + 'px' ?? '0'};
      top: ${position?.top + 'px' ?? '0'};
      width: 25px;
      height: 25px;
    
      button {
        width: 100%;
      }
  `;
  }}
`;
