import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css'

function Modal({ children, open, close }) {
  if(!open) return null;

  const modalElement = document.getElementById('modal');

  return createPortal(
    <div className='overlay'>
        <div className="modal-container">
            <div className="modal-btn-container">
                <button 
                    className="close-modal" 
                    onClick={() => {
                      // clear currEventDay (?)
                      close(!open) 
                    }}>X</button>
            </div>
            <div className="modal-content-container">
                {children}
            </div>
        </div>
    </div>, 
    modalElement
  )
}

export default Modal;