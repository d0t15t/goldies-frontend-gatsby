import styled from 'styled-components';
import { Box } from '@mui/material';

export const RelatedItems = styled(Box)`
  ${({ theme }) => {
    return `       
  text-align: center;
  padding-top: ${theme.spacing(2)};
  color: ${theme.palette.grey[600]};
  
  h6 {
    padding-bottom: ${theme.spacing(1)};
  }
    
  &::before {
    content: '~';
    display: block;
    margin: ${theme.spacing(2)} 0;
  }
      
  ul {
    list-style: none;

    & li a {
      transition: color 100ms linear;

      &:hover {
        color: ${theme.palette.primary.main};
      }
    }

    & ul {
        display: flex;
        justify-content: center;

      & li {
        padding: 0 ${theme.spacing(1)};              
      }
    }
  }


  > ul > li + li {
    //padding-top: ${theme.spacing(1)};

    & p {
      text-transform: lowercase;
      //padding-bottom: ${theme.spacing(1)};
    }

    & p::before {
      content: '&';
      display: inline-block;
      padding-right: 3px;
    }

    & p::after {
      content: ':';
      display: inline-block;
      padding-right: 3px;
    }
  }

  .product--related-items--set {
    padding-top: ${theme.spacing(2)};
  }
    `;
  }};
`;
