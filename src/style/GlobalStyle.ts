import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    return `

      .layout-wrapper.MuiBox-root {
        
        h1, h2, h3, h4, h5, h6 {
          font-family: Libre Baskerville, serif;
          margin: 0;
        }
  
        p, span, a {
          font-family: Nunito, sans serif;
        }

        p, a, span {
          line-height: 1.6em;

          ${theme.breakpoints.up('md')} {
            line-height: 2em;
          }
        }

        p:last-child {
          margin-bottom: unset;
        }

        ul {
          padding: 0;
        }
        
      }

      a, a:link, a:visited {
        color: ${theme.palette.secondary.dark};
        text-decoration: none;
        // text-transform: none;
      }

      .gatsby-image-wrapper {
        img {
          height: auto;
        }
      }
    
      // *,
      // *::before,
      // *::after {
      //   box-sizing: border-box;
      // }
    
      // html, body {
      //   height: 100%;
      //   margin: 0;
      // }

      // html {
      //   scroll-behavior: smooth;
      //   text-rendering: optimizeLegibility;
      //   -webkit-font-smoothing: antialiased;
      //   -webkit-tap-highlight-color: transparent;
      // }

      
    
      // img {
      //   display: block;
      //   height: auto;
      //   width: 100%;
      // }
    
      // input,
      // select {
      //   border: none;
      //   text-rendering: optimizeLegibility;
      //   -webkit-font-smoothing: antialiased;
      // }
    
      // ol,
      // ul {
      //   list-style: none;
      //   margin: 0;
      //   padding: 0;
      // }
    
    
      svg {
        fill: currentColor;
        // height: 100%;
        // width: 100%;
      }
    
    `;
  }}
  
  
`;
