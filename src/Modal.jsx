import React from 'react'
import ReactDOM from 'react-dom';

const rootModal=document.getElementById('modal-root')

export default function Modal({children,onClose}) {
  return ReactDOM.createPortal (
    <>
     <div className="modal-background">
      <div className="modal-box">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot 
    </>
  )
}
