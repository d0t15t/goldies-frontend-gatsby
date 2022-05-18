import styled from 'styled-components';
// import { styled } from '@mui/system';
import { AppBar, BottomNavigation, Toolbar } from '@mui/material';

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  '&.MuiPaper-root': {
    backgroundColor: theme.palette.primary.main,
    position: 'sticky',
    paddingRight: '0 !important',
  },
}));

export const Inner = styled(Toolbar)`
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: ${({ theme }) => theme.spacing(1)};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-right: ${({ theme }) => theme.spacing(2)};
  }

  .search-bar {
    padding-left: ${({ theme }) => theme.spacing(1)};
  }

  & > a {
    line-height: unset !important;
  }
`;

export const Unit = styled('span')`
  display: flex;
`;
