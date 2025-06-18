import React from 'react';

function Modal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  const formattedMessage = message.split('\n').map((line, index) => (
    <p key={index} style={{ margin: '8px 0' }}>{line}</p>
  ));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#262626',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '600px',
        maxHeight: '80vh',
        overflow: 'auto',
        border: '1px solid #2e8b57',
        color: 'white',
        textAlign: 'left'
      }}>
        <h2 style={{ textAlign: 'center', color: '#2e8b57' }}>Sobre BRGM ONE</h2>
        <div>{formattedMessage}</div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            onClick={onClose}
            style={{
              background: '#2e8b57',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
