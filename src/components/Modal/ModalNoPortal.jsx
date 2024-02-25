import React from 'react';
import './Modal.css'

function Modal({ children, open, close }) {
  if(!open) return null;

  return createPortal(
    <div className='overlay'>
        <div className="modal-container">
            <div className="modal-btn-container">
                <button 
                    className="close-modal" 
                    onClick={() => close(!open) }>X</button>
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