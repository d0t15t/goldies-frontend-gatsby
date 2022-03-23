import { styled } from '@mui/system';
import { Box, Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  ${({ theme }) => {
    return `
      padding: 0 ${theme.spacing(2)} 0 ${theme.spacing(2)};
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
      * {
        font-size: 1em;
      }
    `;
  }}
`;
