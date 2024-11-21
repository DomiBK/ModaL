
import React, { useContext } from 'react';
import { ModalContext } from './ModalContext.js';

const ModalFooter = ({ callToActionLabel = 'OK', onCancel, onConfirm }) => {
  const { toggleModal } = useContext(ModalContext);

  const handleCancel = () => {
    toggleModal();
    if (onCancel) onCancel();
  };

  const handleConfirm = () => {
    alert('OK');
    toggleModal();
    if (onConfirm) onConfirm();
  };

  return (
    <div className="modal-footer">
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleConfirm}>{callToActionLabel}</button>
    </div>
  );
};

export default ModalFooter;
