import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import * as S from './Modal.styled';

const ModalClose = ({ handleClose }) => {
  const close = () => {
    console.log('doing close');
    handleClose();
  };
  return (
    <button className="close" onClick={close} type="button">
      &times;
    </button>
  );
};

export const Modal = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal nested>
    {(close) => (
      <div className="modal">
        <ModalClose handleClose={close} />
        <div className="header"> Modal Title </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
              nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
              deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
        </div>
      </div>
    )}
  </Popup>
);
