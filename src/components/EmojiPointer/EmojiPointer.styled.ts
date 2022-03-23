import styled from 'styled-components';
import { Box } from '@mui/material';

export const Pointer = styled(Box)`
  ${({ theme }) => {
    return `    
      width: ${theme.spacing(3)};
      height: 0;
      position: relative;
      transition: all 0.2s ease-in;
      opacity: 1;

      &.hidden {
        opacity: 0;
      }
      
      > * {
        position: relative;
        display: inline-block;
        z-index: 999;
        opacity: 0.7;
        animation: jump 1s ease 0s infinite alternate;
      }
    
      .shadow {
        position: relative;
        opacity: .1;
        bottom: 20px;
        width: 20px;
        height: 5px;
        border-radius: 50%;
        background-color: black;
        display: inline-block;
        margin: 5px;
        animation: shrink 1s ease .0s infinite alternate;
      }
    
      @keyframes jump {
        0% {transform: scaleY(.8);}
        100% {
          transform: translateY(-70px);
        }   
      }
      
      @keyframes shrink {
        100% {
          transform: scaleX(.5);
          opacity: .01;
        }    
      }
    
    `;
  }}
`;
