import styled from 'styled-components';
import { Box } from '@material-ui/core'

export const Breadcrumbs = styled(Box)`
  background-color: ${({theme}) => theme.palette.primary.main};
`;

export default Breadcrumbs;
