import React from 'react';
import { IconContext } from 'react-icons';
import { CgClose } from 'react-icons/cg';
import { Portal } from '~components/index';
import * as S from './Modal.styled';

const ModalClose = ({ handleClose, children }) => {
  const close = () => {
    console.log('doing close');
    handleClose();
  };
  return (
    <button className="close" onClick={close} type="button">
      {/* &times; */}
      {children}
    </button>
  );
};

export const Modal = ({ children }) => {
  return (
    <Portal>
      <S.Container>
        <S.Inner>
          <S.ModalClose>
            <ModalClose handleClose={(e) => console.log(e)}>
              <IconContext.Provider value={{ color: 'blue', className: 'modal-close' }}>
                <CgClose />
              </IconContext.Provider>
            </ModalClose>
          </S.ModalClose>
          <h3>DeezNuts.</h3>
          {children}
        </S.Inner>
      </S.Container>
    </Portal>
  );
};
