import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css'

function Modal({ children, open, close }) {
  if(!open) return null;

  const modalElement = document.getElementById('overlay');

  return createPortal(
    <div className='overlay'>
        <div className="modal-container">
            <button 
                className="close" 
                onClick={() => close(!open) }>X</button>
            {children}
        </div>
    </div>, 
    modalElement
  )
}

export default Modal;