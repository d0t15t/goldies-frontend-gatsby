import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const StyledTeaser = styled(Box)`
  height: 100%;
`;

export const StyledProductTeaser = styled(StyledTeaser)`
  ${({ theme }) => {
    return `
      border: 1px solid ${theme.palette.secondary.main};
      text-align: center;

      &.has-hover {
        border-color: ${theme.palette.primary.main};
      }

      && h5 {
        padding: 0 ${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(2)};
        border-bottom: 1px solid;
        display: inline;
        color: black;
        font-size: 4vw;

        ${theme.breakpoints.up('sm')} {
          font-size: 2vw;
        }

        ${theme.breakpoints.up('md')} {
          font-size: 1vw;
        }
      }
      
      .teaser-text--lower {
        margin-top: ${theme.spacing(1)};
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      button {
        color: ${theme.palette.secondary.dark};
        
        &: hover {
          background-color: inherit;
        }
      }
    `;
  }}
`;

export const StyledImageTeaser = styled(StyledTeaser)`
  ${({ theme }) => {
    return `

    `;
  }}
`;

export const StyledSlideTeaser = styled(StyledTeaser)`
  ${({ theme }) => {
    return `

      display: flex;
      flex-direction: column;
      background: ${theme.palette.secondary.main};
      padding-bottom ${theme.spacing(8)};

      & * {
        color: ${theme.palette.background.paper};
      }

      > * {

        &:nth-child(1) {
          flex: 1;
          padding-bottom ${theme.spacing(1)};
        }

        > *:nth-child(1) {
          height: 100%;
        }
      }

    `;
  }}
`;
export const Text = styled(Typography)``;
export const SubTitle = styled('h5')``;
export const TitleWrapper = styled(Box)``;
