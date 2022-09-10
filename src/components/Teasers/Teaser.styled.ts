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
        padding: ${theme.spacing(2)} ${theme.spacing(2)} 4px ${theme.spacing(2)};
        border-bottom: 1px solid ${theme.palette.grey[400]};
        display: inline;
        color: black;
        font-size: 4vw;
        line-height: 2;

        ${theme.breakpoints.up('sm')} {
          font-size: 2vw;
        }

        ${theme.breakpoints.up('md')} {
          font-size: 1.1vw;
        }
      }
      
      .teaser-text--lower {
        // margin-top: ${theme.spacing(1)};
        margin-bottom: 2px;
        // padding-top: ${theme.spacing(1)};
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
      position: relative;

      .teaser--text-wrapper {
        position: absolute;
        padding: ${theme.spacing(2)};
        background-color: rgba(255, 255, 255, 0.8);
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        opacity: 0;
        transition: opacity 100ms linear;
      }

      &:hover {
        .teaser--text-wrapper {
          opacity: 1;
        }
      }
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
