import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

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
    <div> 
      <div className={styles.modalContent}>
        {children}
      </div>
      <div className={styles.modal} onClick={onClose}></div>
    </div>,
    modalRoot
  );
};

export default Modal;