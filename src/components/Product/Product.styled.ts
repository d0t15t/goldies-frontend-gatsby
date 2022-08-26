import styled from 'styled-components';
import { Box } from '@mui/material';

const classNameBase = 'product-page';
const cnb = classNameBase;
const formNameBase = `${cnb}--add-to-cart-form`;
const fnb = formNameBase;

const named = (tag) => `${cnb}--${tag}`;

export const Product = styled('div')`
  ${({ theme }) => {
    return `
      border-bottom: 1px dotted ${theme.palette.grey[600]};

      ${theme.breakpoints.up('sm')} {
        display: flex;
        gap: ${theme.spacing(2)};
        > * {
          width: 50%;
        }
      }

      .${cnb}--info-wrapper {
        border-top: 1px solid ${theme.palette.grey[300]};
        padding: ${theme.spacing(1)} ${theme.spacing(3)};
        margin-bottom: ${theme.spacing(3)};

        ${theme.breakpoints.up('sm')} {
          //margin-top: ${theme.spacing(2)};
          border-top: inherit;
        }

        h1 {
          font-size: 1.5em;
          //margin-top: ${theme.spacing(1)};
          margin-bottom: ${theme.spacing(2)};
        }

        .${fnb} {
          display: grid;
          grid-template-columns: 80px auto;
          //grid-template-columns: 119px calc(60% - 16px);
          gap: ${theme.spacing(2)} ${theme.spacing(2)};

          &.${fnb}--quantity-over-1 {
            grid-template-columns: 119px auto;
          }
          
          > * {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .${fnb}--price {
            //justify-content: right;
          }

          .${fnb}--quantity {
            //grid-area: 2 / 1 / 3 / 2;
            grid-area: 1 / 1 / 2 / 2;
            justify-content: right;
            //padding-right: ${theme.spacing(2)};
          }

          .${fnb}--variants {
            grid-area: 2 / 2 / 3 / 3;
            justify-content: left;
          }

          .${fnb}--actions {
            grid-area: 1 / 2 / 2 / 3;
            //grid-area: 2 / 2 / 3 / 3;
            align-items: flex-start;
            justify-content: left;

            button {
              width: 100%;
            }
            
            ${theme.breakpoints.up('sm')} {
              button {
                width: 75%;
              }
            }

          }

          .${fnb}--variants label, .${fnb}--quantity label {
            visibility: hidden;
            position: absolute;
            width: 1px;
            height: 1px;
            opacity: 0;
            font-size: 0;
            width: 1px;
            height: 1px;
            display: inline-block;
            overflow: hidden;
            border: 0!important;
            padding: 0!important;
            margin: 0!important;
            clip: rect(1px,1px,1px,1px);
          }
        } 
      }

      .${cnb}--product-body {
        margin-top: ${theme.spacing(3)};
        
        .ingredients {
          font-style: italic;
        }
      }

    `;
  }}
`;


