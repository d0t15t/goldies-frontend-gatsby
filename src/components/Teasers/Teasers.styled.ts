import { styled } from '@mui/system';
import { Box } from '@mui/material';

// export const Teasers = styled(Box)`
//   display: flex;
//   flex-wrap: wrap;
//   > * {
//     width: 50%;
//     padding: 20px;
//   }
// `;

const sizing = [0.5, 0.5, 0.65, 0.35, 0.35];
const getIndex = (i, l) => (i <= l ? i : l - i);
const getWidth = (i) => {
  return `${100 * sizing[getIndex(i, sizing.length)]}%`;
};

export const Grid = styled(Box)(({ theme }) => {
  return `
    display: grid;
    grid-gap: ${theme.spacing(3)};
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 30vh 20vh 20vh 30vh;

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
        // grid-row-end: 6;
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
      }
    }

  `;
});
