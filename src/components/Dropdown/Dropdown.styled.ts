import styled from 'styled-components';

export const Container = styled.div`
  .controls {
    display: flex;
  }
`;
export const ComboBox = styled.div`
  position: relative;
`;

const hasAllAttributes = ({ attr, obj }) => attr.filter((a) => a in obj).length === attr.length;
const printAttributes = ({ attr, obj, suffix }) => attr.map((a) => `${a}: ${obj[a]}$;`);

export const DropDownMenuWrapper = styled.div`
  background: lightgrey;
  position: absolute;
  z-index: 996;
  max-height: 500px;
  overflow-y: scroll;

  ${({ theme }) => {
    const attr = ['left', 'top', 'width', 'height'];
    return (
      hasAllAttributes({ attr, obj: theme }) &&
      `
      left: ${theme.left}px;
      top: ${theme.top + theme.height}px;
      min-width: ${theme.width}px;
    `
    );
  }}
`;

export const DropDownMenu = styled.ul``;

export const DropDownMenuItem = styled.li`
  ${({ theme }) => {
    return `
      border-radius: ${theme?.padding ?? '8px'}; // To do: add theme
      background-color: ${theme?.isHighlighted ? '#bde4ff' : ''};

      &:last {
        padding-bottom: ${theme?.padding ?? '8px'}; // To do: add theme
      }
      
      button {
        padding: ${theme?.padding ?? '8px'}; // To do: add theme
        width: 100%;
        text-align: left;
      }    
    `;
  }}
`;
