import styled from 'styled-components';
import { List as MuiList, TextField, InputBase } from '@mui/material';
import { pink } from '@mui/material/colors';
export const SearchBar = styled.div`
  .search-bar__list-item--highlighted {
    background: ${({ theme }) => theme.palette.primary.main};
    a {
      color: white;
    }
  }
`;
export const Input = styled(TextField)`
  /* background: pink; */
`;
export const List = styled(MuiList)`
  padding-top: 0;
  max-height: 500px;
  overflow-y: scroll;
`;
