import React, { FC, ReactNode, useContext, useEffect, useRef } from 'react';
import { useKeyPress, useDispatch } from '~hooks';
import { ModalContext } from '~context';
import { CloseButton, Overlay, Portal } from '~components';
import * as S from './Modal.styled';

interface ModalCloseProps {
  handleClose: Function;
}

const ModalClose: FC<ModalCloseProps> = ({ handleClose }) => (
  <CloseButton
    buttonStyles={S.buttonStyles}
    iconStyles={{ color: 'black', className: 'modal-close' }}
    handleClick={handleClose}
  />
);

interface ModalProps {
  children: ReactNode;
  setStatus: Function;
  status: boolean;
}

export const Modal = () => {
  const [{ modalIsOpen, modalNodes }, dispatch] = useContext(ModalContext);

  const updateModalIsOpen = (modalIsOpen: boolean, modalNodes: ReactNode) => {
    useDispatch('modalIsOpen', modalIsOpen, dispatch);
    useDispatch('modalNodes', modalNodes, dispatch);
  };

  // Close by outside click
  const node = useRef();
  const handleClick = (e) => {
    console.log('🚀 ~ file: Modal.tsx ~ line 27 ~ Modal ~ modalIsOpen', modalIsOpen, e);
    // if (!modalIsOpen) return;
    if (node?.current?.contains(e.target)) {
      // return;
    }
    // updateModalIsOpen(false, null); // outside click
  };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClick);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, []);

  // Close by esc. key.
  const key = 'Escape';
  const kp = useKeyPress(key);
  useEffect(() => {
    if (kp === true) updateModalIsOpen(false, null);
  }, [kp]);

  return (
    <>
      <div id="modal-portal" />
      {modalIsOpen && (
        <Portal target="modal-portal">
          <Overlay>
            <S.Container ref={node} onClick={handleClick}>
              <ModalClose handleClose={() => updateModalIsOpen(false, null)} />
              <S.Inner>{modalNodes ?? 'foo'}</S.Inner>
            </S.Container>
          </Overlay>
        </Portal>
      )}
    </>
  );
};
