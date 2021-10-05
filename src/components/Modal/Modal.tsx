import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { CgClose } from 'react-icons/cg';
import { Button, Overlay, Portal } from '~components/index';
import * as S from './Modal.styled';

console.log('🚀 ~ file: Modal.tsx ~ line 14 ~ ModalClose ~ S.buttonStyles', S.buttonStyles);
const ModalClose = ({ handleClose }) => {
  return (
    <Button
      handleClick={() => {
        handleClose();
      }}
      styles={S.buttonStyles}
      type="button"
    >
      <IconContext.Provider value={{ color: 'black', className: 'modal-close' }}>
        <CgClose />
      </IconContext.Provider>
    </Button>
  );
};

export const Modal = ({ children, setStatus, status }) => {
  return (
    <Portal status={status}>
      <Overlay>
        <S.Container>
          <ModalClose
            handleClose={() => {
              setStatus(false);
            }}
          />
          {/* <S.Inner>{children}</S.Inner> */}
          {children}
        </S.Container>
      </Overlay>
    </Portal>
  );
};
