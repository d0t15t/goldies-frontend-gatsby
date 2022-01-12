/* eslint-disable prettier/prettier */
// import { styled } from '@mui/system';
import styled from 'styled-components';
import {
  Box,
  List as MuiList,
  FormControl,
  TextField,
  InputBase,
  InputLabel,
  OutlinedInput,
  Input as Foo,
} from '@mui/material';

export const SearchBar = styled(Box)`
  .search-bar__list-item--highlighted {
    background: ${({ theme }) => theme.palette.secondary.light};

    a {
      color: ${({ theme }) => theme.palette.secondary.contrastText};
    }
  }

  svg {
    color: rgba(0, 0, 0, 0.54);
  }

  form > * :not(.dropdown-wrapper) {
    display: grid;
    grid-template-columns: repeat(20, 1fr);

    &.form__search-bar--inner__has_value,
    &.form__search-bar--inner__has_focus {
      .form__search-bar-icon {
        display: none;
      }
    }
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
      &:nth-child(3) {
        grid-column: 16 / end;
        grid-row: 1;
      }
    }

    /* background-color: alpha(theme.palette.common.white, 0.15), */
  }

  .form__search-bar-icon {
    align-self: stretch;
    text-align: right;
    svg {
      height: 100%;
      position: relative;
      left: 3px;
    }
  }
`;

export const FormInner = styled(Box)(({ theme }) => ({
  '&&': {
    // backgroundColor: 'yellow',
  },
  '&.form__search-bar--inner__has_value label': {
    paddingLeft: theme.spacing(0),
  },
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '.MuiOutlinedInput-root': {
    // boxSizing: 'border-box',
  },
  '.Mui-focused.MuiOutlinedInput-root': {
    border: `1px solid ${theme.palette.primary.contrastText}`,
  },
}));

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  // color: theme.palette.secondary.main,
  // borderColor: theme.palette.grey[400],
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  paddingLeft: theme.spacing(3),

  '&.Mui-focused, &.form__search-bar--has_value': {
    color: theme.palette.primary.contrastText,
    // paddingLeft: theme.spacing(0),
    padding: `0 ${theme.spacing(1)} 0 ${theme.spacing(1)}`,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const Input = styled(TextField)`
  /* background: pink; */
`;

export const List = styled(MuiList)`
  padding-top: 0;
  max-height: 500px;
  overflow-y: auto;
`;
