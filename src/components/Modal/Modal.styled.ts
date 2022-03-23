import styled from 'styled-components';
import { Box, Modal as MuiModal } from '@mui/material';

export const Modal = styled(MuiModal)`
  padding: ${({ theme }) => theme.spacing(5)}px;
`;

export const Inner = styled(Box)`
  ${({ theme }) => {
    return `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400;
      bgcolor: ${theme.palette.background.paper};
      border: 2px solid #000;
      box-shadow: 24;
      background-color: ${theme.palette.background.paper};
      padding: ${theme.spacing(2)};
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

// export const Inner = styled.div`
//   padding: 2em;
//   max-width: 100%;
//   width: 100%;

//   .swiper {
//     margin: auto;
//     width: 100%;
//   }

//   ${(props) => {
//     const { theme, modalStyle } = props;
//     return `
//       a {
//         color: ${theme.palette.secondary};
//       }
//     `;
//   }}
// `;
