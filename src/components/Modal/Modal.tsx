import React, { FC, ReactNode, useCallback, useContext, useEffect, useRef } from 'react';
import { useDimensions } from 'react-hook-dimensions';
import useEventListener from '@use-it/event-listener';
import { useKeyPress, useDispatch } from '~hooks';
import { Context } from '~context';
import { CloseButton, Overlay, Portal } from '~components';
import * as S from './Modal.styled';

interface ModalCloseProps {
  handleClose: Function;
}

const ModalClose: FC<ModalCloseProps> = ({ handleClose }) => (
  <CloseButton
    handleClick={handleClose}
    iconStyles={{ color: 'black', className: 'modal-close' }}
  />
);

interface ModalProps {
  children: ReactNode;
  setStatus: Function;
  status: boolean;
}

export const Modal = () => {
  const modalInnerId = 'modal-overlay';
  const [{ modalIsOpen, modalContent }, dispatch] = useContext(Context);

  const [modalRef, modalDimensions] = useDimensions({
    dependencies: [modalIsOpen],
  });

  const updateModalIsOpen = useCallback((status: boolean, content: ReactNode) => {
    useDispatch('modalIsOpen', status, dispatch);
    useDispatch('modalContent', content, dispatch);
  }, []);

  // Close by outside click
  useEventListener('click', (e) => {
    // if (!modalIsOpen) return;
    // if (modalRef?.current?.contains(e.target)) {
    //   return;
    // }
    // updateModalIsOpen(false, null);
  });

  // Close by esc. key.
  const key = 'Escape';
  const kp = useKeyPress(key);
  useEffect(() => {
    if (kp === true) updateModalIsOpen(false, null);
  }, [kp, updateModalIsOpen]);

  return (
    <>
      {modalIsOpen && (
        <Portal>
          <Overlay>
            <S.Container>
              <S.Inner id={modalInnerId} ref={modalRef}>
                {modalContent}
              </S.Inner>
            </S.Container>
            <S.CloseButtonWrapper position={{ ...modalDimensions }}>
              <ModalClose handleClose={() => updateModalIsOpen(false, null)} />
            </S.CloseButtonWrapper>
          </Overlay>
        </Portal>
      )}
    </>
  );
};
