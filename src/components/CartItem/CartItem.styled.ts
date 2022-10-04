import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const ListItem = styled.li`
  ${({theme}) => {
    return`
      padding: ${theme.spacing(3)};
      padding-bottom: 0;
      padding-top: ${theme.spacing(4)}; 
      display: grid;
      //grid-template-columns: 33% 33% 33%; 
      grid-template-columns: 100px auto 96px 24px;
      gap: ${theme.spacing(1)};

      > * {
        overflow: hidden;
        height: auto;
        position: relative;
      }

      & + li {
        margin-bottom: ${theme.spacing(3)};
      }

      .cart-item--remove {
        grid-area: 1 / 4 / 1 / 5;
        text-align: right;
        
        button {
          color: ${theme.palette.grey[600]};
          padding: 0;
          min-width: auto;
        }

        .cart-item--remove-label {
          visibility: hidden;
          position: relative;
          width: 0;
          height: 0;
          overflow: hidden;
        } 
      }
  

      .cart-item--title {
        grid-area: 1 / 2 / 2 / 4; 
        font-size: 0.9em;
        padding-left: ${theme.spacing(1)};
      }

      .cart-item--image {
        grid-area: 1 / 1 / 3 / 2; 
        text-align: right;
      }

      .cart-item--subtitle {
        grid-area: 2 / 2 / 3 / 4;
        height: 36.5px; 
        padding-left: ${theme.spacing(1)};
      }

      .cart-item--quantity {
        grid-area: 3 / 3 / 4 / 5;
        text-align: right;
        height: 36.5px; 
        
        .label {
          visibility: hidden;
          line-height: 0;
          position: absolute;
          height: 0;
          width: 0;
        }
      }
      
      
 
      .cart-item--price {
        grid-area: 2 / 3 / 3 / 5;
      }

      .cart-item--total {
        grid-area: 4 / 3 / 5 / 5;
        text-align: right;

        .cart-item--total-arrow {
          color: ${theme.palette.grey[500]};
          
          padding-right: ${theme.spacing(2)};
        } 

    `;
  }};
`;

export const ListItemControlsWrapper = styled(Box)`
  ${({ theme }) => {
    return `
      text-transform: none;
      
      .cart-item--controlls--toggle-on {
        height: 0;
        width: 0;
        visibility: hidden;
        opacity: 0;
        overflow: hidden
        position: absolute;
        transition: all 2ms ease-in;


        &.cart-item--controlls--toggle-on-on {
          visibility: visible;
          height: inherit;
          width: inherit;
          position: inherit;
          opacity: 1;
                    
        }
      }
    `;
  }}
`;

export const ListItemControls = styled(Box)`
  ${({theme}) => {
    const grey = theme.palette.grey[400]; 
    return `
      border: 1px solid transparent;
      transition: all .5s ease-in-out;
      line-height: 0;
      padding: ${theme.spacing(1)};
      color: transparent;
      overflow: hidden;
      visibility: hidden;
      opacity: 0;
      height: 0;
      transition: all .5s ease-in-out;
      border-radius: 5px;
      margin-top: ${theme.spacing(1)};
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacing(1)};
      
      &.cart-item--controls__visibile {
        border: 1px solid ${grey};
        opacity: 1;
        visibility: unset;
        height: auto;
        color: inherit;
      }

      .cart-item--controls-link {
        p{
          color: ${grey};
          display: inline;
        }
       
        color: ${grey};

        &:hover {
          color: ${theme.palette.primary.light} !important;
          text-decoration: underline;
        }
      }

      .cart-item--controls-inner {
        display: flex;
        gap: ${theme.spacing(1)};

        .counter-wrapper {
          display: flex;
          flex-direction: column;
        }
        
      }
    `;
  }}
`;

export const ListItemCol = styled.div`
  ${({ theme }) => {
    return `
    `;
  }}
`;

export const Image = styled.img`
  //max-width: 100px;
  max-width: 300px;
  width: 100%;
`;
