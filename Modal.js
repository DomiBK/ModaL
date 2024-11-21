import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';
import './Modal.css';

const Modal = ({ children }) => {
  const { isOpen, toggleModal } = useContext(ModalContext);

  const handleCloseModal = () => {
    toggleModal();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={handleCloseModal}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
