import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return `
      width: 100%;
      //max-width: 700px;

      #https://codepen.io/tostrye/pen/WqKgjz
      @-webkit-keyframes move {
          from {
              background-position: 2px 19px;
            }
          to {
              background-position: 500px 19px;
            }
        }
      @keyframe move {
            from {
                background-position: 2px 19px;
              }
            to {
                background-position: 500px 19px;
              }
          }

      .cart--line {
        text-align: center;
        display: block;
        border: none;
        height: ${theme.spacing(3)};
        color: ${theme.palette.primary.light};
        width: 75%;
        margin: auto;
        font-weight: 400;
        padding-bottom: 5px;
        background: url("/wave.svg");
        background-repeat: repeat;
        background-position-x: 0%;
        background-position-y: 0%;
        background-size: auto auto;
        background-repeat: repeat-x;
        background-size: 15px 5px; 
        background-position: 2px 19px;
        animation: move 15s linear infinite;
        -webkit-animation: move 15s linear infinite;
        //animation-play-state: paused;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
        animation-play-state: running;
      }
      .cart-item {
      //  padding-top: ${theme.spacing(2)};
      }
      
      .cart--total {
        text-align: right;
        padding: ${theme.spacing(3)};
        
        .cart-subtotal {
          padding-right: ${theme.spacing(2)};
        }

        .price {
          font-size: 1.3em;
        }
      }

      .cart--actions {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          background-color: ${theme.palette.primary.main};
          color: ${theme.palette.secondary.dark};
          color: ${theme.palette.primary.contrastText};
          padding: 0 ${theme.spacing(3)};
          border-radius: 5px;
          text-transform: uppercase;
        }
      }

      // .cart--button-checkout {
      //   background-color: ${theme.palette.primary.main};
      //   color: ${theme.palette.secondary.dark};
      //   color: ${theme.palette.primary.contrastText};
      // }

      .cart--lower {
        padding: ${theme.spacing(3)}; 
        text-align: center;

        > *:nth-child(2) {
          padding-top: ${theme.spacing(1)};
        }
      }
    `;
  }}
`;

export const List = styled.ul`
  ${({ theme }) => {
    return `
      
      
    `;
  }}
`;

export const PaymentMethods = styled.div`
  ${({ theme }) => {
    return `
      ul {
        display: flex;
        flex-wrap: wrap;
        background: yellow;
      }
      ul li {
        border-top: 1px solid ${theme.palette.primary};
      }`;
  }}
`;
