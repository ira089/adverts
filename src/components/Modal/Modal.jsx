import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RxCross2 } from "react-icons/rx";
import styles from './modal.module.css';
// import { Opacity, Modalcont, ModalClose } from './Modal.styled';

// const Modal = ({ children, width, height, onClose, developers = false }) => {
    const Modal = ({ isOpen, onClose, children }) => { 
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  if (!isOpen) return null;
  
  return createPortal(
    <div 
    // onClick={onClose} 
    className={styles.modal}>
        
      <div className={styles.modalContent}
        // $developers={developers}
        // $Width={width}
        // $Height={height}
        // onClick={event => event.stopPropagation()}
      >
        <button className={styles.modalClose} type="button" aria-label="Close modal" onClick={onClose}>
        <RxCross2 />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;