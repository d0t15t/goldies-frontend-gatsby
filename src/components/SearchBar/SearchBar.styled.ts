import styled from 'styled-components';

const padding = '8px';

export const Container = styled.div`
  button svg {
    min-width: 20px;
  }

  .controls {
    display: flex;
  }
`;
export const ComboBox = styled.div`
  position: relative;
`;

export const DropDownWrapper = styled.div``;

export const DropDownMenu = styled.ul`
  background: lightgrey;
`;

export const DropDownMenuItem = styled.li`
  ${(props) => {
    const { theme } = props;
    return `
      border-radius: ${theme?.padding ?? 0};
      background-color: ${theme?.isHighlighted ? '#bde4ff' : ''};

      &:last {
        padding-bottom: ${theme?.padding ?? 0};
      }
      
      button {
        padding: ${theme?.padding ?? 0};
        width: 100%;
        text-align: left;
      }    
    `;
  }}
`;
