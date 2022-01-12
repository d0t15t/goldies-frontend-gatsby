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
  position: absolute;
  z-index: 996;

  ${({ theme }) => {
    return `
      background: ${theme.palette.background.default};
      border: 1px solid ${theme.palette.secondary.main};
      margin-top: -1px;
      border-radius: 4px;
      // margin-top: ${theme.spacing(1)};
      
      li + li {
        // margin-top: ${theme.spacing(1)};
      }


    `;
  }}

  ${({ ltr, parentCoordinates, theme }) => {
    const attr = ['left', 'top', 'width', 'height'];
    return (
      hasAllAttributes({ attr, obj: parentCoordinates }) &&
      getDirectionalStyles({ dir: ltr, coordinates: parentCoordinates })
    );
  }}
`;
