import { styled } from '@mui/system';
import { Box, Grid } from '@mui/material';
export const Collection = styled('div')``;
export const Headline = styled('h3')`
  color: pink;
`;
export const Body = styled('p')`
  color: yellow;
`;

export const TeaserWrapper = styled(Grid)(({ theme }) => {
  return {
    // padding: theme.spacing(2),

    // marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 0,
    },
  };
});
