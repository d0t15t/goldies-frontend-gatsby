import styled from 'styled-components';

const padding = '8px';

export const Container = styled.div`
  button {
    width: 20px;
  }

  .controls {
    display: flex;
  }

  .dropdown {
    max-height: 516px;
    overflow: hidden;
  }
`;
export const ComboBox = styled.div`
  position: relative;
`;
export const DropDownMenu = styled.ul`
  background: lightgrey;
`;
export const DropDownMenuItem = styled.li`
  background-color: ${(props) => (props.ishighlighted ? '#bde4ff' : '')};
  border-radius: ${padding};

  &:last {
    padding-bottom: ${padding};
  }

  button {
    padding: ${padding};
    width: 100%;
    text-align: left;
  }
`;
