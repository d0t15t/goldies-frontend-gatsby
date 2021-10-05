import React, { Component, useEffect, FC, ReactNode, useRef, useState } from 'react';
import { Portal as ReactPortal } from 'react-portal';
import ReactDOM, { createPortal } from 'react-dom';
import * as S from './Portal.styled';

interface PortalProps {
  children: ReactNode;
  status: boolean;
}

export const Portal: FC<PortalProps> = ({ children, status }) => {
  // const [status, setStatus] = useState(false);

  // Use a ternary operator to make sure that the document object is defined
  // const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;
  // const el = useRef(portalRoot ? document.createElement('div') : null);

  return (
    <>
      {status && (
        <ReactPortal node={document && document.getElementById('portal')}>
          <S.Container>{children}</S.Container>
        </ReactPortal>
      )}
    </>
  );
};

export default Portal;
