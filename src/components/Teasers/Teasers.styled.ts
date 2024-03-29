import { styled } from '@mui/system';
import { Box, Grid } from '@mui/material';

export * from '~components/Collection/Collection.styled';

export const FancyGrid = styled(Box)(({ theme }) => {
  return `
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40vh 25vh 25vh 40vh;
    grid-gap: ${theme.spacing(2)};

    > * {
      &:nth-child(1) { 
        grid-column-start: 1;
        grid-column-end: 7;
      }
      &:nth-child(2) { 
        grid-column-start: 7;
        grid-column-end: 13;
      }
      &:nth-child(3) { 
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: span 2;
      }
      &:nth-child(4) {
        grid-column-start: 9;
        grid-column-end: 13;
      }
      &:nth-child(5) { 
        grid-column-start: 9;
        grid-column-end: 13;
      }
      &:nth-child(6) { 
        grid-column-start: 1;
        grid-column-end: 7;
      }
      &:nth-child(7) { 
        grid-column-start: 7;
        grid-column-end: 13;
      }
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;

      img {
        object-fit: cover;
        height: 100%;
      }
    }

  `;
});

export const TeasersBasic = styled('ul')`
  ${({theme}) => {
    return`
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > * {
        text-align: center;
      }
    `;
  }}
`;

export const TeasersGrid = styled(TeasersBasic)`
  ${({theme}) => {
    return`
      display: grid;
      grid-template-columns: repeat(3, 33%);
      gap: ${theme.spacing(2)};
      
      > * {
        //width: 33%;
      }
    `;
  }}
`;

