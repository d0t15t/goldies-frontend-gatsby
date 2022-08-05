import styled from 'styled-components';
import { Box, List } from '@material-ui/core'

export const Breadcrumbs = styled('ul')`
  display: flex;
  list-style: none;
  justify-content: center;
  font-size: 0.8em;
  color: ${({theme}) => theme.palette.grey[500]};
  //background-color: ${({theme}) => theme.palette.grey[100]};
  margin: 0 auto !important;
  padding-bottom: ${({theme}) => theme.spacing(1)} !important; 
  padding-top: ${({theme}) => theme.spacing(1)} !important; 
  margin-bottom: ${({theme}) => theme.spacing(3)} !important;
  border-bottom: 1px dotted ${({theme}) => theme.palette.secondary.main};

  * {
    line-height: 1.2em !important;
  }

  li ul {
    display: flex;
    list-style: none;
    flex-direction: column;
    text-align: left;
    min-width: 50px;
    //padding-left: ${({theme}) => theme.spacing(3)} !important;
  }

  > li {
    //text-align:center;
  }

  > li + li {
    padding-left: ${({theme}) => theme.spacing(3)};

    &:before {
      content: '>';
      position: relative;
      display: inline-block;
      //width: 75px;
      //height: 15px;
      padding-right: 24px;
    }

    ul {
      padding-left: ${({theme}) => theme.spacing(6)} !important;
    }
  }

  a, a:link, a:visited {
    color: ${({theme}) => theme.palette.grey[500]};
  }
`;

export default Breadcrumbs;
