/* eslint-disable prettier/prettier */
import { styled } from '@mui/system';
import { Box, List as MuiList, TextField, InputBase, InputLabel } from '@mui/material';

export const SearchBar = styled(Box)`
  .search-bar__list-item--highlighted {
    background: ${({ theme }) => theme.palette.primary.main};
    a {
      color: white;
    }
  }

  svg {
    color: rgba(0, 0, 0, 0.54);
  }

  form > * {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    /* grid-template-rows: 100; */

    > * {
      &:nth-child(1) {
        grid-column: 1 / 4;
        grid-row: 1;
      }
      &:nth-child(2) {
        grid-column: 1 / end;
        grid-row: 1;
      }
    }

    /* background-color: alpha(theme.palette.common.white, 0.15), */
  }

  .search-icon-wrapper {
    align-self: stretch;
    text-align: right;
    svg {
      height: 100%;
      position: relative;
      left: 3px;
    }
  }
`;

export const StyledInput = styled(TextField)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  '&.Mui-focused': {
    paddingLeft: theme.spacing(0),
  },
}));

export const Input = styled(TextField)`
  /* background: pink; */
`;

export const List = styled(MuiList)`
  padding-top: 0;
  max-height: 500px;
  overflow-y: scroll;
`;
