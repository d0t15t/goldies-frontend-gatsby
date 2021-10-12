import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Portal as ReactPortal } from 'react-portal';
import * as S from './Portal.styled';

interface PortalProps {
  children: ReactNode;
  target: string;
  status: boolean;
}

export const Portal: React.FC<PortalProps> = ({ target, children }) => {
  return (
    <ReactPortal node={typeof document !== 'undefined' && document.getElementById(target)}>
      {children}
    </ReactPortal>
  );
  // const domElement = document.getElementById(target);
  // return domElement && status ? ReactDOM.createPortal(children, domElement) : null;
};

// export const Portal: FC<PortalProps> = ({ children, name, status }) => {
//   // const [status, setStatus] = useState(false);

//   // Use a ternary operator to make sure that the document object is defined
//   // const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;
//   // const el = useRef(portalRoot ? document.createElement('div') : null);

//   return (
//     <>
//       {status && (
//         <ReactPortal node={document && document.getElementById(name ?? 'portal')}>
//           <S.Container>{children}</S.Container>
//         </ReactPortal>
//       )}
//     </>
//   );
// };

export default Portal;
