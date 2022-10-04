import styled from 'styled-components';
import { Box, Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  ${({ theme }) => {
    return `
    `;
  }}
`;

export const Upper = styled(Box)`
  ${({ theme }) => {
    return `

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

export const ProductsGrid = styled(Grid)`
  ${({ theme }) => {
    return `
      padding: 0 ${theme.spacing(2)} 0 ${theme.spacing(2)};
    `;
  }}
`;

export const FeaturedWrapper = styled(Box)`
  ${({ theme }) => {
    return `
      padding: ${theme.spacing(2)};

      .featured-products--title {
        text-align: right;
      }

      .collection--featured-products-text {
        text-align: center;
      }
    `;
  }}
`;

export const TeaserWrapper = styled(Grid)`
  ${({ theme }) => {
    return `
      padding-bottom: ${theme.spacing(2)};
      ${theme.breakpoints.up('sm')} {
        padding-bottom: 0;
      }

    `;
  }}
`;

export const Description = styled(Box)`
  ${({ theme }) => {
    return `
      padding: 0 ${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(3)};
    `;
  }}
`;
