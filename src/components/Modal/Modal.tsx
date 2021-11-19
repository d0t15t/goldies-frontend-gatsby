import React, { FC, ReactNode, useCallback, useContext, useEffect, useRef } from 'react';
import { useDimensions } from 'react-hook-dimensions';
import useEventListener from '@use-it/event-listener';
import cls from 'classnames';
import { Box, Modal as MuiModal } from '@mui/material';
import { Context } from '~context';
import { useKeyPress, useDispatch } from '~hooks';
import { CloseButton } from '~components';
import * as S from './Modal.styled';

interface ModalCloseProps {
  handleClose: Function;
}

const ModalClose: FC<ModalCloseProps> = ({ handleClose }) => (
  <CloseButton handleClick={handleClose} name="Close modal">
    <span className="visually-hidden">Close modal</span>
  </CloseButton>
);

interface ModalProps {
  children: ReactNode;
  setStatus: Function;
  status: boolean;
}

export const Modal = () => {
  const modalInnerId = 'modal-overlay';
  const [{ modalIsOpen, modalContent, modalStyle }, dispatch] = useContext(Context);

  const [modalRef, modalDimensions] = useDimensions({
    dependencies: [modalIsOpen],
  });

  const updateModalIsOpen = useCallback(
    (status: boolean, content: ReactNode, style: string | null) => {
      useDispatch('modalIsOpen', status, dispatch);
      useDispatch('modalContent', content, dispatch);
    },
    []
  );

  const handleClose = () => updateModalIsOpen(false, null);

  return (
    <S.Modal
      open={modalIsOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.Inner className={cls(['modal-content'])}>{modalContent}</S.Inner>
    </S.Modal>
  );
};
