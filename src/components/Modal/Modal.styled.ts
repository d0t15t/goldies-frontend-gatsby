import styled from 'styled-components';
import { Box, Modal as MuiModal } from '@mui/material';

export const Modal = styled(MuiModal)`
  padding: ${({ theme }) => theme.spacing(5)}px;
`;

export const Inner = styled.div`
  max-width: 1200px;
  max-width: 75%;
  /* max-height: 75vh; */
  margin: auto;
  padding: ${({ theme }) => theme.spacing(5)}px;
  background-color: ${({ theme }) => theme.palette.info.light};
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
