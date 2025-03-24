import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  closeOnOverlayClick = true,
  size = 'medium',
  className = '',
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    // Prevent body scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'visible';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`${styles.modal} ${styles[size]} ${className}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

export default Modal;