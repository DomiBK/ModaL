
import React, { useState } from 'react';
import Modal  from './Modal.js';
import ModalHeader from './ModalHeader.js';
import ModalContent from './ModalContent.js';
import ModalFooter from './ModalFooter.js';
import { ModalProvider } from './ModalContext.js';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalProvider>
    <button onClick={handleOpenModal}>Otwórz Modal</button>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    <ModalHeader title="Tytuł Modala" />
    <ModalContent>
    <p>To jest treść modala.</p>
    </ModalContent>
    <ModalFooter
             callToActionLabel="Zapisz"
             onCancel={() => console.log('Cancel clicked')}
             onConfirm={() => console.log('OK clicked')}
           />
    </Modal>
    </ModalProvider>
     );
    }
    export default App;

