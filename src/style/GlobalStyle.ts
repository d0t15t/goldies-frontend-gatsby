import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    console.log('🚀 ~ file: GlobalStyle.ts ~ line 114 ~ theme', theme);
    return `



      // :root {
      //   font-size: 62.5%;
      // }
    
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    
      html {
        scroll-behavior: smooth;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
      }

      // html {
      //   overflow-x: hidden;
      //   margin-right: calc(-1 * (100vw - 100%));
      // }
    
      body {
        background-color: ${theme.palette.background.paper}
      }
    
      a {
        color: ${theme.palette.primary.main};
        text-decoration: none;
        cursor: pointer;

        &:hover {
          color: ${theme.palette.primary.light};
        }
      }
    
      button {
        cursor: pointer;
      }
    
      button.no-style {
        background: transparent;
        border: none;
        padding: 0;
        outline: none;
      }

      button[disabled] {
        background-color: grey;
        cursor: none;
      }
    
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        font-size: 100%;
        font-weight: normal;
      }
    
      img {
        display: block;
        height: auto;
        width: 100%;
      }
    
      input,
      select {
        border: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
      }
    
      ol,
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    
      p {
        margin: 0;
      }
    
      svg {
        fill: currentColor;
        height: 100%;
        width: 100%;
      }
    
      .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 0px;
      }
    `;
  }}
  
  
`;
