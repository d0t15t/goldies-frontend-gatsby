import styled from 'styled-components';

const hasAllAttributes = ({ attr, obj }) => attr.filter((a) => a in obj).length === attr.length;
const printAttributes = ({ attr, obj, suffix }) => attr.map((a) => `${a}: ${obj[a]}$;`);

export const Wrapper = styled.div`
  /* position: relative; */
`;

const getDirectionalStyles = ({ dir, coordinates }) => {
  dir ??= 'ltr';
  return dir === 'ltr'
    ? `left: ${coordinates.left}px;
      top: ${coordinates.top + coordinates.height}px;
      min-width: ${coordinates.width}px;`
    : 'left: 0';
};

export const DropDown = styled.div`
  background: lightgrey;
  position: absolute;
  z-index: 996;
  /* max-height: 500px; */
  overflow-y: scroll;

  ${({ ltr, parentCoordinates, theme }) => {
    const attr = ['left', 'top', 'width', 'height'];
    return (
      hasAllAttributes({ attr, obj: parentCoordinates }) &&
      getDirectionalStyles({ dir: ltr, coordinates: parentCoordinates })
    );
  }}
`;
