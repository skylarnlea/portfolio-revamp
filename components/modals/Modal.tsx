import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  headerBgColor: string;
  contentBgColor: string;
  children: React.ReactNode;
  maxWidth?: string;
  ariaLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  headerBgColor,
  contentBgColor,
  children,
  maxWidth = '600px',
  ariaLabel
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '30px',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: contentBgColor,
        border: `3px solid ${headerBgColor}`,
        maxWidth,
        width: '100%',
        fontFamily: 'Arial, sans-serif',
        margin: '20px auto'
      }} role="dialog" aria-modal="true" aria-label={ariaLabel || title}>
        {/* Modal Header */}
        <div style={{
          backgroundColor: headerBgColor,
          color: 'white',
          padding: '12px 20px',
          fontWeight: 'bold',
          fontSize: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {title}
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '0 8px'
            }}
            aria-label={`Close ${ariaLabel || title}`}
          >
            ✕
          </button>
        </div>
        
        {/* Modal Content */}
        <div style={{ padding: '20px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
