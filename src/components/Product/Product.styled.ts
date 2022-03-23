import styled from 'styled-components';

export const Product = styled('div')`
  ${({ theme }) => {
    return `
      .gatsby-image-wrapper {
        img {
          height: auto;
        }
      }

      .product-body {
        margin-top: ${theme.spacing(3)};
      }

      .product-info-wrapper {
        padding-top: ${theme.spacing(1)};

        ${theme.breakpoints.up('sm')} {
          margin-top: ${theme.spacing(3)};
        }
      }

      ${theme.breakpoints.up('sm')} {
        display: flex;
        gap: ${theme.spacing(2)};
        > * {
          width: 50%;
        }
      }
    `;
  }}
`;

export const Controls = styled.div`
  ${({ theme }) => {
    return `
      display: flex;
      justify-content: center;
      gap: ${theme.spacing(2)};

      > * {
        display: flex;
        flex-direction: column;
        justify-content: end;
        text-align: center;

        button {
          margin-top: ${theme.spacing(2)};
        }
      }

      .price-wrapper {
        text-align: center;

        button {
          box-shadow: unset;
        }

        .price-element {
          font-size: 3vh;
          line-height: 0;
        }
      }

      .counter-wrapper {
        .label {

        }

        button {
          margin-top: ${theme.spacing(1)}
        }
      }

    `;
  }}
`;
