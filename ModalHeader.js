
import React, { useContext } from 'react';
import { ModalContext } from './ModalContext.js';

const ModalHeader = ({ title }) => {
  const { toggleModal } = useContext(ModalContext);

  return (
    <div className="modal-header">
      <h3>{title}</h3>
      <button onClick={toggleModal} className="close-button">&times;</button>
    </div>
  );
};

export default ModalHeader;
